import React from 'react';
import { makeStyles } from '@mui/styles';

import { LocalizedStandardModel } from "../../models/Standard.model";

export interface DropDetailsProps extends LocalizedStandardModel {}

const useStyles = makeStyles({});

/**
 * Displays a drop's core information.
 */
export const DropDetails = ({}: DropDetailsProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};