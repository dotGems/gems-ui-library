import React from "react";

import { Meta, Story } from '@storybook/react';
import { Blend, BlendProps } from '../../src/components/2_blend/Blend';

const meta: Meta = {
    title: 'Blend/Blend',
    component: Blend
}

export default meta;


const Template: Story<BlendProps> = (args) => <Blend {...args} />;

export const Default = Template.bind({});
Default.args = {}