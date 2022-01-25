import React, { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';
import { StandardSize } from "../../models/Standard.model";
import { makeStyles } from '@mui/styles';
import { StandardSize } from '../../models/Standard.model';

export interface ButtonProps {
    // children: ReactNode,
    backgroundColor?: string,
    color?: string,
    size?: StandardSize,
    isRounded?: boolean,
    variant?: 'text' | 'outlined' | 'contained',
    label?: React.ReactNode;
    startIcon?: ReactNode,
    target?: string,
    href?: string,
    style?: any,
    disabled?: boolean,
    onClick?: () => void;
}

const useStyles = makeStyles({
    rounded: {
        borderRadius: "25px"
    },
    normal: {
        borderRadius: "0px !important"
    }
});

export const Button = ({
    startIcon,
    size = StandardSize.md,
    variant = 'outlined',
    label = "",
    isRounded = false,
    backgroundColor = "error",
    color = "error",
    target,
    href,
    style,
    disabled,
    onClick = () => {}
}: ButtonProps) => {
    const classes = useStyles();

    if (href) {
        return (
            <MuiButton
                startIcon={startIcon}
                variant={variant}
                size={size}
                className={isRounded ? classes.rounded : classes.normal}
                style={{ color, backgroundColor, ...style }}
                target={target}
                href={href}
                disabled={disabled}
                rel="noreferrer"
            >
                {label}
            </MuiButton>
        );
    } else {
        return (
            <MuiButton
                startIcon={startIcon}
                variant={variant}
                size={size}
                className={isRounded ? classes.rounded : classes.normal}
                style={{ color, backgroundColor, ...style }}
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </MuiButton>
        )
    }
}