import React from "react";

import { Meta, Story } from '@storybook/react';
import { WalletSelect, WalletSelectProps } from '../../src/components/6_chain/WalletSelect';

const meta: Meta = {
    title: 'Chain/WalletSelect',
    component: WalletSelect
}

export default meta;


const Template: Story<WalletSelectProps> = (args) => <WalletSelect {...args} />;

export const Default = Template.bind({});
Default.args = {}