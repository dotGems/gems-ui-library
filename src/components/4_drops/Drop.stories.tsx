
import React from "react";
import { Meta, Story } from '@storybook/react';

import { DropCard, DropCardProps } from './DropCard';
import { defaultDrop } from "../../data/mock/drop.mock"; 
import { StandardSize } from '../../models/Standard.model';
import { Drop } from './Drop';

const meta: Meta = {
    title: 'Drops/Drop',
    component: Drop
}

export default meta;


const Template: Story<any> = (args) => <Drop {...args} dropId={118} />;

export const Default = Template.bind({});
Default.args = {
    size: StandardSize.md,
    style: {},
    className: undefined,
    data: defaultDrop,
    config: {}
};