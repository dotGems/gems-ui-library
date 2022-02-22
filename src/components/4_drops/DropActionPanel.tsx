import React, { useContext, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Grid, Typography, Button } from '@mui/material';

import { StandardModel, StandardSize } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { IPFS_SOURCE, IPFS_SOURCE_FALLBACK } from '../../data/constants/urls';
import { formatPriceDecimals, splitPriceAndCurrency } from "../../common/data";
import DotGemsContext from '../1_core/DotGemsContext';
import { QtyControl, defaultConfig as qtyConfig } from '../1_core/QtyControl';

export enum DropActionPanelOrientation {
    horizontal = "horizontal",
    vertical = "vertical"
}

export interface DropActionPanelProps extends StandardModel {
    data: DropModel,
    config?:{
        orientation: DropActionPanelOrientation,
        showPurchasing: boolean,
        label?: {
            startIcon: Node,
            label: string
        }
    }
    elevation?: number
}

const useStyles = makeStyles({
    dropActionPanel: {
        padding: 0,
        position: "relative"
    },
    dropActionPanelContent: {
        paddingBottom: "0 !important",
        padding: 0,
        position: "relative"
    },
    listingPrice: {
        fontSize: "1.5em",
        fontWeight: "bold",
        marginRight: "0.25em",
        display: "inline-block",
        textAlign: "left"
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buyButton : {
        fontSize:"16px",
        "@media (max-width: 599px)": {
            padding:"8px 25px", 
        },
        "@media (min-width: 600px)": {
            padding:"8px 48px",
        }
    }
});

const defaultConfig = {
    orientation: DropActionPanelOrientation.vertical,
    showPurchasing: false
}

/**
 * Displays a drop's core information and purchasing actions
 * in a card.
 * 
 * @todo Translate
 * @todo Make price display a component
 * @todo Handle showPurchasingProp
 */

export const DropActionPanel = ({
    size,
    elevation,
    // className,
    style,
    data,
    // config = defaultConfig,
}: DropActionPanelProps) => {

    const classes = useStyles();
    const [qty, setQty] = useState(1);

    // const getCardWidth = () => {
    //     if (config?.orientation?.indexOf("horizontal") !== -1) {
    //         switch (size) {
    //             case StandardSize.sm: return "200px"
    //             case StandardSize.lg: return "350px"
    //             default: return "275px" // Includes md
    //         }
    //     } else {
    //         return "100%";
    //     }
    // }

    const renderPrice = () => {
        let splitListingPrice = splitPriceAndCurrency(data.listing_price);
        if (splitListingPrice && splitListingPrice.length === 2) {
            return (<div style={{ textAlign: "left" }}>
                <Typography variant="body1" className={classes.listingPrice}>{formatPriceDecimals(parseFloat(splitListingPrice[0]) * qty, 4)}</Typography>
                <Typography variant="body2" color="#A5A5A5" style={{ display: "inline-block" }}>{splitListingPrice[1]}</Typography>
            </div>)
        } else {
            console.warn('Unable to render price.');
            return null;
        }
    }

    const buyNow = () => {
        window.location.href = "https://eos.atomichub.io/drops/117";
    }

    return (
        <Card className={classes.dropActionPanel} style={{ width: "100%", ...style }} elevation={elevation}>
            <Grid container flexDirection={'row'} style={{padding:"16px 32px 16px 16px"}}>
                <Grid item xs={12} md={6} style={{ display:"flex", flexDirection:"row" }}>
                    <div style={{ width:"80px", paddingRight:"16px" }}>
                        <img 
                            src={`${IPFS_SOURCE}${data.immutable_serialized_data.img}?size=700`} 
                            // onError={(event: any) => event.target.src = `${IPFS_SOURCE_FALLBACK}${data[activePart]}`}
                            // src={`${IPFS_SOURCE}${data[activePart]}?size=700`}
                            style={{ height:"80px", display:"xflex", margin:"auto" }}
                        />
                    </div>
                    <div style={{ display:"flex", flexDirection:"column" }}>
                        <Typography variant="h3" style={{ fontSize: "1.5em", fontWeight: "bold" }}>{data.immutable_serialized_data.name}</Typography>
                        {renderPrice()}
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end" }}>
                    <div style={{ margin:"auto 16px" }}>
                        <Button variant='contained' className={classes.buyButton} onClick={buyNow}>Buy Now</Button>
                    </div>
                    <QtyControl 
                        config={{
                            isEditable: qtyConfig.isEditable,
                            onChange: setQty,
                            maxQty: qtyConfig.maxQty
                        }}
                        size={StandardSize.lg}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};