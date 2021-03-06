import React from "react";

import { Meta, Story } from '@storybook/react';
import { CollectionCard, CollectionCardProps } from './CollectionCard';
import { defaultCollection } from "../../data/mock/collection.mock";

const meta: Meta = {
    title: 'Collections/CollectionCard',
    component: CollectionCard
}

export default meta;


const Template: Story<CollectionCardProps> = (args) => <CollectionCard {...args} />;

export const Default = Template.bind({});
Default.args = defaultCollection;