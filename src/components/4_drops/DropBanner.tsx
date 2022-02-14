import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { NFTDisplay, NFTPart } from '../1_core/NFTDisplay';
import { DropModel } from '../../models/Drop.model';
import { DropDetails } from './DropDetails';
import { Grid, Theme } from '@mui/material';
export interface DropBannerProps extends StandardModel {
    data: DropModel,
    config: {
        nft_display: {
            defaultPart: NFTPart,
            loop: {
                isEnabled: boolean,
                delay: number,
                playFullVideo: boolean
            },
            video: {
                autoplay: boolean
            },
            showSelector: boolean
        },
        details: {
            showArtist?: boolean,
            showCollection?: boolean,
            showAbout?: boolean,
            showBurnableTransferable?: boolean,
            showViewData?: boolean
        }
    }
}

const useStyles = makeStyles((theme:Theme) => ({
    dropBannerContainer: {
        display: 'flex',
        "@media (max-width: 600px)": {
            flexDirection: "column"
        }
    },
    nftDisplay: {
        display: 'flex',
        "@media (max-width: 600px)": {
            flexDirection: "column"
        }
    }
}));

/**
 * Displays a drop's core information next to the NFT display.
 */
export const DropBanner = ({
    /*className,*/
    /*variant,*/
    // size,
    // style,
    data,
    config,
    // dict
}: DropBannerProps) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.dropBannerContainer}>
            <Grid item xs={12} md={4} lg={3}>
                <NFTDisplay
                    data={data.immutable_serialized_data}
                    config={config.nft_display}
                />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <DropDetails data={data} config={config.details}/>
            </Grid>
        </Grid>
    );
};