import React from "react";

import { Meta, Story } from '@storybook/react';
import { Navbar, NavbarProps } from './Navbar';

const meta: Meta = {
    title: 'dotGems/Navbar',
    component: Navbar
}

export default meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    logo: {
      src: '/img/dotGems_logo.png',
      alt: 'dotGems Logo',
    },
    links: [{
      label: "Hello",
      onClick: () => console.log("Hello")
    }]
  },
  config: {
      hasShadow: true
  }
}