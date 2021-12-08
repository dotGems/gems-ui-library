import React from "react";

import { Meta, Story } from '@storybook/react';
import { CollectionBanner, CollectionBannerProps } from '../../src/components/3_collections/CollectionBanner';
import { defaultCollection } from "../../src/data/mock/collection.mock";

const meta: Meta = {
    title: 'Collections/CollectionBanner',
    component: CollectionBanner
}

export default meta;


const Template: Story<CollectionBannerProps> = (args) => <CollectionBanner {...args} />;

export const Default = Template.bind({});
Default.args = defaultCollection;