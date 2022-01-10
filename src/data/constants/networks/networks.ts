import { NetworkModel } from "../../../models/Network.model";
import { WalletButtonModel } from "../../../models/Wallet.model";
import { WALLET_BUTTONS } from "../wallets";
import { EOSIO_RESOURCES } from "./eosio";

/**
 * List of all supported networks by the UI library.
 * Developers can further filter what they want to make
 * available to their users.
 */
 export const SUPPORTED_NETWORKS: Array<NetworkModel> = [{
        name: "eos",
        icon: "/img/networks/eos.svg",
        resources: EOSIO_RESOURCES,
        explorer_url: "https://bloks.io/account/"
    },
    {
        name: "wax",
        icon: "/img/networks/wax.svg",
        resources: EOSIO_RESOURCES,
        explorer_url: "https://wax.bloks.io/account/"
    }
];

/**
* List of wallets supported for every supported
* networks.
*/
export const NETWORK_SUPPORTED_WALLETS: {eos: Array<WalletButtonModel>, wax: Array<WalletButtonModel>} = {
    eos: [
        WALLET_BUTTONS.anchor,
        WALLET_BUTTONS.wombat,
        WALLET_BUTTONS.token_pocket,
        WALLET_BUTTONS.scatter
    ],
    wax: [
        WALLET_BUTTONS.wax_cloud,
        WALLET_BUTTONS.anchor,
        WALLET_BUTTONS.wombat
    ]
};