import React from "react";

import { Meta, Story } from '@storybook/react';
import { WalletConnect, WalletConnectProps } from '../../src/components/6_chain/WalletConnect';

const meta: Meta = {
    title: 'Chain/WalletConnect',
    component: WalletConnect
}

export default meta;


const Template: Story<WalletConnectProps> = (args) => <WalletConnect {...args} />;

export const Default = Template.bind({});
Default.args = {}