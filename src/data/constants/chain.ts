/**
 * Here, we regroup all constants related to our interactions with the blockchain.
 * That includes the networks (or chains) we're supporting as well as their supported
 * wallets, etc.
 */

export const SUPPORTED_NETWORKS = [{
        name: "eos",
        icon: "/img/networks/eos.svg"
    },
    {
        name: "wax",
        icon: "/img/networks/wax.svg"
    },
    // {
    //     name: "solana",
    //     icon: "/img/networks/solana.svg"
    // },
    // {
    //     name: "ethereum",
    //     icon: "/img/networks/ethereum.svg"
    // }
];

export const WALLETS = {
    anchor: {
        name: "Anchor",
        icon: "/img/wallets/anchor.png",
        bgColor: "#3D519C",
        fgColor: "white",
        url: "https://greymass.com/en/anchor/"
    },
    wombat: {
        name: "Wombat",
        icon: "/img/wallets/wombat.png",
        bgColor: "#FF4F24",
        fgColor: "white",
        url: "https://getwombat.io/"
    },
    scatter: {
        name: "Scatter",
        icon: "/img/wallets/scatter.png",
        bgColor: "#00A8FF",
        fgColor: "white",
        url: "https://get-scatter.com/products"
    }
} 

export const SUPPORTED_WALLETS = {
    eos: [
        WALLETS.anchor,
        WALLETS.wombat,
        WALLETS.scatter,
    ],
    wax: [
        WALLETS.anchor,
        WALLETS.wombat,
    ],
    solana: [],
    ethereum: []
};