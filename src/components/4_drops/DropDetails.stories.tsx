import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropDetails, DropDetailsProps } from './DropDetails';

import { defaultDrop } from "../../data/mock/drop.mock";

const meta: Meta = {
    title: 'Drops/DropDetails',
    component: DropDetails
}

export default meta;


const Template: Story<DropDetailsProps> = (args) => <DropDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: defaultDrop,
    config: {
        showArtist: true,
        showCollection: true,
        showAbout: true,
        showBurnableTransferable: true,
        showViewData: true
    }
};