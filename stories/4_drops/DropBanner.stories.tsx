import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropBanner, DropBannerProps } from '../../src/components/4_drops/DropBanner';

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
        display_data: ''
    },
    config: {
        showViewData: true
    }
  }