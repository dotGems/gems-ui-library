import React from "react";

import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from '../../src/components/1_core/Card';

const meta: Meta = {
    title: 'Core/Card',
    component: Card,
    argTypes: {

    }
}

export default meta;

export const Primary = () => <Card variant={"outlined"}>Click Away</Card>
export const Secondary = () => <Card variant={"contained"}>Click Away</Card>