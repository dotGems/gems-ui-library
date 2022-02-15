
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Backdrop,
    Badge,
    Button,
    Chip,
    FormControl,
    LinearProgress,
    Link,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Select,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import {
    AccountBalanceWallet as AccountBalanceWalletIcon,
    CompareArrows as CompareArrowsIcon,
    Settings as SettingsIcon,
    ExitToApp as ExitToAppIcon,
    Inventory as InventoryIcon,
    MergeType as MergeTypeIcon,
    CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

import { Avatar } from "../1_core/Avatar";
import { Card } from "../1_core/Card";
import DotGemsContext from '../1_core/DotGemsContext';
import { NetworkModel } from '../../models/Network.model';
import { WalletButtonModel, WalletModel } from '../../models/Wallet.model';
import { StandardModel, StandardSize } from '../../models/Standard.model';
import { NETWORK_SUPPORTED_WALLETS, SUPPORTED_NETWORK_KEYS } from '../../data/constants/networks/networks';
import { WALLET_BUTTONS } from '../../data/constants/wallets';

export interface WalletConnectProps extends StandardModel { }

const useStyles = makeStyles({
    walletConnectContainer: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    networkItem: {
        justifyContent: "center",
    },
    mrsm: {
        marginRight: "8px"
    },
    connectText: {
        display: "inline-block"
    },
    networksContainer: {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap"
    },
    sqButton: {
        padding: "16px",
        marginRight: "16px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    cardFooter: {
        borderTop: "1px solid lightgray",
        margin: "0 -16px -16px -16px",
        padding: "8px",
        display: "flex",
        justifyContent: "flex-end"
    },
    walletsVSpacing: {
        margin: "4px 0"
    },
    infoMenuHeaderContainer: {
        padding: "8px 16px 16px 16px",
        minWidth: "300px"
    },
    headerLineContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    dangerMenuItem: {
        color: "#f44336"
    }
});

/**
 * Displays a modal to allow users to connect their
 * compatible wallet.
 */
export const WalletConnect = ({ }: WalletConnectProps) => {

    const classes = useStyles();

    const dotGemsCtx = useContext(DotGemsContext);
    const [isConnectWalletOpen, setIsConnectWalletOpen] = useState(false);
    const [menuAnchorEl, setmenuAnchorEl] = useState<EventTarget & HTMLElement | null>(null);
    const [isWalletInfoOpen, setIsWalletInfoOpen] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState<SUPPORTED_NETWORK_KEYS>(SUPPORTED_NETWORK_KEYS.eos); // TODO configurable
    const [walletData, setWalletData] = useState<WalletModel | undefined>(undefined);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPresses)
        return () => {
            document.removeEventListener("keydown", handleKeyPresses);
        }
    }, []);

    const handleKeyPresses = useCallback((event) => {
        if (event) {
            const ESCAPE = 27;
            let key = event.keyCode;
            if (key === ESCAPE) {
                setIsConnectWalletOpen(false);
                setIsWalletInfoOpen(false);
            }
        }
    }, []);

    const handleWalletButtonClick = (e: React.MouseEvent<HTMLElement>) => {
        if (walletData === undefined) {
            setIsConnectWalletOpen(true)
        } else {
            setIsWalletInfoOpen(true);
            setmenuAnchorEl(e.currentTarget);
        }
    }

    const handleNetworkSelectEvent = (event: SelectChangeEvent) => {
        setSelectedNetwork(event.target.value as SUPPORTED_NETWORK_KEYS);
    }
    const handleNetworkSelect = (network: SUPPORTED_NETWORK_KEYS) => {
        setSelectedNetwork(network);
    }

    const connectMockWallet = () => {
        setIsConnectWalletOpen(false);
        setWalletData({
            eosn_id: "4242214.eosn",
            linkedAccount: "d2a2h2m2e2r2",
            pfp: "/img/avatar/person_2.jpg",
            status: "Not connected",
            visible: false,
            // balance: "0.4562 EOS",
            currencies: [
                {
                    name: "EOS",
                    amount: "184.1029",
                    resources: {
                        ram: {
                            cur: 37,
                            max: 100
                        },
                        cpu: {
                            cur: 25,
                            max: 100
                        },
                        net: {
                            cur: 80,
                            max: 100
                        }
                    }
                }
            ]
        })
    }

    return (<>
        {/*============================= BUTTONS ========================== */}
        <FormControl>
            <div className={classes.walletConnectContainer}>
                <Select
                    variant='filled'
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedNetwork}
                    onChange={handleNetworkSelectEvent}
                >
                    {dotGemsCtx.config.chain.supported_networks.map((network: NetworkModel) => {
                        return <MenuItem value={network.blockchain} className={classes.networkItem}>
                            <img src={network.icon} height={"18px"} style={{ display: "inline-block" }} />
                        </MenuItem>
                    })}
                </Select>
                <Button onClick={handleWalletButtonClick}>
                    <AccountBalanceWalletIcon className={classes.mrsm} /><Typography className={classes.connectText} variant="body1">{walletData ? walletData.linkedAccount : "Connect Wallet"}</Typography>
                </Button>
                <Button>
                    <SettingsIcon />
                </Button>
            </div>
        </FormControl>
        {/*======================= WALLET CONNECT MENU ==================== */}
        <Backdrop open={isConnectWalletOpen}>
            <Card style={{ maxWidth: "435px" }}>
                <Typography variant="h4" gutterBottom>Connect your wallet</Typography>
                <div style={{ padding: "16px 0" }}>
                    <Typography variant="h6" gutterBottom><Chip label="1" className={classes.mrsm} />Select Your Network</Typography>
                    <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
                        Please select the Network you wish to use;
                    </Typography>
                    <div className={classes.networksContainer}>
                        {dotGemsCtx.config.chain.supported_networks.map((network: NetworkModel) => {
                            return <Button
                                className={classes.sqButton}
                                onClick={() => handleNetworkSelect(network.blockchain)}>
                                <Badge
                                    invisible={selectedNetwork.indexOf(network.blockchain) === -1}
                                    overlap='circular'
                                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                    badgeContent={<CheckCircleIcon />}
                                >
                                    <img src={network.icon} style={{ width: "41px" }} />
                                </Badge>
                                <Typography variant="caption" style={{ fontWeight: "bold", fontSize: "10px" }}>{network.blockchain}</Typography>
                            </Button>
                        })}
                    </div>
                </div>
                <div style={{ padding: "16px 0" }}>
                    <Typography variant="h6" gutterBottom><Chip label="2" className={classes.mrsm} />Select &amp; Link Your Wallet</Typography>
                    <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
                        Please link your supported {selectedNetwork?.toUpperCase()} wallet;
                    </Typography>
                    <div className={classes.networksContainer}>
                        {WALLET_BUTTONS.map((wallet: WalletButtonModel) => {
                            return <div className={classes.walletsVSpacing}>
                                <Button
                                    disabled={selectedNetwork === undefined || !NETWORK_SUPPORTED_WALLETS[selectedNetwork].includes(wallet.id)}
                                    className={classes.sqButton}
                                    onClick={connectMockWallet}
                                >
                                    <div style={{ width: "60px", margin: "auto" }}>
                                        <img src={wallet.icon} className={classes.mrsm} />
                                    </div>
                                    <Typography variant="caption" style={{ fontWeight: "bold", fontSize: "10px" }}>{wallet.name}</Typography>
                                </Button>
                            </div>
                        })}
                        {/* {selectedNetwork ? dotGemsCtx?.config?.chain?.network_supported_wallets[typeof selectedNetwork === "string" ? selectedNetwork : "eos"].map((wallet: WalletButtonModel) => {

                        }) : null} */}
                    </div>
                </div>
                <div className={classes.cardFooter}>
                    <Button onClick={() => setIsConnectWalletOpen(false)}>
                        Cancel
                    </Button>
                </div>
            </Card>
        </Backdrop>
        {/*====================== CONNECTED WALLET MENU =================== */}
        {
            walletData && selectedNetwork ? <Menu
                id="wallet-info-menu"
                anchorEl={menuAnchorEl}
                open={isWalletInfoOpen}
                onClose={() => setIsWalletInfoOpen(false)}
            >
                <div className={classes.infoMenuHeaderContainer}>
                    <Avatar
                        className={classes.headerLineContainer}
                        style={{ paddingBottom: "16px" }}
                        size={StandardSize.lg}
                        data={{
                            img: walletData.pfp,
                            label: walletData.linkedAccount
                        }}
                    />
                    <div className={classes.headerLineContainer}><Typography>RAM</Typography><LinearProgress style={{ margin: "0 8px", width: "100%" }} color="info" variant="determinate" value={40} /></div>
                    <div className={classes.headerLineContainer}><Typography>CPU</Typography><LinearProgress style={{ margin: "0 8px", width: "100%" }} color="warning" variant="determinate" value={30} /></div>
                    <div className={classes.headerLineContainer}><Typography>NET</Typography><LinearProgress style={{ margin: "0 8px", width: "100%" }} color="success" variant="determinate" value={80} /></div>
                </div>
                <MenuList>
                    <MenuItem component={Link} target="_blank" rel="noreferrer" href={`${dotGemsCtx.config.chain.supported_networks.filter((elem) => elem.blockchain.indexOf(selectedNetwork) !== -1 && elem.blockchain.length === selectedNetwork.length)[0].explorer_url}${walletData.linkedAccount}#nft`}>
                        <ListItemIcon>
                            <InventoryIcon />
                        </ListItemIcon>
                        <ListItemText>INVENTORY</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} target="_blank" rel="noreferrer" href="https://blend.dotgems.io/eos">
                        <ListItemIcon>
                            <MergeTypeIcon />
                        </ListItemIcon>
                        <ListItemText>BLEND NFTS</ListItemText>
                    </MenuItem>
                    <MenuItem component={Link} target="_blank" rel="noreferrer" href={`${dotGemsCtx.config.chain.supported_networks.filter((elem) => elem.blockchain.indexOf(selectedNetwork) !== -1 && elem.blockchain.length === selectedNetwork.length)[0].explorer_url}${walletData.linkedAccount}`}>
                        <ListItemIcon>
                            <CompareArrowsIcon />
                        </ListItemIcon>
                        <ListItemText>TRANSACTIONS HISTORY</ListItemText>
                    </MenuItem>
                    <MenuItem className={classes.dangerMenuItem} onClick={() => {
                        setWalletData(undefined);
                        setIsWalletInfoOpen(false);
                        // setSelectedNetwork(undefined);
                    }}>
                        <ListItemIcon className={classes.dangerMenuItem}>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText>DISCONNECT</ListItemText>
                    </MenuItem>
                </MenuList>
            </Menu> : null
        }
    </>
    );
};