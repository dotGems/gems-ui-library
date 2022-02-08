import React from "react";

import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './Footer';

const meta: Meta = {
    title: 'dotGems/Footer',
    component: Footer
}

export default meta;


const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: {
    logo: {
      src: '/img/dotGems_logo.png',
      alt: 'dotGems Logo',
    },
  }
}