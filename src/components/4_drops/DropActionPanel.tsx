import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, Grid, Typography } from '@mui/material';

import { StandardModel, StandardSize } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { IPFS_SOURCE } from '../../data/constants/urls';
import { Button } from '../1_core/Button';
import { splitPriceAndCurrency } from "../../common/data";
import DotGemsContext from '../1_core/DotGemsContext';
import { QtyControl, defaultConfig as qtyConfig } from '../1_core/QtyControl';

export enum DropActionPanelOrientation {
    horizontal = "horizontal",
    vertical = "vertical"
}

export interface DropActionPanelProps extends StandardModel {
    data: DropModel,
    config: {
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
    actionsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
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
    // style,
    data,
    config = defaultConfig,
}: DropActionPanelProps) => {

    const classes = useStyles();
    const dotGemsCtx = useContext(DotGemsContext);

    const getCardWidth = () => {
        if (config?.orientation?.indexOf("horizontal") !== -1) {
            switch (size) {
                case StandardSize.sm: return "200px"
                case StandardSize.lg: return "350px"
                default: return "275px" // Includes md
            }
        } else {
            return "100%";
        }
    }

    const renderPrice = () => {
        let splitListingPrice = splitPriceAndCurrency(data.listing_price);
        return (<div>
            <Typography variant="body1" style={{ fontSize: "2.4em", fontWeight: "bold", marginRight: "0.20em", display: "inline-block" }}>{splitListingPrice[0]}</Typography>
            <Typography variant="body2" color="#A5A5A5" style={{ display: "inline-block", fontSize: "1.4em" }}>{splitListingPrice[1]}</Typography>
        </div>)
    }

    return (
        <Card className={classes.dropActionPanel} style={{ width: "100%" }} elevation={elevation}>
            <Grid container flexDirection={'row'} style={{padding:"16px 32px 16px 16px"}}>
                <Grid item xs={12} md={6} style={{ display:"flex", flexDirection:"row" }}>
                    <div style={{ width:"80px", paddingRight:"16px" }}>
                        <img src={`${IPFS_SOURCE}${data.template.deserialized.img}`} 
                            style={{ height:"80px", display:"flex", margin:"auto" }}
                        />
                    </div>
                    <div style={{ display:"flex", flexDirection:"column" }}>
                        <Typography variant="h3" style={{ fontSize: "1.5em", fontWeight: "bold" }}>{data.template.deserialized.name}</Typography>
                        {renderPrice()}
                    </div>
                </Grid>
                <Grid item xs={12} md={6} style={{ display:"flex", flexDirection:"row", justifyContent:"flex-end" }}>
                    <div style={{ margin:"auto 16px" }}>
                        <Button label="Buy Now" variant='contained' style={{ padding:"8px 48px", fontSize:"16px" }}/>
                    </div>
                    <QtyControl 
                        config={{
                            isEditable: qtyConfig.isEditable,
                            onChange: qtyConfig.onChange,
                            maxQty: qtyConfig.maxQty
                        }}
                        size={StandardSize.lg}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};