
import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface WalletConnectProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Displays a modal to allow users to connect their
 * compatible wallet.
 */
export const WalletConnect = ({}: WalletConnectProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};