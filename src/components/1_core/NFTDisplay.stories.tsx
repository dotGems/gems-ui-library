import React from "react";

import { Meta, Story } from '@storybook/react';
import { NFTDisplay, NFTDisplayProps } from './NFTDisplay';

const meta: Meta = {
    title: 'Core/NFTDisplay',
    component: NFTDisplay
}

export default meta;


const Template: Story<NFTDisplayProps> = (args) => <NFTDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        img: "QmZx1StsPY7M69NZDoat4rTZNBSmqSa48viL1VybfYDavV",
        backimg: "QmQM1fswZZvrN2UJWccvz7YTjNsWo7wcCFTLrfPyjdu9AG",
        cardimg: "QmNMMcFpFTATYvy7YFgMfD2yYDbrvoWoAbvsiouFRju776",
        video: "QmVmvNNQ3njPcxu3WnAEC4gRAWgmSvJtm1NZPcifANFhUx",
    },
    config: {
        defaultPart: 'backimg',
        loop: {
            isEnabled: false,
            delay: 3000,
            playFullVideo: true
        },
        video: {
            autoplay: true,
            isMuted: true
        },
        showSelector: true
    }
}