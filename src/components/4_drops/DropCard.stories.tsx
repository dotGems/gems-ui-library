import React from "react";
import { Meta, Story } from '@storybook/react';

import { DropCard, DropCardProps } from './DropCard';
import { defaultDrop } from "../../data/mock/drop.mock"; 

const meta: Meta = {
    title: 'Drops/DropCard',
    component: DropCard
}

export default meta;


const Template: Story<DropCardProps> = (args) => <DropCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: "md",
    style: {},
    className: undefined,
    data: defaultDrop,
    config: {}
};