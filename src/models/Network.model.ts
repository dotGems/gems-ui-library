import { EOSIOResourcesModel } from "./chain/EOSIOResources.model";

export interface NetworkModel {
    blockchain: string,
    icon: string,
    chain_id: string,
    host: string,
    protocol: string,
    port: Number,
    resources: EOSIOResourcesModel | [],
    explorer_url: string
}