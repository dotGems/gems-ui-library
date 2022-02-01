import { SupportedWallet } from '../../models/Wallet.model';

/**
 * List of supported wallets (and their button styling)
 * across all supported networks, making referencing easier
 * in multiple networks.
 */
 export const WALLET_BUTTONS = [
    {
        id: SupportedWallet.anchor,
        name: "Anchor",
        icon: "/img/wallets/anchor.png"
    },
    {
        id: SupportedWallet.im_token,
        name: "imToken",
        icon: "/img/wallets/im_token.png"
    },
    {
        id: SupportedWallet.leaf,
        name: "Leaf",
        icon: "/img/wallets/leaf.png"
    },
    {
        id: SupportedWallet.math,
        name: "Math",
        icon: "/img/wallets/math.png"
    },
    {
        id: SupportedWallet.my_key,
        name: "MyKey",
        icon: "/img/wallets/my_key.png"
    },
    {
        id: SupportedWallet.scatter,
        name: "Scatter",
        icon: "/img/wallets/scatter.png"
    },
    {
        id: SupportedWallet.starteos,
        name: "Starteos",
        icon: "/img/wallets/starteos.png"
    },
    {
        id: SupportedWallet.token_pocket,
        name: "TP",
        icon: "/img/wallets/token_pocket.png"
    },
    {
        id: SupportedWallet.wax_cloud,
        name: "WAX Cloud",
        icon: "/img/wallets/wax_cloud.png"
    },
    {
        id: SupportedWallet.wombat,
        name: "Wombat",
        icon: "/img/wallets/wombat.png"
    }
 ];