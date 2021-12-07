import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface CheckoutProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays the checkout screen.
 */
export const Checkout = ({}: CheckoutProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};