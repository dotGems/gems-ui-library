export interface WalletButtonModel {
    name: string,
    icon: string,
    bgColor: string,
    fgColor: string,
    url: string
}

export interface WalletModel {
    username: string,
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