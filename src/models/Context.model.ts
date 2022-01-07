import { NetworkModel } from "./Network.model";
import { StandardVariant } from "./Standard.model";
import { WalletButtonModel } from "./Wallet.model";

export interface ContextModel {
    config: {
        chain: {
            useCheckout: Boolean;
            supportedNetworks: Array<NetworkModel> // User-supported networks, has to be within what we support.
            supportedWallets: {
                EOS: Array<WalletButtonModel>
            } // User-supported wallets, has to be within what we support.
        }
    }
    style: {
        palette: {},
        variant: StandardVariant
    }
}