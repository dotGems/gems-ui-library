import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropDetails, DropDetailsProps } from '../../src/components/4_drops/DropDetails';

const meta: Meta = {
    title: 'Drops/DropDetails',
    component: DropDetails
}

export default meta;


const Template: Story<DropDetailsProps> = (args) => <DropDetails {...args} />;

export const Default = Template.bind({});
Default.args = {}