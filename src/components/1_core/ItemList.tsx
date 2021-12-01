import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface ItemListProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Container for various elements to be displayed in
 * a searcheable, filtreable, sorteable and paginated list.
 */
export const ItemList = ({}: ItemListProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};