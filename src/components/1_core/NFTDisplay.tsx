import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { IPFS_SOURCE } from '../../data/constants/urls';

export interface NFTDisplayProps extends StandardModel {
    data: {
        img: string,
        video?: string,
        backimg?: string,
        cardimg?: string
    },
    config: {
        defaultPart: 'img' | 'video' | 'backimg' | 'cardimg',
        loop: {
            isEnabled: Boolean,
            delay: number,
            playFullVideo: Boolean
        },
        video: {
            autoplay: Boolean,
            isMuted: Boolean
        },
        showSelector: Boolean
    }
}

const defaultConfig = {
    defaultPart: 'img',
    loop: {
        isEnabled: false,
        delay: 3000,
        playFullVideo: true
    },
    video: {
        autoplay: true
    },
    showSelector: true
}

const useStyles = makeStyles({
    NFTDisplayContainer: {
        display: 'inline-block'
    },
    selectorContainer: {
        display: "flex",
        justifyContent: "space-between",
        padding: "4px"
    },
    selectorItem: {
        cursor: "pointer",
        border: "solid 5px transparent"
    },
    selectorItemActive: {
        cursor: "pointer",
        border: "solid 5px #42a5f5"
    }
});

/**
 * Displays all parts of an NFT. The user can select which part
 * of the NFT to be displayed in a larger area. Cycles through the
 * different parts by default.
 * 
 * @todo Use MUI Theme / palette instead of hardcoding color value
 * @todo Implement Loop
 */
export const NFTDisplay = ({
    className,
    variant,
    size,
    style,
    data,
    config = defaultConfig
}: NFTDisplayProps) => {

    const classes = useStyles();

    const [activePart, setActivePart] = useState(config.defaultPart || 'img');
    
    const renderMainDisplay = () => {
        if(activePart.indexOf('video') === -1) {
            return (<img src={`${IPFS_SOURCE}/${data[activePart]}`} width="256px"/>);
        } else {
            return (<video width="256px" controls muted={true}  onClick={() => setActivePart('video')}>
                <source src={`${IPFS_SOURCE}/${data[activePart]}`} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>);
        }
    }

    const renderSelector = () => {

        const parts = Object.keys(data);

        return (
            <div className={classes.selectorContainer}>
                {parts.map((part) => {
                    return <img
                        className={activePart.indexOf(part) !== -1 && activePart.length === part.length ? classes.selectorItemActive : classes.selectorItem}
                        src={`${IPFS_SOURCE}/${data[part.indexOf('video') === -1 ? part : "img"]}`}
                        height="64px"
                        onClick={() => setActivePart(part)}
                    />
                })}
            </div>
        );
    }

    return (
        <div className={classes.NFTDisplayContainer}>
            {renderMainDisplay()}
            {config.showSelector ? renderSelector() : null}
        </div>
    );
};