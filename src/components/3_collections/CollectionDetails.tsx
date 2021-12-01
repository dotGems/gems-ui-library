import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface CollectionDetailsProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays a collection's core information.
 */
export const CollectionDetails = ({}: CollectionDetailsProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};