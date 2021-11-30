import React from 'react';
import MuiButton from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

export interface ButtonProps {
    // children: ReactNode;
    backgroundColor?: string;
    color?: string;
    isRounded?: boolean;
    variant?: 'text' | 'outlined' | 'contained';
    label?: string;
    onClick?: () => void;
}

const useStyles = makeStyles({
    rounded: {
        borderRadius: "25px"
    },
    normal: {
        borderRadius: "0px"
    }
});

export const Button = ({ variant = 'outlined', label = "Button", isRounded, backgroundColor = "error", color = "error" }: ButtonProps) => {
    const classes = useStyles();
    // const style = variant === 'outlined' ? 
    return (
        <MuiButton variant={variant} className={isRounded ? classes.rounded : classes.normal} style={{ color, backgroundColor }}>
            {label}
        </MuiButton>
    )
}