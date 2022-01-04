import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Drop } from './Drop';

const meta: Meta = {
  title: 'Welcome/Demos/Drop',
  component: Drop
};

export default meta;

const Template: Story = args => <Drop {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});