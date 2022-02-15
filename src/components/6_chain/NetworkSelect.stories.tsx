import React from "react";

import { Meta, Story } from '@storybook/react';
import { NetworkSelect, NetworkSelectProps } from './NetworkSelect';
import { SUPPORTED_NETWORK_KEYS } from '../../data/constants/networks/networks';

const meta: Meta = {
    title: 'Chain/NetworkSelect',
    component: NetworkSelect
}

export default meta;


const Template: Story<NetworkSelectProps> = (args) => <NetworkSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        selectedNetwork: SUPPORTED_NETWORK_KEYS.eos
    },
    config: {
        onChange: (newNetwork) => console.log(`New network selected: '${newNetwork}'`)
    }
}