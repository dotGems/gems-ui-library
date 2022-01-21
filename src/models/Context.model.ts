import { NetworkModel } from "./Network.model";
import { StandardVariant } from "./Standard.model";
import { WalletButtonModel, WalletModel } from "./Wallet.model";

export interface ContextModel {
    state: {
        wallet?: WalletModel,
        selected_network?: NetworkModel
    }
    config: {
        chain: {
            use_checkout: Boolean;
            supported_networks: Array<NetworkModel> // User-supported networks, has to be within what we support.
            network_supported_wallets: {
                eos?: Array<WalletButtonModel>
                wax?: Array<WalletButtonModel>
            } // User-supported wallets, has to be within what we support.
        }
    }
    style?: {
        palette: {},
        variant: StandardVariant
    }
}