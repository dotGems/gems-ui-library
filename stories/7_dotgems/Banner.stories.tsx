import React from "react";

import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '../../src/components/7_dotgems/Banner';

const meta: Meta = {
    title: 'dotGems/Banner',
    component: Banner
}

export default meta;


const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});