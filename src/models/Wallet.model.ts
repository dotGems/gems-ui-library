export interface WalletButtonModel {
    name: string,
    icon: string
}

export interface WalletModel {
    eosn_id?: string,
    linkedAccount?: string,
    pfp?: string,
    status?: string,
    visible?: boolean,
    currencies: [{
        name: string,
        amount: string
        resources?: {
            ram: {
                cur: Number,
                max: Number
            }
            cpu: {
                cur: Number,
                max: Number
            }
            net: {
                cur: Number,
                max: Number
            }
        }
    }]
}

export enum SupportedWallet {
    anchor = "anchor",
    im_token = "im_token",
    leaf = "leaf",
    math = "math",
    my_key = "my_key",
    scatter = "scatter",
    starteos = "starteos",
    token_pocket = "token_pocket",
    wombat = "wombat",
    wax_cloud = "wax_cloud"
};
