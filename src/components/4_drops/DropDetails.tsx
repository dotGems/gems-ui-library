import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { IconButton, Snackbar, Typography, Button } from '@mui/material';
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

import { Tag } from '../1_core/Tag';

import { COLLECTION_SOURCE } from '../../data/constants/urls';
import { LocalizedStandardModel, StandardSize } from "../../models/Standard.model";
import { DropModel } from '../../models/Drop.model';
import { copyToClipboard } from '../../common/data';
import { CoreVariant } from '../../models/StandardCore.model';

export interface DropDetailsProps extends LocalizedStandardModel {
    data: DropModel,
    config?: {
        showArtist?: boolean,
        showCollection?: boolean,
        showAbout?: boolean,
        showBurnableTransferable?: boolean,
        showViewData?: boolean
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
    root: {
        "@media (max-width: 600px)": {
            paddingTop: "16px"
        }
    },
    infoContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "top"
    },
    coreInfo: {
        margin: "0px",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column"
    },
    actionsContainer: {
        display: "flex",
        justifyContent: "flex-start"
    },
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
    // className,
    // variant,
    // size,
    // style,
    data,
    config = defaultConfig,
    // dict
}: DropDetailsProps) => {

    const classes = useStyles();

    const [isSnackbarOpen, setSnackbarOpen] = useState(false);

    return (
        <div className={classes.root}>
            <Typography
                variant="h2"
                style={{ textAlign: "left", fontSize: "36px", fontWeight: "bold" }}
                component="div"
                gutterBottom>
                {data.immutable_serialized_data.name}
            </Typography>
            <div className={classes.infoContainer}>
                <div className={classes.coreInfo}>
                    {/* TODO: Add enable/disable attributes for each UI item */}
                    {/* {config.showArtist ? <Tag data={{ icon: PersonOutlinedIcon, iconTitle: "Author", label: data.template.deserialized.artist }} variant={CoreVariant.light} size={StandardSize.lg} config={{ custom: { hasPadding: false } }} /> : null} */}
                    {config.showCollection ? <Tag data={{ icon: CollectionsOutlinedIcon, iconTitle: "Collection", label: data.immutable_serialized_data.name }} variant={CoreVariant.light} size={StandardSize.lg} config={{ custom: { hasPadding: false } }} /> : null}
                    <Tag data={{ icon: Filter1Icon, iconTitle: "Mint", label: `${data.issued_supply} of ${data.max_supply}` }} variant={CoreVariant.light} size={StandardSize.lg} config={{ custom: { hasPadding: false } }} />
                    <div className={classes.actionsContainer}>
                        <Button
                            startIcon={<LanguageIcon />}
                            variant="text"
                            target="_blank"
                            style={{ textAlign: "left" }}
                            href={`${COLLECTION_SOURCE}${data.collection_name}`}>
                            Website
                        </Button>
                        {/* {config.showViewData ?
                        <Button
                        startIcon={<DataObjectIcon />}
                        variant="text"
                        style={{textAlign: "left"}}
                        onClick={() => copyToClipboard(data, () => { setSnackbarOpen(true) })}>
                            Metadata
                        </Button>
                        : null} */}
                    </div>
                </div>
                {config.showBurnableTransferable ? <Typography variant="body1" color="primary" className={classes.burnableTransferable}>
                    {data.transferable === true ? <CompareArrowsIcon /> : null}
                    {data.burnable === true ? <LocalFireDepartmentIcon /> : null}
                </Typography> : null}
            </div>
            {config.showAbout ? <Typography variant="body1" color="gray" textAlign="left">{data.immutable_serialized_data.context}</Typography> : null}
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