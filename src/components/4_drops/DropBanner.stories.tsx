import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropBanner, DropBannerProps } from './DropBanner';

const meta: Meta = {
    title: 'Drops/DropBanner',
    component: DropBanner
}

export default meta;


const Template: Story<DropBannerProps> = (args) => <DropBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: "elegant",
    size: "md",
    style:{},
    data: {
        drop_id: 81,
        collection_name: 'merijn.gems',
        assets_to_mint: [ { template_id: 2420, tokens_to_back: [] } ],
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
        template: {
            template_id: 2420,
            schema_name: 'merijnworks1',
            transferable: 1,
            burnable: 1,
            max_supply: 21,
            issued_supply: 21,
            immutable_data: {
                name: 'Shangbant',
                img: 'QmWYstiVd25m5CDB2gZiRpmoRCD1FYSEHEvtNcZEHBEyZf',
                artist: 'Merijn Kavelaars',
                about: 'As one of his first purely digital works Marijn Kavelaars presents an animated version of his playful large scale paintings. The title combines the names of 2 places that mean a lot to him. Shanghai, China and Branbant, his home region in the Netherlands.',
                type: 'Limited Edition',
                drop: 'Merijn Kavelaars Genesis Drop',
                website: 'https://www.merijnkavelaars.nl/',
                video: 'QmVmvNNQ3njPcxu3WnAEC4gRAWgmSvJtm1NZPcifANFhUx'
            }
        }
    },
    config: {
        showViewData: true
    }
  }