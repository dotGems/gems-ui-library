import React from "react";

import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';

const meta: Meta = {
    title: 'Button',
    component: Button,
    parameters: {
        docs: {
            description: {
                component: 'Some component _markdown_',
            },
        },
    },
    argTypes: {
        variant: {
            options: ['text', 'outlined', 'contained'],
            control: { type: 'select' }
        },
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        label: {
            control: { type: 'text' }
        },
    }
}

export default meta;


const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "outlined",
    label: 'Button',
};

// export const Secondary = Template.bind({});

// Secondary.args = {
//     label: 'Button',
// };


// export const WithStoryDescription = Primary.bind({});
// Primary.parameters = {
//     docs: {
//         description: {
//             story: 'Some story **markdown**',
//         },
//     },
// };