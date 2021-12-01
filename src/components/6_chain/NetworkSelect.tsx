import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface NetworkSelectProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays a simple dropdown allowing users to select
 * their network (chain).
 */
export const NetworkSelect = ({}: NetworkSelectProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};