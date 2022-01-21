import React from 'react';

// import { StylesProvider, ThemeProvider } from '@mui/material/styles';
// import { muiTheme } from 'storybook-addon-material-ui';
// import { muiTheme } from '../src/9_utils/stylesheet';

// @todo How to merge MUI's ThemeProvider with our own DotGemsProvider
//       Possible solution; https://medium.com/front-end-weekly/how-to-combine-context-providers-for-cleaner-react-code-9ed24f20225e
// export const decorators = [
//   (story) => <ThemeProvider theme={muiTheme}>{story()}</ThemeProvider>,
// ];

import { SUPPORTED_NETWORKS, NETWORK_SUPPORTED_WALLETS } from '../../data/constants/networks/networks';
import { ContextModel } from '../../models/Context.model';

const defaultProps: ContextModel = {
    config: {
        chain: {
            use_checkout: false,
            supported_networks: SUPPORTED_NETWORKS, // User-supported networks, has to be within what we support.
            network_supported_wallets: NETWORK_SUPPORTED_WALLETS, // User-supported wallets, has to be within what we support.
        },
    },
    state: {
        wallet: undefined,
        selected_network: undefined
    },
}

/**
 * The dotGems Context provides a general context (configuration)
 * for every dotGems components within. If an app uses the UI Library,
 * the dotGems should wrap the section of the app using the components.
 *
 * @todo make supported networks configurable
 * @todo make supported wallets configurable
 */
const DotGemsContext = React.createContext(defaultProps);

export const DotGemsProvider = DotGemsContext.Provider;
export default DotGemsContext;