import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface NFTDisplayProps extends StandardModel {
    data: {
        img: string,
        video?: string,
        backimg?: string,
        cardimg?: string
    },
    config: {
        
    }
}

const useStyles = makeStyles({});

/**
 * Displays all parts of an NFT. The user can select which part
 * of the NFT to be displayed in a larger area. Cycles through the
 * different parts by default.
 */
export const NFTDisplay = ({}: NFTDisplayProps) => {

    const classes = useStyles();

        /*
    
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
    collection: {
        
    },
    template: {
        template_id: number,
        schema_name: string,
        transferable: number,
        burnable: number,
        max_supply: number,
        current_claimed: number,
        deserialized: {
            name: string,
            img: string,
            video?: string,
            backimg?: string,
            cardimg?: string
            artist: string,
            about: string,
            type: string,
            drop: string,
            website: string,
        }
    }
    
    */

    return (
        <div>
            Not implemented
        </div>
    );
};