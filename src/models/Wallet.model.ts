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