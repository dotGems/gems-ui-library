import { Api, JsonRpc } from "eosjs";
import { ScatterEOS, ScatterJS } from "scatter-ts";
import { network } from "./config";

export async function login() {
    // login Scatter

    ScatterJS.plugins(new ScatterEOS());

    const rpc = new JsonRpc(network.fullhost());

    ScatterJS.connect('Pomelo NFT', { network }).then(async connected => {
      if (!connected) return console.error('no scatter');

      const eos = ScatterJS.eos(network, Api, { rpc });
      const identity = await ScatterJS.login();

      const account = ScatterJS.account('eos');
      console.log({ account });
      localStorage.setItem("scatterAccount", account.name);
      
      return account;


    })
};
