import { LocalizedStandardModel } from "./Standard.model";

export interface CollectionModel {
    collection_name: string,
    author: string,
    allow_notify: number,
    authorized_accounts: Array<String>,
    notify_accounts: Array<String>,
    market_fee: string,
    deserialized: {
        name: string,
        description: string,
        img: string,
        url: string
    },
}

export interface CollectionProps extends LocalizedStandardModel {
    data: CollectionModel,
    config?: {
        showViewData?: Boolean // Whether to display the 'metadata' button.
        showDropsMosaic?: Boolean // Whether to use the collection's image (false) or a mosaic of drops within that collection.
    }
}