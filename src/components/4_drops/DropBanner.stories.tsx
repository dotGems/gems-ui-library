import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropBanner, DropBannerProps } from './DropBanner';
import { defaultDrop } from "../../data/mock/drop.mock";
import { StandardSize, StandardVariant } from "../../models/Standard.model";

const meta: Meta = {
    title: 'Drops/DropBanner',
    component: DropBanner
}

export default meta;


const Template: Story<DropBannerProps> = (args) => <DropBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: StandardVariant.elegant,
    size: StandardSize.md,
    style:{},
    data: defaultDrop,
    config: {
        nft_display: {
            defaultPart: 'img',
            loop: {
                isEnabled: false,
                delay: 3000,
                playFullVideo: true
            },
            video: {
                autoplay: true
            },
            showSelector: true
        },
        details: {
            showArtist: true,
            showCollection: true,
            showAbout: true,
            showBurnableTransferable: true,
            showViewData: true
        }
    }
  }