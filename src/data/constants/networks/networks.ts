import { NetworkModel } from "../../../models/Network.model";
import { WalletButtonModel } from "../../../models/Wallet.model";
import { WALLET_BUTTONS } from "../wallets";
import { EOSIO_RESOURCES } from "./eosio";

/**
 * List of all supported networks by the UI library.
 * Developers can further filter what they want to make
 * available to their users.
 */
 export const SUPPORTED_NETWORKS: Array<NetworkModel> = [
    {
        blockchain: "eos",
        icon: "/img/networks/eos.svg",
        chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        host: "eos.greymass.com",
        protocol: "https",
        port: 443,
        resources: EOSIO_RESOURCES,
        explorer_url: "https://wax.bloks.io/account/"
    },
    {
        blockchain: "wax",
        icon: "/img/networks/wax.svg",
        chain_id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
        host: "???",
        protocol: "https",
        port: 443,
        resources: EOSIO_RESOURCES,
        explorer_url: "https://bloks.io/account/"
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