import React, { ReactElement, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

import { CoreVariant, StandardCoreModel } from "../../models/StandardCore.model";
import { combineStyles } from "../../common/style";
import { StandardSize } from '../../models/Standard.model';

export interface TagConfig {
    custom?: {
        isRounded?: boolean;
        hasPadding?: boolean;
    }
}

export interface TagProps extends StandardCoreModel {
    data: {
        label?: React.ReactElement | string;
        icon?: any;
        iconTitle?: string;
    },
    config?: TagConfig;
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

const enum TagTypes {
    infoTag = "infoTag",
    successTag = "successTag",
    warningTag = "warningTag",
    dangerTag = "dangerTag",
    lightTag = "lightTag"
};

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
export const Tag = ({
    // className,
    // style,
    variant,
    size,
    config = defaultConfig,
    data
}: TagProps) => {

    const classes = useStyles();

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

    const getIconSize = (): { fontSize: string } => {
        switch (size) {
            case StandardSize.sm: return { fontSize: "20px" };
            case StandardSize.lg: return { fontSize: "24px" };
            default: return { fontSize: "20px" }; // MD and others
        }
    }

    const Icon = data.icon;

    const getTextSize = (): "caption" | "body1" | "body2" => {
        switch (size) {
            case StandardSize.sm: return "caption"
            case StandardSize.lg: return "body1"
            default: return "body2" // MD and others
        }
    }

    const getVariant = (variant?: CoreVariant): TagTypes => {
        switch(variant) {
            case CoreVariant.success: return TagTypes.successTag;
            case CoreVariant.warning: return TagTypes.warningTag;
            case CoreVariant.danger: return TagTypes.dangerTag;
            case CoreVariant.light: return TagTypes.lightTag;
            default: return TagTypes.infoTag;
        }
    }

    return (
        <div className={classes[getVariant(variant)]} style={{ borderRadius: config?.custom?.isRounded ? "999px" : "0px" }}>
            <div className={classes.tagContainer} style={config?.custom?.hasPadding ? {} : { padding: "0px" }}>
                {data.icon ? <div title={data.iconTitle || ""}>
                    <Icon className={data.label ? classes.tagIcon : null} sx={getIconSize()}/>
                </div> : null}
                {data.label ? <Typography variant={getTextSize()}>{data.label}</Typography> : null}
            </div>
        </div>
    );
};