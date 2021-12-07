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
import { COLLECTION_SOURCE } from '../../constants/urls';
import { feeRateToPercentage } from '../../utils/data';

export interface CollectionDetailsProps extends LocalizedStandardModel {
    data: {
        collection_name: string;
        author: string;
        market_fee: string;
        desc: string;
        name: string;
    },
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

    const copyMetadataToClipboard = () => {
        if(window.isSecureContext) {       
            console.log("Metadata has been copied to clipboard");
            navigator.clipboard.writeText(JSON.stringify(data));
            setSnackbarOpen(true);
        } else {
            console.error("Couldn't copy metadata to clipboard, context is not secure.");
        }
    }

    return (
        <div>
            <Typography variant="h2" style={{ fontSize: "36px", fontWeight: "bold" }} component="div" gutterBottom><CollectionsOutlinedIcon />&nbsp;{data.name}</Typography>
            <Tag data={{icon:PersonOutlinedIcon, iconTitle:"Author", label:data.author}} variant="light" size="lg" config={{custom: {hasPadding: false}}}/>
            <Button startIcon={<LanguageIcon />} label="Website" variant="text" target="_blank" href={`${COLLECTION_SOURCE}${data.collection_name}`}/>
            {config.showViewData ? <Button startIcon={<DataObjectIcon />} label="Metadata" variant="text" onClick={copyMetadataToClipboard}/> : null}
            <div className={classes.collectionDescription}>
                <Typography variant="h3" style={{ fontSize: "24px", fontWeight: "bold" }} component="div" gutterBottom>About this Collection</Typography>
                <Typography variant="body1" gutterBottom>{data.desc}</Typography>
            </div>
            <Typography variant="caption" gutterBottom>All transactions within this collection are subject to a&nbsp;<strong>{feeRateToPercentage(data.market_fee)}&nbsp;fee</strong>&nbsp;to cover network costs.</Typography>
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