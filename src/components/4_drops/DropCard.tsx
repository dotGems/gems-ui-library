import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';

import { StandardModel } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { IPFS_SOURCE } from '../../data/constants/urls';
import { Button } from '../1_core/Button';
import { Tag } from '../1_core/Tag';
import { splitPriceAndCurrency } from "../../utils/data";
import DotGemsContext from '../1_core/DotGemsContext';
import { QtyControl, defaultConfig as qtyConfig } from '../1_core/QtyControl';

export enum DropCardOrientation {
    horizontal = "horizontal",
    vertical = "vertical"
}

export interface DropCardProps extends StandardModel {
    data: DropModel,
    config: {
        orientation: DropCardOrientation,
        showPurchasing: Boolean,
        label?: {
            startIcon: Node,
            label: string
        }
    }
}

const useStyles = makeStyles({
    dropCard: {
        padding: 0,
        position: "relative"
    },
    dropCardContent: {
        paddingBottom: "0 !important",
        padding: 0,
        position: "relative"
    },
    dropImg: {
        width: "100%"
    },
    dropInfoContainer: {
        padding: "24px",
        paddingBottom: 0
    },
    titleAndActions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    clampedDesc: {
        display: "-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient": "vertical",
        overflow: "hidden"
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const defaultConfig = {
    orientation: DropCardOrientation.vertical,
    showPurchasing: false
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
    className,
    style,
    data,
    config = defaultConfig,
}: DropCardProps) => {

    const classes = useStyles();
    const dotGemsCtx =  useContext(DotGemsContext);

    const getCardWidth = () => {
        if(config?.orientation?.indexOf("horizontal") !== -1) {
            switch(size) {
                case 'sm': return "200px"
                case 'lg': return "350px"
                default: return "275px" // Includes md
            }
        } else {
            return "100%";
        }
    }

    const renderPrice = () => {
        let splitListingPrice = splitPriceAndCurrency(data.listing_price);
        return (<div>
            <Typography variant="body1" style={{fontSize: "2em", fontWeight: "bold", marginRight: "0.25em", display: "inline-block"}}>{splitListingPrice[0]}</Typography>
            <Typography variant="body2" color="#A5A5A5" style={{display: "inline-block"}}>{splitListingPrice[1]}</Typography>
        </div>)
    }

    return (
        <Card className={classes.dropCard} style={{width: getCardWidth()}}>
            <CardContent className={classes.dropCardContent}>
                <img src={`${IPFS_SOURCE}${data.template.deserialized.img}`} className={classes.dropImg}/>
                <div className={classes.dropInfoContainer}>
                    <div className={classes.titleAndActions}>
                        <Typography variant="h3" style={{fontSize: "1.5em", fontWeight: "bold"}}>{data.template.deserialized.name}</Typography>
                        <Button size="sm" label={<ArrowForwardIcon/>} variant="text" onClick={() => {console.log("Show m'details m'lady")}}/>
                    </div>
                    <Typography
                        className={classes.clampedDesc}
                        variant="caption"
                        color="#AEAEAE">
                            {data.template.deserialized.about}
                    </Typography>
                    <div style={{marginTop: "12px"}}>
                        <Tag
                            data={{
                                icon:PersonOutlinedIcon,
                                iconTitle:"Author",
                                label:data.template.deserialized.artist}}
                            variant="light" 
                            size="lg"
                            config={{custom: {hasPadding: false}}}/>
                        <Tag
                            data={{
                                icon:CollectionsOutlinedIcon,
                                iconTitle:"Collection",
                                label:data.collection_name}}
                            variant="light"
                            size="lg"
                            config={{custom: {hasPadding: false}}}/>
                        <Tag
                            data={{
                                icon:CollectionsOutlinedIcon,
                                iconTitle:"Mint Number",
                                label:<>{data.template.issued_supply}&nbsp;of&nbsp;{data.template.max_supply}</>}}
                            variant="light"
                            size="lg"
                            config={{custom: {hasPadding: false}}}/>
                    </div>
                    {renderPrice()}
                </div>
            </CardContent>
            <CardActions className={classes.actionsContainer} style={{borderTop: "solid 1px #F6F6F6", padding: "24px"}}>
                <QtyControl {...qtyConfig}/>
                <Button variant="text" label={dotGemsCtx.config.chain.useCheckout ? "Add to Cart" : "Buy"}/>
            </CardActions>
        </Card>
    );
};