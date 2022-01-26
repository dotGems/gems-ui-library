import { NetworkModel } from "../../../models/Network.model";
import { SupportedWallet, WalletButtonModel } from "../../../models/Wallet.model";
import { SUPPORTED_WALLETS, WALLET_BUTTONS } from "../wallets";
import { EOSIO_RESOURCES } from "./eosio";

export enum SUPPORTED_NETWORK_KEYS {
    eos = "eos",
    wax = "wax",
    // ethereum = "ethereum",
    // solana = "solana"
}

/**
 * List of all supported networks by the UI library.
 * Developers can further filter what they want to make
 * available to their users.
 */
 export const SUPPORTED_NETWORKS: Array<NetworkModel> = [
    {
        blockchain: SUPPORTED_NETWORK_KEYS.eos,
        icon: "/img/networks/eos.svg",
        colors: {
            bg_1: "#000",
            bg_2: "#333",
            fg: "white"
        },
        chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        host: "eos.greymass.com",
        protocol: "https",
        port: 443,
        resources: EOSIO_RESOURCES,
        explorer_url: "https://wax.bloks.io/account/"
    },
    {
        blockchain: SUPPORTED_NETWORK_KEYS.wax,
        icon: "/img/networks/wax.svg",
        colors: {
            bg_1: "#f78f1f",
            bg_2: "#ff9d34",
            fg: "white"
        },
        chain_id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
        host: "???",
        protocol: "https",
        port: 443,
        resources: EOSIO_RESOURCES,
        explorer_url: "https://bloks.io/account/"
    },
    // {
    //     // TODO: SUPPORT
    //     blockchain: SUPPORTED_NETWORK_KEYS.solana,
    //     icon: "/img/networks/solana.svg",
    //     colors: {
    //         bg_1: "#C100E0",
    //         bg_2: "#CE00EF",
    //         fg: "white"
    //     },
    //     chain_id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
    //     host: "???",
    //     protocol: "https",
    //     port: 443,
    //     resources: [],
    //     explorer_url: "https://explorer.solana.com/"
    // },
    // {
    //     // TODO: SUPPORT
    //     blockchain: SUPPORTED_NETWORK_KEYS.ethereum,
    //     icon: "/img/networks/ethereum.svg",
    //     colors: {
    //         bg_1: "#0066FF",
    //         bg_2: "#2C80FF",
    //         fg: "white"
    //     },
    //     chain_id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
    //     host: "???",
    //     protocol: "https",
    //     port: 443,
    //     resources: [],
    //     explorer_url: "https://etherscan.io/account/"
    // }
];

/**
* List of wallets supported for every supported
* networks.
*/
export const NETWORK_SUPPORTED_WALLETS: {
        eos: Array<SupportedWallet>,
        wax: Array<SupportedWallet>,
        ethereum?: Array<SupportedWallet>,
        solana?: Array<SupportedWallet>} = {
    eos: [
        SupportedWallet.anchor,
        SupportedWallet.im_token,
        SupportedWallet.leaf,
        SupportedWallet.math,
        SupportedWallet.my_key,
        SupportedWallet.scatter,
        SupportedWallet.starteos,
        SupportedWallet.token_pocket,
        SupportedWallet.wombat
    ],
    // ethereum: [
    //     SupportedWallet.anchor,
    // ],
    // solana: [
    //     SupportedWallet.anchor,
    // ],
    wax: [
        SupportedWallet.anchor,
        SupportedWallet.wax_cloud,
        SupportedWallet.wombat
    ]
};