import React from "react";

import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './Card';

const meta: Meta = {
    title: 'Core/Card',
    component: Card,
    argTypes: {

    }
}

export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: "outlined"
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: "contained"
};