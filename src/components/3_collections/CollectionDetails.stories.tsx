import React from "react";

import { Meta, Story } from '@storybook/react';
import { CollectionDetails, CollectionDetailsProps } from './CollectionDetails';
import { defaultCollection } from "../../data/mock/collection.mock";
import { StandardSize } from "../../models/Standard.model";

const meta: Meta = {
    title: 'Collections/CollectionDetails',
    component: CollectionDetails
}

export default meta;


const Template: Story<CollectionDetailsProps> = (args) => <CollectionDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: StandardSize.md,
    className: undefined,
    style: {},
    data: defaultCollection,
    config: {
        showViewData: true
    },
    dict: {
        about: undefined
    }
};