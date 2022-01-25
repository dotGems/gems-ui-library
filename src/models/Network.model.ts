import { EOSIOResourcesModel } from "./chain/EOSIOResources.model";

export interface NetworkModel {
    blockchain: string,
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