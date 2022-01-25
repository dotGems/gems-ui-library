import React from "react";

import { Meta, Story } from '@storybook/react';
import { DotGemsContainer, DotGemsContainerProps } from './DotGemsContainer';

const meta: Meta = {
    title: 'Core/DotGemsContainer',
    component: DotGemsContainer
}

export default meta;


const Template: Story<DotGemsContainerProps> = (args) => <DotGemsContainer {...args} />;

export const Default = Template.bind({});
Default.args = {}