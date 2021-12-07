import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface TagProps extends StandardProps {
    data: {
        label: string;
        icon: ReactNode;
    },
    config: {
        custom: {
            isRounded: Boolean;
        }
    }
}

const useStyles = makeStyles({
    tagContainer: {
        backgroundColor: "#42a5f5",
        color: "white",
        textAlign: "center",
        padding: "4px 16px",
        display: "flex",
        width: "fit-content",
        justifyContent: "center",
        alignItems: "center"
    },
    tagIcon: {
        marginRight: "4px"
    }
});

/**
 * Small tag to highlight some information.
 * 
 * @todo Handle className and style
 * @todo Improve sizes
 */
export const Tag = ({className, style, variant, size, config, data}: TagProps) => {

    const classes = useStyles();
    const Icon = data.icon;

    const getTextSize = () : "caption" | "body1" | "body2" => {
        switch(size) {
            case 'sm': return "caption"
            case 'lg': return "body1"
            default: return "body2" // MD and others
        }
    }

    const getIconSize = (): {fontSize: string} => {
        switch(size) {
            case 'sm': return {fontSize: "20px"};
            case 'lg': return {fontSize: "24px"};
            default: return {fontSize: "20px"}; // MD and others
        }
    }

    const getRounding = () => {
        if(config.custom && config.custom.isRounded) {
            return config.custom.isRounded
        } else {
            switch(variant) {
                case 'dynamic': return true
                default: return false; // elegant and others
            }
        }
    }

    return (
        <div className={classes.tagContainer} style={{borderRadius: getRounding() ? "999px": "0px"}}>
            {data.icon ? <Icon className={data.label ? classes.tagIcon : null} sx={getIconSize()}/> : null}
            {data.label ? <Typography variant={getTextSize()} style={{fontWeight: "bold"}}>{data.label}</Typography> : null}
        </div>
    );
};