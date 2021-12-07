import { LocalizedStandardModel } from "./Standard.model";
import { TemplateModel } from "./Template.model";

export interface DropModel {
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
    display_data: string,
    template: TemplateModel
}

export interface DropProps extends LocalizedStandardModel {
    data: DropModel,
    config?: {
        
    },
    dict?: {
        buy?: string,
        add_to_cart?: string,
        about?: string,
    }
}