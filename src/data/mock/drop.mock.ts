import { DropModel } from "../../models/Drop.model";
import { defaultCollection } from "./collection.mock";
import { defaultTemplate } from "./template.mock";

export const defaultDrop : DropModel = {
    // drop_id: 81,
    // collection_name: 'merijn.gems',
    // assets_to_mint: [ 
    //     { template_id: 2420, tokens_to_back: [] } 
    // ],
    // listing_price: '10.0000 EOS',
    // settlement_symbol: '4,EOS',
    // price_recipient: 'merijn.gems',
    // fee_rate: '0.02000000000000000',
    // auth_required: 0,
    // account_limit: 0,
    // account_limit_cooldown: 0,
    // max_claimable: 21,
    // current_claimed: 12,
    // start_time: 1634486400,
    // end_time: 0,
    // display_data: '',
    // collection: defaultCollection,
    // template: defaultTemplate
    burnable: true,
    immutable_serialized_data: {
        name: "Kimberlite",
        img: "QmabcaDrRnRSTeUXPnRXchhMEG7QMshDVc5EYmyFhFtq6Z",
        backimg: "QmUiBeFEtETQHZuDwCXWXNBFQL3W3Bu9n7yUNpCdAC9P2w",
        context: "Formed deep within the mantle, kimberlite is an igneous rock that often carries diamonds to the surface of the earth. Finding and accumulating kimberlite is the best way to eventually discover rare diamonds! Read the scroll (backside image) for further instructions.",
        about: "Pomelo is an open-source crowdfunding platform that multiplies your contributions and allows you to support the EOS projects you love. All primary sales revenue generated by this Pomelo NFT series will be donated to the Pomelo platform as matching funds and distributed during the second round of funding.",
        artist: "Shramana Haldar - shramanahaldar.com/about",
        website: "Pomelo.io"
    },
    issued_supply: 595,
    max_supply: 5000,
    schema_name: "basics",
    template_id: 4032,
    transferable: true,
    drop_id: 117,
    collection_name: "pomelo",
    assets_to_mint: [
        {
            template_id: 4032,
            tokens_to_back: []
        }
    ],
    listing_price: "1.0000 EOS",
    settlement_symbol: "4,EOS",
    price_recipient: "pomelo.gems",
    fee_rate: "0.02000000000000000",
    auth_required: 0,
    account_limit: 20,
    account_limit_cooldown: 43200,
    max_claimable: 3450,
    current_claimed: 568,
    start_time: 1644411600,
    end_time: 0,
    display_data: "{\"name\": \"Kimberlite\", \"description\": \"Formed deep within the mantle, kimberlite is an igneous rock that often carries diamonds to the surface of the earth. Finding and accumulating kimberlite is the best way to eventually discover rare diamonds! Click the NFT above and read the scroll (backside image) for further instructions.\"}",
    // collection: defaultCollection,
    // template: defaultTemplate
};