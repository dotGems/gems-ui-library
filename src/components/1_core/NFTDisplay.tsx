import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Backdrop, Button } from '@mui/material';

import { StandardModel } from "../../models/Standard.model";
import { IPFS_SOURCE, IPFS_SOURCE_FALLBACK, IPFS_VIDEO_SOURCE } from '../../data/constants/urls';
import {
    ArrowBackIos as ArrowBackIosIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
    Close as CloseIcon
} from '@mui/icons-material';

export enum NFTPart {
    img = "img",
    backimg = "backimg",
    cardimg = "cardimg",
    video = "video"
}

export interface NFTDisplayProps extends StandardModel {
    data: {
        img: string,
        video?: string,
        backimg?: string,
        cardimg?: string
    },
    config: {
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
    }
}

const defaultConfig = {
    defaultPart: NFTPart.img,
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
    mainDisplayContainer: {
        height: "256px",
        width: "256px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainDisplay: {
        height: '100%',
        maxWidth: "100%",
        cursor: "pointer",
        position: "static",
    },
    enlargedMainDisplay: {
        height: '100%',
        maxWidth: "100%",
        margin: "auto"
    },
    selectorContainer: {
        display: "flex",
        justifyContent: "space-around",
        padding: "4px"
    },
    selectorItem: {
        cursor: "pointer",
        border: "solid 5px transparent"
    },
    selectorItemActive: {
        cursor: "pointer",
        border: "solid 5px #42a5f5"
    },
    EnlargedBackBtn: {
        position: 'absolute',
        left: "32px",
        top: "50%"
    },
    EnlargedForwardBtn: {
        position: 'absolute',
        right: "32px",
        top: "50%"
    },
    EnlargedCloseBtn: {
        position: 'absolute',
        right: "32px",
        top: "32px"
    }
});

/**
 * Displays all parts of an NFT. The user can select which part
 * of the NFT to be displayed in a larger area. Cycles through the
 * different parts by default.
 *
 * @todo Use MUI Theme / palette instead of hardcoding color value
 * @todo Implement Loop
 * @todo Fix error in enlarged display when switching to video (POST 404)
 */
export const NFTDisplay = ({
    // className,
    // variant,
    // size,
    style,
    data,
    config = defaultConfig,
    // dict
}: NFTDisplayProps) => {

    const SUPPORTED_PARTS = [
        NFTPart.img,
        NFTPart.backimg,
        NFTPart.cardimg,
        NFTPart.video
    ];

    const classes = useStyles();

    const [activePart, setActivePart] = useState(config.defaultPart || 'img');
    const providedParts = SUPPORTED_PARTS.filter(item => Object.keys(data).includes(item));
    const [showEnlarged, setShowEnlarged] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPresses)
        return () => {
            document.removeEventListener("keydown", handleKeyPresses);
        }
    }, []);

    const renderMainDisplay = (isEnlarged?: boolean) => {
        if (activePart.indexOf('video') === -1) {
            return (<img
                onError={(event: any) => event.target.src = `${IPFS_SOURCE_FALLBACK}${data[activePart]}`}
                src={`${IPFS_SOURCE}${data[activePart]}?size=700`}
                className={isEnlarged ? classes.enlargedMainDisplay : classes.mainDisplay}
                onClick={() => setShowEnlarged(true)}
            />);
        } else {
            return (<video
                controls={isEnlarged}
                loop={true}
                muted={true}
                autoPlay={config.video.autoplay}
                className={isEnlarged ? classes.enlargedMainDisplay : classes.mainDisplay}
                onClick={() => setShowEnlarged(true)}>
                <source src={`${IPFS_VIDEO_SOURCE}${data[activePart]}`} type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>);
        }
    }

    const getSelectorPartImg = (part: NFTPart) : NFTPart => {
        return part.indexOf(NFTPart.video) === -1 ? part : NFTPart.img;
    }

    const renderSelector = () => {
        return (
            <div className={classes.selectorContainer}>
                {providedParts.map((part) => {
                    if (SUPPORTED_PARTS.includes(part)) {
                        return <img
                            className={activePart.indexOf(part) !== -1 && activePart.length === part.length ? classes.selectorItemActive : classes.selectorItem}
                            src={`${IPFS_SOURCE}${data[getSelectorPartImg(part)]}?size=700`}
                            onError={(event: any) => event.target.src = `${IPFS_SOURCE_FALLBACK}${data[getSelectorPartImg(part)]}`}
                            width="32px"
                            onClick={() => setActivePart(part)}
                            title={renderPartName(part)}
                        />
                    } else {
                        return null;
                    }
                })}
            </div>
        );
    }

    /**
     * Returns the verbose name of the NFT Part.
     *
     * @todo Add dict support
     */
    const renderPartName = (part: string) => {
        switch (part) {
            case 'img': return "Image";
            case 'backimg': return "Back Image";
            case 'cardimg': return "Card Image";
            case 'video': return "Video";
            default: return "Unknown Part";
        }
    }

    const handleKeyPresses = useCallback((event) => {
        if(event) {
            const ESCAPE = 27;
            // const LEFT_ARROW = 37;
            // const RIGHT_ARROW = 39;
            let key = event.keyCode;
            if(key === ESCAPE) {
                setShowEnlarged(false);
            }
            // @todo FIX --> Not working for some reason
            // else if (key === LEFT_ARROW) {
            //     previousPart();
            // } else if (key === RIGHT_ARROW) {
            //     nextPart();
            // }
        }
    }, []);

    const changePart = (isPrevious: boolean) => {
        let isActivePart = (element : NFTPart) => element.indexOf(activePart) !== -1 && element.length === activePart.length
        let activeIndex = providedParts.findIndex(isActivePart);
        let changedIndex;
        if (isPrevious === true) {
            changedIndex = (activeIndex - 1) % providedParts.length;
        } else {
            changedIndex = (activeIndex + 1) % providedParts.length;
        }
        if (changedIndex < 0) {
            changedIndex = providedParts.length - 1;
        }
        setActivePart(providedParts[changedIndex]);
    }

    const previousPart = () => {changePart(true)}

    const nextPart = () => {changePart(false)}

    return (
        <div className={classes.NFTDisplayContainer} style={style}>
            <div className={classes.mainDisplayContainer}>
                {renderMainDisplay()}
            </div>
            {config.showSelector ? renderSelector() : null}
            <Backdrop open={showEnlarged} style={{zIndex: 1000}}>
                <Button variant="contained" className={classes.EnlargedBackBtn} onClick={previousPart}><ArrowBackIosIcon /></Button>
                <Button variant="contained" className={classes.EnlargedForwardBtn} onClick={nextPart}><ArrowForwardIosIcon /></Button>
                <Button variant="contained" className={classes.EnlargedCloseBtn} endIcon={<CloseIcon/>} onClick={() => setShowEnlarged(false)}>Close</Button>
                {renderMainDisplay(true)}
            </Backdrop>
        </div>
    );
};