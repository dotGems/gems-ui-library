import { ContextModel } from "../../models/Context.model";
import { NETWORK_SUPPORTED_WALLETS, SUPPORTED_NETWORKS } from "../constants/networks/networks";
import { DEFAULT_THEME } from "../constants/themes";

export const defaultContext : ContextModel = {
    config: {
        chain: {
            useCheckout: false,
            supportedNetworks: SUPPORTED_NETWORKS, // User-supported networks, has to be within what we support.
            networkSupportedWallets: NETWORK_SUPPORTED_WALLETS, // User-supported wallets, has to be within what we support.
        }
    },
    style: {
        palette: {},
        variant: DEFAULT_THEME
    }
};