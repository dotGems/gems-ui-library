import React from "react";

import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps, defaultProps } from './Avatar';

const meta: Meta = {
    title: 'Core/Avatar',
    component: Avatar,
    args: {
        ...defaultProps
    }
}

export default meta;


const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        img: "/img/avatar/person_1.jpg",
        label: "Alissa Anderson"
    },
    config: {
        onClick: () => {console.log("You clicked Alissa.")}
    }
}