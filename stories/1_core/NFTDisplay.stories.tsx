import React from "react";

import { Meta, Story } from '@storybook/react';
import { NFTDisplay, NFTDisplayProps } from '../../src/components/1_core/NFTDisplay';

const meta: Meta = {
    title: 'Core/NFTDisplay',
    component: NFTDisplay
}

export default meta;


const Template: Story<NFTDisplayProps> = (args) => <NFTDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {}