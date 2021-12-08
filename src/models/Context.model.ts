export interface ContextModel {
    config: {
        chain: {
            useCheckout: Boolean;
            supportedNetworks: Array<String> // User-supported networks, has to be within what we support.
            supportedWallets: any // User-supported wallets, has to be within what we support.
        }
    }
    style: {
        palette: {},
        variant: 'ELEGANT' | 'DYNAMIC'
    }
}