// import { CollectionModel } from "./Collection.model";
// import { TemplateModel } from "./Template.model";

// export interface DropModel {
//     drop_id: number,
//     collection_name: string,
//     assets_to_mint: Array<{
//         template_id: number,
//         tokens_to_back: Array<string>
//     }>,
//     listing_price: string,
//     settlement_symbol: string,
//     price_recipient: string,
//     fee_rate: string,
//     auth_required: number,
//     account_limit: number,
//     account_limit_cooldown: number,
//     max_claimable: number,
//     current_claimed: number,
//     start_time: number,
//     end_time: number,
//     display_data: string,
//     collection: CollectionModel,
//     template: TemplateModel
// }


// Drop Data (atomichub) + Collection Data
export interface DropModel {
    burnable: boolean,
    immutable_serialized_data: {
        name: string,
        img: string,
        backimg?: string,
        context: string,
        about: string,
        artist: string,
        website: string,
        video?: string,
        cardimg?: string
    },
    issued_supply: number,
    max_supply: number,
    schema_name: string,
    template_id: number,
    transferable: boolean,
    drop_id: number,
    collection_name: string,
    assets_to_mint: Array<{
        template_id: number,
        tokens_to_back: Array<string>
    }>,
    listing_price: string,
    settlement_symbol: string,
    price_recipient: string,
    fee_rate: string,
    auth_required: number,
    account_limit: number,
    account_limit_cooldown: number,
    max_claimable: number,
    current_claimed: number,
    start_time: number,
    end_time: number,
    display_data: string
}