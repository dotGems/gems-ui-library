import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Collection } from '../../../src/components/0_welcome/demos/Collection';

const meta: Meta = {
  title: 'Welcome/Demos/Collection',
  component: Collection
};

export default meta;

const Template: Story = args => <Collection {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});