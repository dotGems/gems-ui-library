import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardProps } from "../../interfaces/IStandardProps";

export interface DropBannerProps extends StandardProps {}

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