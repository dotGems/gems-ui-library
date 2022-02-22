import { SupportedWallet } from '../../models/Wallet.model';
import { login as anchorLogin } from '../../common/wallets/anchor';
import { login as scatterLogin } from '../../common/wallets/scatter';
/**
 * List of supported wallets (and their button styling)
 * across all supported networks, making referencing easier
 * in multiple networks.
 */
 export const WALLET_BUTTONS = [
    {
        id: SupportedWallet.anchor,
        name: "Anchor",
        icon: "/img/wallets/anchor.png",
        onClick: anchorLogin,
    },
    {
        id: SupportedWallet.im_token,
        name: "imToken",
        icon: "/img/wallets/im_token.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.leaf,
        name: "Leaf",
        icon: "/img/wallets/leaf.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.math,
        name: "Math",
        icon: "/img/wallets/math.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.my_key,
        name: "MyKey",
        icon: "/img/wallets/my_key.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.scatter,
        name: "Scatter",
        icon: "/img/wallets/scatter.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.starteos,
        name: "Starteos",
        icon: "/img/wallets/starteos.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.token_pocket,
        name: "TP",
        icon: "/img/wallets/token_pocket.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.wax_cloud,
        name: "WAX Cloud",
        icon: "/img/wallets/wax_cloud.png",
        onClick: scatterLogin,
    },
    {
        id: SupportedWallet.wombat,
        name: "Wombat",
        icon: "/img/wallets/wombat.png",
        onClick: scatterLogin,
    }
 ];