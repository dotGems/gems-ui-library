import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface BlendModalProps extends StandardProps {}

const useStyles = makeStyles({});

/**
 * Modal containing the blend menu to allow users to fuse
 * different NFTs to create a new, usually more valuable NFT.
 */
export const BlendModal = ({}: BlendModalProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};