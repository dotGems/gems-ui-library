import React from "react";
import WhatshotIcon from '@mui/icons-material/Whatshot';

import { Meta, Story } from '@storybook/react';
import { Tag, TagProps } from '../../src/components/1_core/Tag';
import { CoreVariant } from "../../src/models/StandardCore.model";
import { StandardSize } from "../../src/models/Standard.model";

const meta: Meta = {
    title: 'Core/Tag',
    component: Tag
}

export default meta;


const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
    variant: CoreVariant.info,
    size: StandardSize.md,
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
    variant: CoreVariant.info,
    size: StandardSize.md,
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
    variant: CoreVariant.info,
    size: StandardSize.md,
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