import React from 'react';
import { makeStyles } from '@mui/styles';
import MuiAvatar from '@mui/material/Avatar';

import { StandardModel, StandardSize, StandardVariant } from "../../models/Standard.model";
import { Typography } from '@mui/material';
import MuiButton from '@mui/material/Button';

export interface AvatarProps extends StandardModel {
    data: {
        img?: string;
        label?: string;
    },
    config?: {
        onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
        isRounded?: boolean;
    }
}

const useStyles = makeStyles({
    avatarContainer: {
        display: "flex",
        flexWrap: "nowrap",
        textTransform: "none",
        alignItems: "center",
    },
    avatarImg: {
        marginRight: "16px"
    }
});

export const defaultProps = {
    size: StandardSize.md,
    variant: StandardVariant.elegant,
    config: {
        isRounded: undefined
    }
}

/**
 * Displays a thumbnail followed by a label.
 */
export const Avatar = ({ /*className,*/ variant, style, size, data, config }: AvatarProps) => {

    const classes = useStyles();

    const getAvatarSize = () : {width: string, height: string} => {
        switch(size) {
            case StandardSize.sm: return { width: "24px", height: "24px"}
            case StandardSize.lg: return {  width: "48px", height: "48px"}
            default: return { width: "32px", height: "32px" } // MD and others
        }
    }

    const getTextSize = () : "caption" | "body1" | "body2" => {
        switch(size) {
            case StandardSize.sm: return "caption"
            case StandardSize.lg: return "body1"
            default: return "body2" // MD and others
        }
    }

    const getRounding = () => {
        if (config && config.isRounded) {
            return config.isRounded ? "circular" : "square"
        } else {
            switch(variant) {
                case StandardVariant.dynamic: return 'circular'
                default: return 'square'; // elegant and others
            }
        }
    }

    const renderContent = () : React.ReactNode => {
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
    if (config?.onClick) {
        return (<MuiButton onClick={config?.onClick} className={classes.avatarContainer} style={style}>
            {renderContent()}
        </MuiButton>);
    } else {
        return (
            <div className={classes.avatarContainer} style={style}>
                {renderContent()}
            </div>
        );
    }
};