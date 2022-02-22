import { Action } from 'eosjs/dist/eosjs-serialize';
import { ScatterEOS, ScatterJS } from 'scatter-ts';
import AnchorLink from 'anchor-link';
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport';
import { JsonRpc, Api, RpcError } from 'eosjs';

// Scatter
export const nodeUrl = 'https://eos.greymass.com';
export const chainId = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
export const network = ScatterJS.Network.fromJson({
    blockchain: 'eos',
    chainId,
    host: 'eos.greymass.com',
    port: 443,
    protocol: 'https'
});
export const rpc = new JsonRpc(network.fullhost());

export function get_scatter_api() {
    return ScatterJS.eos(network, Api, {rpc});
}

export async function login_scatter(): Promise<{ name: string, authority: string } | void> {
    // connect to Scatter
    ScatterJS.plugins( new ScatterEOS() );
    const connected = await ScatterJS.connect('Pomelo NFT', { network })
    if (!connected) return console.error('login_scatter:: no scatter');
    const api = get_scatter_api();
    const identity = await ScatterJS.login();
    console.log({identity});
    if (!identity) return console.error('login_scatter:: no identity');
    const account = ScatterJS.account('eos');
    return account;
}

// Anchor
export const transport = new AnchorLinkBrowserTransport()
export const link = new AnchorLink({
    transport,
    chains: [ { chainId, nodeUrl } ],
})

// Transaction
export async function transact(api: Api, actions: Action[]) {
    try {
        const result:any = await api.transact({actions}, {blocksBehind: 3, expireSeconds: 30});
        const trx_id = result.transaction_id;
        for (const action of actions) {
            console.log(`${action.account}::${action.name} [${JSON.stringify(action.data)}] => ${trx_id}`);
        }
        return trx_id;
    } catch (e) {
        if (e instanceof RpcError) {
            const {code, name, what, details} = e.json.error;
            const message = (details[0]) ? details[0].message : `[${name}] ${what}`;

            switch (code) {
                // Provided keys, permissions, and delays do not satisfy declared authorizations
                case 3090003:
                    throw new Error("Provided keys, permissions, and delays do not satisfy declared authorizations");
                // already claimed rewards within past day
                case 3050003:
                    console.error(message);
                    break;
                // Unknown error
                default:
                    throw new Error("Unknown error occurred: " + JSON.stringify(e.json, null, 2));
            }
        } else {
            throw new Error(JSON.stringify(e));
        }
    }
}
