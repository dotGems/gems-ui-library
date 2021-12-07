import React from 'react';
import { makeStyles } from '@mui/styles';
import MuiGrid from '@mui/material/Grid';

import { StandardModel } from "../../models/Standard.model";
import { IPFS_SOURCE } from '../../constants/urls';
import { CollectionDetails } from "./CollectionDetails";

export interface CollectionBannerProps extends StandardModel {
    data: {
        collection_name: string;
        author: string;
        img: string;
        market_fee: string;
        desc: string;
        name: string;
    },
    config: {
        showViewData?: Boolean
    }
}

const useStyles = makeStyles({
    collectionBanner: {
        backgroundColor: "white"
    },
    collectionInfo: {
        padding: "24px"
    },
    collectionImg: {
        width: "100%"
    }
});

/**
 * Displays the main information of a collection as
 * a banner.
 */
export const CollectionBanner = ({
    className,
    variant,
    size,
    style,
    data,
    config
}: CollectionBannerProps) => {

    const classes = useStyles();

    return (
        <div className={classes.collectionBanner} style={style}>
            <MuiGrid container direction="row">
                <MuiGrid item xs={12} md={3} direction="column">
                    <img src={`${IPFS_SOURCE}${data.img}`} className={classes.collectionImg} />
                </MuiGrid>
                <MuiGrid item xs={12} md={9} className={classes.collectionInfo} direction="column">
                    <CollectionDetails data={data} config={config} variant={variant} size={size}/>
                </MuiGrid>
            </MuiGrid>
        </div>
    );
};