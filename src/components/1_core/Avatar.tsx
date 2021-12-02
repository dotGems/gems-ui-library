import React from 'react';
import { makeStyles } from '@mui/styles';
import MuiAvatar from '@mui/material/Avatar';

import { StandardProps } from "../../interfaces/IStandardProps";
import { createTheme, Typography } from '@mui/material';
import MuiButton from '@mui/material/Button';

export interface AvatarProps extends StandardProps {
    data: {
        img: string;
        label?: string;
    },
    config: {
        onClick?: Function;
        custom?: {
            isRounded?: Boolean;
        }
    }
}

const useStyles = makeStyles({
    avatarContainer: {
        display: "flex",
        flexWrap: "nowrap",
        textTransform: "none !important",
        alignItems: "center",
    },
    avatarImg: {
        marginRight: "16px"
    }
});

const defaultConfig = {
    custom: {
        isRounded: undefined
    }
}

/**
 * Displays a thumbnail followed by a label.
 * 
 * @todo Replace use of MuiButton with our button.
 * @todo Handle className and style
 */
export const Avatar = ({ className, variant, style, size = 'md', data, config = defaultConfig }: AvatarProps) => {

    const classes = useStyles();

    const getAvatarSize = () : {width: string, height: string} => {
        switch(size) {
            case 'sm': return { width: "24px", height: "24px"}
            case 'lg': return {  width: "48px", height: "48px"}
            default: return { width: "32px", height: "32px" } // MD and others
        }
    }

    const getTextSize = () : "caption" | "body1" | "body2" => {
        switch(size) {
            case 'sm': return "caption"
            case 'lg': return "body1"
            default: return "body2" // MD and others
        }
    }

    const getRounding = () => {
        if(config.custom && config.custom.isRounded) {
            return config.custom.isRounded === true ? "circular" : "square"
        } else {
            switch(variant) {
                case 'dynamic': return 'circular'
                default: return 'square'; // elegant and others
            }
        }
    }

    const renderContent = () => {
        return (<>
            <div className={classes.avatarImg}>
                <MuiAvatar
                    alt={data.label}
                    src={data.img}
                    variant={getRounding()}
                    sx={getAvatarSize()}    
                />
            </div>
            <Typography variant={getTextSize()}>{data.label}</Typography>
        </>);
    }

    if(config.onClick) {
        return (<MuiButton onClick={config.onClick} className={classes.avatarContainer}>
            {renderContent()}
        </MuiButton>);
    } else {
        return (
            <div className={classes.avatarContainer}>
                {renderContent()}
            </div>
        );
    }
};