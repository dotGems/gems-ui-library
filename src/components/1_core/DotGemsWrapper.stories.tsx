import React from "react";

import { Meta, Story } from '@storybook/react';
import { DotGemsWrapper, DotGemsWrapperProps } from './DotGemsWrapper';
import { Typography } from '@mui/material';

const meta: Meta = {
    title: 'Core/DotGemsWrapper',
    component: DotGemsWrapper,
    argTypes: {

    }
}

export default meta;

const Template: Story<DotGemsWrapperProps> = (args) => <DotGemsWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <Typography>The DotGems Wrapper should contain every component used within your project.</Typography>
}