import React from "react";

import { Meta, Story } from '@storybook/react';
import { Checkout, CheckoutProps } from './Checkout';

const meta: Meta = {
    title: 'Chain/Checkout',
    component: Checkout
}

export default meta;


const Template: Story<CheckoutProps> = (args) => <Checkout {...args} />;

export const Default = Template.bind({});
Default.args = {}