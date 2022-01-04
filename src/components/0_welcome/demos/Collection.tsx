import React from 'react';
import { makeStyles } from '@mui/styles';

import { CollectionBanner } from '../../3_collections/CollectionBanner';
import { defaultCollection } from '../../../data/mock/collection.mock';
import { StandardSize } from '../../../models/Standard.model';

const useStyles = makeStyles({});

/**
 * Demo page featuring Collection UI.
 */
export function Collection() {

    const classes = useStyles();

    const bannerData = {
        size: StandardSize.md,
        className: undefined,
        style: {},
        data: defaultCollection,
        config: {
            showViewData: true
        },
        dict: {
            about: undefined
        }
    }

    return (
        <div>
            <CollectionBanner {...bannerData}/>
        </div>
    )
}
