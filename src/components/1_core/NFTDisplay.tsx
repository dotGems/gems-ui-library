import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface NFTDisplayProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Displays all parts of an NFT. The user can select which part
 * of the NFT to be displayed in a larger area. Cycles through the
 * different parts by default.
 */
export const NFTDisplay = ({}: NFTDisplayProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};