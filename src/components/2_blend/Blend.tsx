import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface BlendProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Modal containing the blend menu to allow users to fuse
 * different NFTs to create a new, usually more valuable NFT.
 */
export const Blend = ({}: BlendProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};