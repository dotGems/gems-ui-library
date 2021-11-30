import React from "react";

import { Meta, Story } from '@storybook/react';
import { Banner, BannerProps } from '../src/Banner';

const meta: Meta = {
    title: 'Banner',
    component: Banner
}

export default meta;


const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});

