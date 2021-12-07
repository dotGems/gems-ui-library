import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface CheckoutProps extends StandardModel {}

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