import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";

export interface DropBannerProps extends StandardModel {}

const useStyles = makeStyles({});

/**
 * Displays a drop's core information next to the NFT display.
 */
export const DropBanner = ({}: DropBannerProps) => {

    const classes = useStyles();

    return (
        <div>
            Not implemented
        </div>
    );
};