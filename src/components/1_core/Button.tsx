import React, { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

export interface ButtonProps {
    // children: ReactNode,
    backgroundColor?: string,
    color?: string,
    size?: string
    isRounded?: boolean,
    variant?: 'text' | 'outlined' | 'contained',
    label?: string;
    startIcon?: ReactNode,
    target?: string,
    href?: string,
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
    size = 'md',
    variant = 'outlined',
    label = "",
    isRounded = false,
    backgroundColor = "error",
    color = "error",
    target,
    href,
    onClick = () => {}
}: ButtonProps) => {
    const classes = useStyles();
    
    if(href) {
        return (
            <MuiButton
                startIcon={startIcon}
                variant={variant}
                size={size}
                className={isRounded ? classes.rounded : classes.normal}
                style={{ color, backgroundColor }}
                target={target}
                href={href}
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
                style={{ color, backgroundColor }}
                onClick={onClick}
            >
                {label}
            </MuiButton>
        )
    }
}