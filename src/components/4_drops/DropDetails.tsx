import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton, Snackbar, Typography } from '@mui/material';
import {
    Language as LanguageIcon,
    DataObject as DataObjectIcon,
    Close as CloseIcon,
    PersonOutlined as PersonOutlinedIcon,
    CollectionsOutlined as CollectionsOutlinedIcon,
    Filter1 as Filter1Icon,
    CompareArrows as CompareArrowsIcon,
    LocalFireDepartment as LocalFireDepartmentIcon 
} from '@mui/icons-material';

import { Button } from '../1_core/Button';
import { Tag } from '../1_core/Tag';

import { COLLECTION_SOURCE } from '../../data/constants/urls';
import { LocalizedStandardModel } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { copyToClipboard } from '../../utils/data';

export interface DropDetailsProps extends LocalizedStandardModel {
    data: DropModel,
    config: {
        showArtist?: Boolean,
        showCollection?: Boolean,
        showAbout?: Boolean,
        showBurnableTransferable?: Boolean,
        showViewData?: Boolean
    }
}

const defaultConfig = {
    showArtist: true,
    showCollection: true,
    showAbout: true,
    showBurnableTransferable: true,
    showViewData: true
};

const useStyles = makeStyles({
    infoContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "top"
    },
    coreInfo: {},
    burnableTransferable: {
        textAlign: "right"
    }
});

/**
 * Displays a drop's core information.
 * 
 * @todo Implement className
 * @todo Implement variant
 * @todo Implement size
 * @todo Implement style
 * @todo Implement dict
 */
export const DropDetails = ({
    className,
    variant,
    size,
    style,
    data,
    config = defaultConfig,
    dict
}: DropDetailsProps) => {

    const classes = useStyles();

    const [isSnackbarOpen, setSnackbarOpen] = useState(false);

    return (
        <div>
            <Typography variant="h2" style={{ fontSize: "36px", fontWeight: "bold" }} component="div" gutterBottom>{data.template.deserialized.name}</Typography>
            <div className={classes.infoContainer}>
                <div className={classes.coreInfo}>
                    <Tag data={{icon:PersonOutlinedIcon, iconTitle:"Author", label:data.template.deserialized.artist}} variant="light" size="lg" config={{custom: {hasPadding: false}}}/>
                    <Tag data={{icon:CollectionsOutlinedIcon, iconTitle:"Collection", label:data.collection.deserialized.name}} variant="light" size="lg" config={{custom: {hasPadding: false}}}/>
                    <Tag data={{icon:Filter1Icon, iconTitle:"Mint", label: `${data.template.issued_supply} of ${data.template.max_supply}`}} variant="light" size="lg" config={{custom: {hasPadding: false}}}/>
                    <Button startIcon={<LanguageIcon />} label="Website" variant="text" target="_blank" href={`${COLLECTION_SOURCE}${data.collection_name}`} />
                    {config.showViewData ?
                        <Button startIcon={<DataObjectIcon />} label="Metadata" variant="text" onClick={() => copyToClipboard(data, () => { setSnackbarOpen(true) })} />
                        : null
                    }
                </div>
                <Typography variant="body1" color="primary" className={classes.burnableTransferable}>
                    {data.template.transferable === 1 ? <CompareArrowsIcon/> : null}
                    {data.template.burnable === 1 ? <LocalFireDepartmentIcon/> : null}
                </Typography>
            </div>
            <Typography variant="body1" color="gray">{data.template.deserialized.about}</Typography>
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