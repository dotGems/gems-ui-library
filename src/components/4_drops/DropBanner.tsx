import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Theme } from '@mui/material';

import { StandardModel } from "../../models/Standard.model";
import { NFTDisplay, NFTPart } from '../1_core/NFTDisplay';
import { DropModel } from '../../models/Drop.model';
import { DropDetails } from './DropDetails';

export interface DropBannerProps extends StandardModel {
    data: DropModel,
    config?: {
        nft_display?: {
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
        details?: {
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
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"
        }
    },
    nftDisplay: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: "column"
        }
    }
}));

const defaultConfig = {};

/**
 * Displays a drop's core information next to the NFT display.
 */
export const DropBanner = ({
    /*className,*/
    /*variant,*/
    // size,
    // style,
    data,
    config = defaultConfig,
    // dict
}: DropBannerProps) => {

    const classes = useStyles();

    return (
        <Grid container className={classes.dropBannerContainer}>
            <Grid item xs={12} md={4} lg={3}>
                <NFTDisplay
                    data={data.immutable_serialized_data}
                    config={config ? config.nft_display : undefined}
                />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
                <DropDetails data={data} config={config ? config.details : undefined}/>
            </Grid>
        </Grid>
    );
};