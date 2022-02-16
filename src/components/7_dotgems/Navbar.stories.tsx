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
    links: [
      {
        id: "discover",
        label: "Discover",
        onClick: () => console.log("Discover")
      },
      {
        id: "drops",
        label: "Drops",
        onClick: () => console.log("Drops")
      },
      {
        id: "market",
        label: "Market",
        onClick: () => console.log("Market")
      },
      {
        id: "constructs",
        label: "Constructs",
        onClick: () => console.log("Constructs")
      },
    ],
  },
  config: {
    hasShadow: true
  },
  activeLink: "discover",
}