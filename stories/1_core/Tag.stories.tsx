import React from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';

import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../../src/components/1_core/Tag';

const meta: Meta = {
    title: 'Core/Tag',
    component: Tag
}

export default meta;


const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant:"info",
    size: "md",
    data: {
        icon: WhatshotIcon,
        label: "Hot"
    },
    config: {
        custom: {
            isRounded: false,
            hasPadding: true
        }
    }
}

export const IconOnly = Template.bind({});
IconOnly.args = {
    variant:"info",
    size: "md",
    data: {
        icon: WhatshotIcon
    },
    config: {
        custom: {
            isRounded: false,
            hasPadding: true
        }
    }
}

export const TextOnly = Template.bind({});
TextOnly.args = {
    variant:"info",
    size: "md",
    data: {
        label: "Hot"
    },
    config: {
        custom: {
            isRounded: false,
            hasPadding: true
        }
    }
}