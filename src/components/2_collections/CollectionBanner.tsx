import React from 'react';
import { makeStyles } from '@mui/styles';
import MuiGrid from '@mui/material/Grid';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import DataObjectIcon from '@mui/icons-material/DataObject';
import MuiTypography from '@mui/material/Typography';

import { StandardProps } from "../../interfaces/IStandardProps";
import { IPFS_SOURCE } from '../../constants/urls';
import { COLLECTION_SOURCE } from './constants/urls';
import { Button } from '../1_core/Button';

export interface CollectionBannerProps extends StandardProps {
    data: {
        collection_name: string;
        author: string;
        img: string;
        market_fee: string;
        desc: string;
        name: string;
    },
    config: {
        showViewData?: Boolean
    }
}

const useStyles = makeStyles({
    collectionBanner: {
        backgroundColor: "white"
    },
    collectionInfo: {
        padding: "24px"
    },
    collectionImg: {
        width: "100%"
    },
    collectionDescription: {
        marginTop: "24px"
    }
});

/**
 * Displays the main information of a collection as
 * a banner.
 */
export const CollectionBanner = ({
    className,
    variant,
    size,
    style,
    data,
    config
}: CollectionBannerProps) => {

    const classes = useStyles();

    return (
        <div className={classes.collectionBanner} style={style}>
            <MuiGrid container direction="row">
                <MuiGrid item xs={12} md={3} direction="column">
                    <img src={`${IPFS_SOURCE}${data.img}`} className={classes.collectionImg} />
                </MuiGrid>
                <MuiGrid item xs={12} md={9} className={classes.collectionInfo} direction="column">
                    <MuiTypography variant="h2" style={{ fontSize: "36px", fontWeight: "bold" }} component="div" gutterBottom><CollectionsOutlinedIcon />&nbsp;{data.name}</MuiTypography>
                    <MuiTypography variant="body1" gutterBottom><div title="Author"><PersonOutlinedIcon /></div>&nbsp;{data.author}</MuiTypography>
                    <Button startIcon={<LanguageIcon />} label="Website" variant="text" />
                    <Button startIcon={<DataObjectIcon />} label="Metadata" variant="text" />
                    <div className={classes.collectionDescription}>
                        <MuiTypography variant="h3" style={{ fontSize: "24px", fontWeight: "bold" }} component="div" gutterBottom>About this Collection</MuiTypography>
                        <MuiTypography variant="body1" gutterBottom>{data.desc}</MuiTypography>
                    </div>
                    <MuiTypography variant="caption" gutterBottom>All transactions within this collection are subject to a&nbsp;<strong>{(parseFloat(data.market_fee)*100).toFixed(2)+"%"}&nbsp;fee</strong>&nbsp;to cover network costs.</MuiTypography>
                </MuiGrid>
            </MuiGrid>

            {variant}
            {size}
            {config.showViewData}
            {data.collection_name}
        </div>
    );
};