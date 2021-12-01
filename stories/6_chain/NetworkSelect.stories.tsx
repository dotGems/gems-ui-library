import React from "react";

import { Meta, Story } from '@storybook/react';
import { NetworkSelect, NetworkSelectProps } from '../../src/components/6_chain/NetworkSelect';

const meta: Meta = {
    title: 'Chain/NetworkSelect',
    component: NetworkSelect
}

export default meta;


const Template: Story<NetworkSelectProps> = (args) => <NetworkSelect {...args} />;

export const Default = Template.bind({});
Default.args = {}