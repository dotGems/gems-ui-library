import React, { ReactNode } from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

export interface ButtonProps {
    // children: ReactNode;
    backgroundColor?: string;
    color?: string;
    isRounded?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    label?: string;
    startIcon?: ReactNode,
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
    variant = 'outlined',
    label = "Button",
    isRounded = false,
    backgroundColor = "error",
    color = "error"
}: ButtonProps) => {
    const classes = useStyles();
    // const style = variant === 'outlined' ? 
    return (
        <MuiButton startIcon={startIcon} variant={variant} className={isRounded ? classes.rounded : classes.normal} style={{ color, backgroundColor }}>
            {label}
        </MuiButton>
    )
}