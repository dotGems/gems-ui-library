import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface DropDetailsProps extends StandardProps {}

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