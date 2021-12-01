import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Welcome } from '../src/components/Welcome';

const meta: Meta = {
  title: 'Welcome',
  component: Welcome
};

export default meta;

const Template: Story = args => <Welcome {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});