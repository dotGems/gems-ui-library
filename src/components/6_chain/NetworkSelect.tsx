import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useContext } from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { NetworkModel } from '../../models/Network.model';
import DotGemsContext from '../1_core/DotGemsContext';
import { SUPPORTED_NETWORK_KEYS } from '../../data/constants/networks/networks';

export interface NetworkSelectProps extends StandardModel {
    data?: {
        selectedNetwork?: SUPPORTED_NETWORK_KEYS,
    },
    config?: {
        onNetworkChange?: Function,
    }
}

const useStyles = makeStyles((theme) => ({
    networkSelect: {
        paddingRight: "0 !important",
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
        paddingLeft: "0 !important",
    },
    networkOption: {
        textAlign: "center"
    },
}));

/**
 * Displays a simple dropdown allowing users to select
 * their network (chain).
 */
export const NetworkSelect = ({
    config,
    data = {},
}: NetworkSelectProps) => {

    const classes = useStyles();
    const dotGemsCtx = useContext(DotGemsContext);

    return (
        <Select
            variant='filled'
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data.selectedNetwork}
            label="Age"
            className={classes.networkSelect}
            onChange={config ? config.onNetworkChange ? config.onNetworkChange : () => {}: () => {} }
        >
            {dotGemsCtx.config.chain.supported_networks.map((network: NetworkModel) => {
                return <MenuItem value={network.blockchain}>
                    <img src={network.icon} height={"16px"} className={classes.networkOption} style={{ display: "inline-block" }} />
                    {/* <div style={{ display: "inline-block" }}>{network.blockchain.toUpperCase()}</div> */}
                </MenuItem>
            })}
        </Select>
    );
};