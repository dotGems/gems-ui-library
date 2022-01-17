import { ContextModel } from "../../models/Context.model";
import { NETWORK_SUPPORTED_WALLETS, SUPPORTED_NETWORKS } from "../constants/networks/networks";
import { DEFAULT_THEME } from "../constants/themes";

export const defaultContext : ContextModel = {
    config: {
        chain: {
            use_checkout: false,
            supported_networks: SUPPORTED_NETWORKS, // User-supported networks, has to be within what we support.
            network_supported_wallets: NETWORK_SUPPORTED_WALLETS, // User-supported wallets, has to be within what we support.
        }
    },
    state: {
        wallet: undefined,
        selected_network: undefined 
    },
    style: {
        palette: {},
        variant: DEFAULT_THEME
    }
};