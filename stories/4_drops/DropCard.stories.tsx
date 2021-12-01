import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropCard, DropCardProps } from '../../src/components/4_drops/DropCard';

const meta: Meta = {
    title: 'Drops/DropCard',
    component: DropCard
}

export default meta;


const Template: Story<DropCardProps> = (args) => <DropCard {...args} />;

export const Default = Template.bind({});
Default.args = {}