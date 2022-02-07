import React from "react";

import { Meta, Story } from '@storybook/react';
import { Navbar, NavbarProps } from './Navbar';

const meta: Meta = {
    title: 'Core/Navbar',
    component: Navbar,
    argTypes: {

    }
}

export default meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    logo_src: 'https://avatars.githubusercontent.com/u/75587337?s=200&v=4',
    logo_alt: 'dotGems Logo',
  },
  config: {
      hasShadow: true
  }
}