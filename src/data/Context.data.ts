import { ContextModel } from "../models/Context.model";
import { SUPPORTED_NETWORKS, SUPPORTED_WALLETS } from "./constants/chain";
import { DEFAULT_THEME } from "./constants/themes";

export const defaultContextModel : ContextModel = {
    config: {
        chain: {
            useCheckout: false,
            supportedNetworks: SUPPORTED_NETWORKS, // User-supported networks, has to be within what we support.
            supportedWallets: SUPPORTED_WALLETS, // User-supported wallets, has to be within what we support.
        }
    },
    style: {
        palette: {},
        variant: DEFAULT_THEME
    }
}