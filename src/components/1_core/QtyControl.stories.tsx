import React from "react";

import { Meta, Story } from '@storybook/react';
import { QtyControl, QtyControlProps } from './QtyControl';
import { StandardSize } from "../../models/Standard.model";

const meta: Meta = {
    title: 'Core/QtyControl',
    component: QtyControl
}

export default meta;


const Template: Story<QtyControlProps> = (args) => <QtyControl {...args} />;

export const Default = Template.bind({});
Default.args = {
    size: StandardSize.md,
    config: {
        maxQty: 10,
        isEditable: true,
        onChange: (val) => {console.log(`New Quantity Value: ${val}`)},
        custom: {
            isRounded: false
        }
    }
}