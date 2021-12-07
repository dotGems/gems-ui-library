
import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface WalletSelectProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Displays a wallet button used to trigger the 'connect wallet'
 * routine. Once a wallet is connected, we can see the balance of
 * a compatible token.
 */
export const WalletSelect = ({}: WalletSelectProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};