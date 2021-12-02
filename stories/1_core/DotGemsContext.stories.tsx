import React from "react";

import { Meta, Story } from '@storybook/react';
import { DotGemsContext, DotGemsContextProps } from '../../src/components/1_core/DotGemsContext';

const meta: Meta = {
    title: 'Core/DotGemsContext',
    component: DotGemsContext
}

export default meta;


const Template: Story<DotGemsContextProps> = (args) => <DotGemsContext {...args} />;

export const Default = Template.bind({});
Default.args = {}
