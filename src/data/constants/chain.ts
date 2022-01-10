/**
 * Here, we regroup all constants related to our interactions with the blockchain.
 * That includes the networks (or chains) we're supporting as well as their supported
 * wallets, etc.
*/

import { NetworkModel } from "../../models/Network.model";
import { WalletButtonModel } from "../../models/Wallet.model";

/**
 * List of supported wallets (and their button styling)
 * across all supported networks, making referencing easier
 * in multiple networks.
 */
export const WALLET_BUTTONS = {
    anchor: {
        name: "Anchor",
        icon: "/img/wallets/anchor.png",
        bgColor: "#3D519C",
        fgColor: "white"
    },
    wombat: {
        name: "Wombat",
        icon: "/img/wallets/wombat.png",
        bgColor: "#FF4F24",
        fgColor: "white"
    },
    scatter: {
        name: "Scatter",
        icon: "/img/wallets/scatter.png",
        bgColor: "#00A8FF",
        fgColor: "white"
    },
    token_pocket: {
        name: "Token Pocket",
        icon: "/img/wallets/token_pocket.png",
        bgColor: "#2980fe",
        fgColor: "white"
    },
    wax_cloud: {
        name: "WAX Cloud",
        icon: "/img/wallets/wax_cloud.png",
        bgColor: "#f89022",
        fgColor: "white"
    }
}

/**
 * Since multiple chains are based on EOSIO, we
 * use this const to share the resources configuration
 * across multiple networks.
 */
export const EOSIO_RESOURCES: {available: Boolean, types: Array<{name: string, unit: string}>} = {
    available: true,
    types: [{
        name: "ram",
        unit: "kb"
    },
    {
        name: "cpu",
        unit: "kb"
    },
    {
        name: "net",
        unit: "kb"
    }]
};

/**
 * List of all supported networks by the UI library.
 * Developers can further filter what they want to make
 * available to their users.
 */
export const SUPPORTED_NETWORKS: Array<NetworkModel> = [{
        name: "eos",
        icon: "/img/networks/eos.svg",
        resources: EOSIO_RESOURCES
    },
    {
        name: "wax",
        icon: "/img/networks/wax.svg",
        resources: EOSIO_RESOURCES
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