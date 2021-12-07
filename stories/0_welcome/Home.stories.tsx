import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Home } from '../../src/components/0_welcome/Home';

const meta: Meta = {
  title: 'Welcome/Home',
  component: Home
};

export default meta;

const Template: Story = args => <Home {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});