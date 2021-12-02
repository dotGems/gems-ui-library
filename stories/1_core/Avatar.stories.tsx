import React from "react";

import { Meta, Story } from '@storybook/react';
import { Avatar, AvatarProps } from '../../src/components/1_core/Avatar';

const meta: Meta = {
    title: 'Core/Avatar',
    component: Avatar
}

export default meta;


const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: "md",
    variant: "elegant",
    data: {
        img: "/img/avatar/person_1.jpg",
        label: "Alissa Anderson"
    },
    config: {
        onClick: () => {console.log("You clicked Alissa.")},
        custom: {
            isRounded: undefined
        }
    }
}