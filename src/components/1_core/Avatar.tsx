import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface AvatarProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays a thumbnail followed by a label.
 */
export const Avatar = ({}: AvatarProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};