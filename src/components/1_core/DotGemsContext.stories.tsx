import React from "react";

import { Meta, Story } from '@storybook/react';
import DotGemsContext, { DotGemsProvider } from './DotGemsContext';

const meta: Meta = {
    title: 'Core/DotGemsContext',
    component: DotGemsContext
}

export default meta;


const Template: Story<any> = (args) => <DotGemsProvider {...args} />;

export const Default = Template.bind({});
Default.args = {}
