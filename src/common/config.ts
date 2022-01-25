import { ScatterJS, ScatterEOS } from 'scatter-ts';
import { JsonRpc, Api } from 'eosjs';
import { EOSIO_RPC, EOSIO_CHAIN_ID } from "./constants";
import fetch from "isomorphic-fetch";

ScatterJS.plugins(new ScatterEOS());
const { host, protocol } = new URL(EOSIO_RPC);
export const network = ScatterJS.Network.fromJson({
    blockchain: 'eos',
    protocol: (protocol.replace(":", '') as "http"|"https"),
    host,
    port: protocol == "https:" ? 443 : 80,
    chainId: EOSIO_CHAIN_ID
});
export const rpc = new JsonRpc(network.fullhost(), {fetch});
export function getApi() {
  return ScatterJS.eos(network, Api, { rpc });
}