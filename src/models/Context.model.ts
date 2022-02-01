import { NetworkModel } from "./Network.model";
import { StandardVariant } from "./Standard.model";
import { SupportedWallet, WalletModel } from "./Wallet.model";

export interface ContextModel {
    state: {
        wallet?: WalletModel,
        selected_network?: NetworkModel
    }
    config: {
        chain: {
            use_checkout: boolean;
            supported_networks: Array<NetworkModel> // User-supported networks, has to be within what we support.
            network_supported_wallets: {
                eos?: Array<SupportedWallet>
                wax?: Array<SupportedWallet>
            } // User-supported wallets, has to be within what we support.
        }
    }
    style?: {
        palette?: {},
        variant?: StandardVariant
    }
}