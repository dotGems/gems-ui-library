import { SUPPORTED_NETWORK_KEYS } from "../data/constants/networks/networks";
import { EOSIOResourcesModel } from "./chain/EOSIOResources.model";

export interface NetworkModel {
    blockchain: SUPPORTED_NETWORK_KEYS,
    icon: string,
    colors: {
        bg_1: string,
        bg_2: string,
        fg: string
    }
    chain_id: string,
    host: string,
    protocol: string,
    port: Number,
    resources: EOSIOResourcesModel | [],
    explorer_url: string
}