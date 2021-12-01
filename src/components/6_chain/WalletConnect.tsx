
import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface WalletConnectProps extends StandardProps {}

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