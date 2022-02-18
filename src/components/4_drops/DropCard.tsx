import React, { useContext, useState } from 'react';
import { makeStyles, useTheme } from '@mui/styles';
import { Card, CardActions, CardContent, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

import { StandardModel, StandardSize } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { IPFS_SOURCE } from '../../data/constants/urls';
import { Tag } from '../1_core/Tag';
import { formatPriceDecimals, splitPriceAndCurrency } from "../../common/data";
import DotGemsContext from '../1_core/DotGemsContext';
import { QtyControl, defaultConfig as qtyConfig } from '../1_core/QtyControl';
import { CoreVariant } from '../../models/StandardCore.model';

export enum DropCardOrientation {
    horizontal = "horizontal",
    vertical = "vertical"
}

export interface DropCardProps extends StandardModel {
    data: DropModel,
    config: {
        orientation: DropCardOrientation,
        showPurchasing: boolean,
        label?: {
            startIcon: Node,
            label: string
        },
        onClick?: Function
    }
}

const useStyles = makeStyles(theme => ({
    dropCard: {
        padding: 0,
        height: "100%",
        position: "relative",
    },
    dropCardContent: {
        paddingBottom: "0 !important",
        padding: 0,
        position: "relative"
    },
    dropImg: {
        maxWidth: "100%",
        maxHeight: "250px",
        marginLeft: "50%",
        transform: "TranslateX(-50%)"
    },
    dropInfoContainer: {
        padding: "8px",
        [theme.breakpoints.up('md')]: {
            padding: "24px",
            paddingBottom: "130px",
        },
        paddingBottom: "130px",
    },
    titleAndActions: {
        display: "flex",
        textAlign: "left",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clampedDesc: {
        textAlign: "left",
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        overflow: "hidden"
    },
    footerContainer: {
        marginTop: "auto",
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        borderTop: "solid 1px #F6F6F6",
        padding: '8px',
        [theme.breakpoints.up('md')]: {
            padding: '8px 24px',
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left"
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
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    }
}));

const defaultConfig = {
    orientation: DropCardOrientation.vertical,
    showPurchasing: false,
    onClick: () => { }
}

/**
 * Displays a drop's core information and purchasing actions
 * in a card.
 * 
 * @todo Translate
 * @todo Make price display a component
 * @todo Make qty selector a component
 * @todo Add collection name to data, since we only have collection_name (ID-like) available
 * @todo Implement context (add to cart vs buy)
 * @todo Handle showPurchasingProp
 * @todo Handle orientation
 */
export const DropCard = ({
    size,
    // className,
    // style,
    data,
    config = defaultConfig,
}: DropCardProps) => {

    const theme = useTheme();
    const classes = useStyles(theme);
    const dotGemsCtx = useContext(DotGemsContext);
    const [qty, setQty] = useState(1);

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

    return (
        <Card className={classes.dropCard} style={{ width: getCardWidth() }}>
            <CardContent className={classes.dropCardContent}>
                <img src={`${IPFS_SOURCE}${data.immutable_serialized_data.img}?size=700`} className={classes.dropImg} />
                <div className={classes.dropInfoContainer}>
                    <div className={classes.titleAndActions}>
                        <Typography variant="h3" style={{ fontSize: "1.5em", fontWeight: "bold" }}>{data.immutable_serialized_data.name}</Typography>
                        <Button
                            size={StandardSize.sm}
                            variant="text"
                            onClick={() => config.onClick ? config.onClick(data.drop_id) : () => { }}>
                            <ArrowForwardIcon />
                        </Button>
                    </div>
                    <Typography
                        className={classes.clampedDesc}
                        variant="caption"
                        color="#AEAEAE">
                        {data.immutable_serialized_data.context}
                    </Typography>
                    <div style={{ marginTop: "12px" }}>
                        <Tag
                            data={{
                                icon: PersonOutlinedIcon,
                                iconTitle: "Author",
                                label: data.immutable_serialized_data.artist
                            }}
                            variant={CoreVariant.light}
                            size={StandardSize.lg}
                            config={{ custom: { hasPadding: false } }} />
                        <Tag
                            data={{
                                icon: CollectionsOutlinedIcon,
                                iconTitle: "Collection",
                                label: data.collection_name
                            }}
                            variant={CoreVariant.light}
                            size={StandardSize.lg}
                            config={{ custom: { hasPadding: false } }} />
                        <Tag
                            data={{
                                icon: CollectionsOutlinedIcon,
                                iconTitle: "Mint Number",
                                label: <>{data.issued_supply}&nbsp;of&nbsp;{data.max_supply}</>
                            }}
                            variant={CoreVariant.light}
                            size={StandardSize.lg}
                            config={{ custom: { hasPadding: false } }} />
                    </div>
                </div>
            </CardContent>
            <CardActions className={classes.footerContainer}>
                {renderPrice()}
                <div className={classes.actionsContainer}>
                    <QtyControl config={{
                        isEditable: qtyConfig.isEditable,
                        onChange: setQty,
                        maxQty: qtyConfig.maxQty
                    }} />
                    <Button variant="text">
                        {dotGemsCtx.config.chain.use_checkout ? "Add to Cart" : "Buy"}
                    </Button>
                </div>
            </CardActions>
        </Card>
    );
};