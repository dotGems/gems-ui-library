import React from "react";

import { Meta, Story } from '@storybook/react';
import { Drawer, DrawerProps } from './Drawer';

const meta: Meta = {
    title: 'Core/Drawer',
    component: Drawer,
    argTypes: {

    }
}

export default meta;

export const Primary = () => <Drawer variant={"outlined"}/>