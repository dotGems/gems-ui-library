import { getApi, network } from "./config";
import { ScatterJS, Action } from "scatter-ts"

export async function transact(actions: Action[]) {
    console.log(`scatter::transact:actions: ${JSON.stringify(actions, null, 2)}`);
    const options = { blocksBehind: 3, expireSeconds: 30 };
    const api = getApi();
    return api.transact({ actions }, options);
}

export function connect() {
    const connected = ScatterJS.connect('pomelo.io', { network });
    if (!connected) throw "Can't connect to Scatter";
    return connected;
}

export async function login() {
    console.log("scatter::login");
    await connect();
    const id = await ScatterJS.login();
    if (!id) throw "No Scatter ID";
    const account = ScatterJS.account('eos');
    if (!account) throw "No Scatter Account";
    return account;
};

export async function disconnect() {
  console.log("scatter::disconnect");
  if ( ScatterJS.scatter && ScatterJS.scatter.forgetIdentity ) {
    await ScatterJS.scatter.forgetIdentity();
  }
};

export async function getAccount() {
    const { name, authority, publicKey } = await login();
    return { actor: name, permission: authority, publicKey, authorization: `${name}@${authority}` };
}

export async function getChain() {
    const { blockchain, chainId } = await login();
    return { blockchain, chainId };
}