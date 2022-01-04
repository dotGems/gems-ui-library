import { CollectionDeserializedModel } from "./CollectionDeserialized.model";
import { LocalizedStandardModel } from "./Standard.model";

export interface CollectionModel {
    collection_name: string,
    author: string,
    allow_notify: number,
    authorized_accounts: Array<String>,
    notify_accounts: Array<String>,
    market_fee: string,
    deserialized: CollectionDeserializedModel
}