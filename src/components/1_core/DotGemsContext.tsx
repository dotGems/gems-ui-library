import React, { ReactNode } from 'react';
import { makeStyles } from '@mui/styles';

export interface DotGemsContextProps {
    children: ReactNode, 
    chain: {
        useCheckout: Boolean;
        supportedNetworks: Array<String> // User-supported networks, has to be within what we support.
        supportedWallets: any // User-supported wallets, has to be within what we support.
    }
}

const useStyles = makeStyles({});

/**
 * The dotGems Context provides a general context (configuration)
 * for every dotGems components within. If an app uses the UI Library,
 * the dotGems should wrap the section of the app using the components.
 */
export const DotGemsContext = ({}: DotGemsContextProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};