import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface CollectionCardProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays a small card with a collection's core information.
 * Can be used as a tooltip when hovering a collection name.
 */
export const CollectionCard = ({}: CollectionCardProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};