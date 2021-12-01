import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface DropCardProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Displays a drop's core information and purchasing actions
 * in a card.
 */
export const DropCard = ({}: DropCardProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};