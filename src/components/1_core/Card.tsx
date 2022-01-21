import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface CardProps extends StandardModel {
    children: React.ReactNode
}

const useStyles = makeStyles({
    card: {
        backgroundColor: "white",
        padding: "16px"
    }
});

/**
 * Simple Card.
 */
export const Card = ({
    children
}: CardProps) => {

    const classes = useStyles();

    return (
        <div className={classes.card}>
            {children}
        </div>
    );
};