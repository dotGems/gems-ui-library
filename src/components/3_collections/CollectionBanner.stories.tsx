import React from "react";

import { Meta, Story } from '@storybook/react';
import { CollectionBanner, CollectionBannerProps } from './CollectionBanner';
import { defaultCollection } from "../../data/mock/collection.mock";
import { StandardSize } from "../../models/Standard.model";

const meta: Meta = {
    title: 'Collections/CollectionBanner',
    component: CollectionBanner
}

export default meta;


const Template: Story<CollectionBannerProps> = (args) => <CollectionBanner {...args} />;

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