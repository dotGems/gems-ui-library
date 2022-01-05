import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { NFTDisplay } from '../1_core/NFTDisplay';
import { DropModel } from '../../models/Drop.model';
import { DropDetails } from './DropDetails';

export interface DropBannerProps extends StandardModel {
    data: DropModel,
    config: {
        nft_display: {
            defaultPart: 'img' | 'video' | 'backimg' | 'cardimg',
            loop: {
                isEnabled: Boolean,
                delay: number,
                playFullVideo: Boolean
            },
            video: {
                autoplay: Boolean
            },
            showSelector: Boolean
        },
        details: {
            showArtist?: Boolean,
            showCollection?: Boolean,
            showAbout?: Boolean,
            showBurnableTransferable?: Boolean,
            showViewData?: Boolean
        }
    }
}

const useStyles = makeStyles({
    dropBannerContainer: {
        display: 'flex'
    }
});

/**
 * Displays a drop's core information next to the NFT display.
 */
export const DropBanner = ({
    className,
    variant,
    size,
    style,
    data,
    config,
    dict
}: DropBannerProps) => {

    const classes = useStyles();

    return (
        <div className={classes.dropBannerContainer}>
            <NFTDisplay data={data.template.deserialized} config={config.nft_display} style={{marginRight: "2em"}}/>
            <DropDetails data={data} config={config.details}/>
        </div>
    );
};