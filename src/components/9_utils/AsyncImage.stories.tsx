import React from "react";

import { Meta, Story } from '@storybook/react';
import { AsyncImage, AsyncImageProps } from './AsyncImage';

const meta: Meta = {
    title: 'Utils/AsyncImage',
    component: AsyncImage
}

export default meta;


const Template: Story<AsyncImageProps> = (args) => <AsyncImage {...args} />;

export const Default = Template.bind({});
Default.args = {
    url: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
    alt: "Geometric Shapes",
    onLoadBegin: () => {console.log('Async Image Begins Loading.')},
    onLoadSuccess: () => {console.log('Async Image Successfully Loaded.')},
    onLoadFailure: () => {console.log('Async Image Failed to Load.')},
};