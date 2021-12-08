import React from "react";

import { Meta, Story } from '@storybook/react';
import { CollectionDetails, CollectionDetailsProps } from '../../src/components/3_collections/CollectionDetails';
import { defaultCollection } from "../../src/data/mock/collection.mock";
import { StandardSize } from "../../src/models/Standard.model";

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