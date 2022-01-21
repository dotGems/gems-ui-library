import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface DrawerProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Drawer container that can open from either side of the browser.
 */
export const DrawerProps = ({}: DrawerProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};