import React from "react";

import { Meta, Story } from '@storybook/react';
import { ItemList, ItemListProps } from './ItemList';

const meta: Meta = {
    title: 'Core/ItemList',
    component: ItemList
}

export default meta;


const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const Default = Template.bind({});
Default.args = {}