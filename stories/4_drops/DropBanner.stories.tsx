import React from "react";

import { Meta, Story } from '@storybook/react';
import { DropBanner, DropBannerProps } from '../../src/components/4_drops/DropBanner';

const meta: Meta = {
    title: 'Drops/DropBanner',
    component: DropBanner
}

export default meta;


const Template: Story<DropBannerProps> = (args) => <DropBanner {...args} />;

export const Default = Template.bind({});
Default.args = {}