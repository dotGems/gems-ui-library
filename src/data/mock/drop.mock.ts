import { DropModel } from "../../models/Drop.model";
import { defaultTemplate } from "./template.mock";

export const defaultDrop : DropModel = {
    drop_id: 81,
    collection_name: 'merijn.gems',
    assets_to_mint: [ 
        { template_id: 2420, tokens_to_back: [] } 
    ],
    listing_price: '10.0000 EOS',
    settlement_symbol: '4,EOS',
    price_recipient: 'merijn.gems',
    fee_rate: '0.02000000000000000',
    auth_required: 0,
    account_limit: 0,
    account_limit_cooldown: 0,
    max_claimable: 21,
    current_claimed: 21,
    start_time: 1634486400,
    end_time: 0,
    display_data: '',
    template: defaultTemplate
};