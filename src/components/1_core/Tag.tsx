import React, { ReactNode, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import { StandardCoreModel } from "../../models/StandardCore.model";
import { StandardSize } from "../../models/Standard.model";
import { combineStyles } from "../../utils/style";

export interface TagConfig {
    custom: {
        isRounded: boolean;
        hasPadding: boolean;
    }
}

export interface TagProps extends StandardCoreModel {
    data: {
        label: string;
        icon?: ReactNode;
        iconTitle?: string;
    },
    config: TagConfig;
}

const useStyles = makeStyles({
    tagContainer: {
        width: "fit-content",
        textAlign: "center",
        padding: "4px 16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    infoTag: {
        backgroundColor: "#42a5f5",
        color: "white",
        width: "fit-content",
    },
    successTag: {
        backgroundColor: "#388e3c",
        color: "white",
        width: "fit-content",
    },
    warningTag: {
        backgroundColor: "#f57c00",
        color: "white",
        width: "fit-content",
    },
    dangerTag: {
        backgroundColor: "#d32f2f",
        color: "white",
        width: "fit-content",
    },
    lightTag: {
        backgroundColor: "white",
        color: "black",
    },
    tagIcon: {
        marginRight: "4px"
    }
});

const defaultConfig: TagConfig = {
    custom: {
        isRounded: false,
        hasPadding: true
    }
}

/**
 * Small tag to highlight some information.
 *
 * @todo Handle className and style
 * @todo Improve sizes
 */
export const Tag = ({className, style, variant, size, config = defaultConfig, data}: TagProps) => {

    const classes = useStyles();
    const Icon = data.icon;

    const a = {
        backgroundColor: "red",
        padding: "2em 1em",
        color: "pink",
        border: "1px solid black"
    }

    const b = {
        backgroundColor: "darkblue",
        color: "white",
        fontWeight: "bold",
        border: "1px solid rgba(0,0,0,0.25)"
    }

    const c = {
        color: "black",
        borderRadius: "30px"
    }

    useEffect(() => {
        console.log(combineStyles([a,b,c]));
    },[]);

    const getTextSize = () : "caption" | "body1" | "body2" => {
        switch (size) {
            case StandardSize.sm: return "caption"
            case StandardSize.lg: return "body1"
            default: return "body2" // MD and others
        }
    }

    const getIconSize = (): {fontSize: string} => {
        switch (size) {
            case StandardSize.sm: return {fontSize: "20px"};
            case StandardSize.lg: return {fontSize: "24px"};
            default: return {fontSize: "20px"}; // MD and others
        }
    }

    return (
        <div className={classes[variant ? `${variant}Tag` : "infoTag"]} style={{borderRadius: config.custom.isRounded ? "999px": "0px"}}>
            <div className={classes.tagContainer} style={config.custom.hasPadding ? {} : { padding: "0px" }}>
                {data.icon ? <div title={data.iconTitle || ""}>
                    <Icon className={data.label ? classes.tagIcon : null} sx={getIconSize()}/>
                </div> : null}
                {data.label ? <Typography variant={getTextSize()}>{data.label}</Typography> : null}
            </div>
        </div>
    );
};