import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton, Snackbar, Typography } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import DataObjectIcon from '@mui/icons-material/DataObject';

import { LocalizedStandardModel } from "../../models/Standard.model";
import { Button } from "../1_core/Button";
import { Tag } from '../1_core/Tag';
import { COLLECTION_SOURCE } from '../../data/constants/urls';
import { copyToClipboard, feeRateToPercentage } from '../../utils/data';
import { CollectionModel } from '../../models/Collection.model';

export interface CollectionDetailsProps extends LocalizedStandardModel {
    data: CollectionModel,
    config: {
        showViewData?: Boolean
    }
}

const useStyles = makeStyles({
    collectionDescription: {
        marginTop: "24px"
    }
});

/**
 * Displays a collection's core information.
 * 
 * @todo Translate
 * @todo Handle \n better. Using white-space isn't enough,
 *       maybe we'll need to parse \ns and return multiple <p>s JSX.
 * @todo Implement className
 * @todo Implement variant
 * @todo Implement size
 * @todo Implement style
 * @todo Implement dict
 */
export const CollectionDetails = ({
    className,
    variant,
    size,
    style,
    data,
    config,
    dict
}: CollectionDetailsProps) => {

    const classes = useStyles();

    const [isSnackbarOpen, setSnackbarOpen] = useState(false);

    return (
        <div>
            <Typography variant="h2" style={{ fontSize: "36px", fontWeight: "bold" }} component="div" gutterBottom><CollectionsOutlinedIcon />&nbsp;{data.deserialized.name}</Typography>
            <Tag data={{icon:PersonOutlinedIcon, iconTitle:"Author", label:data.author}} variant="light" size="lg" config={{custom: {hasPadding: false}}}/>
            <Button startIcon={<LanguageIcon />} label="Website" variant="text" target="_blank" href={`${COLLECTION_SOURCE}${data.collection_name}`}/>
            {config.showViewData ? <Button startIcon={<DataObjectIcon />} label="Metadata" variant="text" onClick={() => copyToClipboard(data, () => {setSnackbarOpen(true)})}/> : null}
            <div className={classes.collectionDescription}>
                <Typography variant="h3" style={{ fontSize: "24px", fontWeight: "bold" }} component="div" gutterBottom>About this Collection</Typography>
                <Typography variant="body1" color="gray" gutterBottom>{data.deserialized.description}</Typography>
            </div>
            <Typography variant="caption" color="gray" gutterBottom>All transactions within this collection are subject to a&nbsp;<strong>{feeRateToPercentage(data.market_fee)}&nbsp;fee</strong>&nbsp;to cover network costs.</Typography>
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                message="Metadata copied to clipboard"
                action={<IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={() => setSnackbarOpen(false)}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>}
            />
        </div>
    );
};