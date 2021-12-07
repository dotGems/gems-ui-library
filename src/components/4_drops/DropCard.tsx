import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface DropCardProps extends StandardModel {}

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