import React from "react";
import { Meta, Story } from '@storybook/react';

import { DropActionPanel, DropActionPanelProps } from './DropActionPanel';
import { defaultDrop } from "../../data/mock/drop.mock"; 
import { StandardSize } from "../../models/Standard.model";


const meta: Meta = {
    title: 'Drops/DropActionPanel',
    component: DropActionPanel
}

export default meta;


const Template: Story<DropActionPanelProps> = (args) => <DropActionPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: StandardSize.md,
    style: {},
    className: undefined,
    data: defaultDrop,
    // config: {}
};