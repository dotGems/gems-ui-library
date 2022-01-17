
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
    Backdrop,
    Button,
    LinearProgress,
    Link,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Step,
    StepContent,
    StepLabel,
    Stepper,
    Typography
} from "@mui/material";
import {
    AccountBalanceWallet as AccountBalanceWalletIcon,
    CompareArrows as CompareArrowsIcon,
    ExitToApp as ExitToAppIcon,
    Inventory as InventoryIcon,
    MergeType as MergeTypeIcon
} from '@mui/icons-material';

import { Avatar } from "../1_core/Avatar";
import { Card } from "../1_core/Card";
import DotGemsContext from '../1_core/DotGemsContext';
import { NetworkModel } from '../../models/Network.model';
import { WalletButtonModel, WalletModel } from '../../models/Wallet.model';
import { StandardModel, StandardSize } from '../../models/Standard.model';

export interface WalletConnectProps extends StandardModel { }

const useStyles = makeStyles({
    walletConnectContainer: {
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    mrsm: {
        marginRight: "8px"
    },
    connectText: {
        display: "inline-block"
    },
    networksContainer: {
        display: "flex",
        justifyContent: "flex-start"
    },
    networkButton: {
        marginRight: "16px",
        height: "64px"
    },
    cardFooter: {
        borderTop: "1px solid lightgray",
        margin: "0 -16px -16px -16px",
        padding: "8px",
        display: "flex",
        justifyContent: "space-between"
    },
    cardFooterActionsStart: {
        display: "flex",
        justifyContent: "flex-start"
    },
    cardFooterActionsEnd: {
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
    const [menuAnchorEl, setmenuAnchorEl] = useState(null);
    const [isWalletInfoOpen, setIsWalletInfoOpen] = useState(false);
    const [selectedNetwork, setSelectedNetwork] = useState<string | undefined>(undefined);
    const [walletConnectStep, setWalletConnectStep] = useState(0);
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

    const handleWalletButtonClick = (e) => {
        if (walletData === undefined) {
            setIsConnectWalletOpen(true)
        } else {
            setIsWalletInfoOpen(true);
            setmenuAnchorEl(e.currentTarget);
        }
    }

    const handleNetworkSelect = (network: string) => {
        setSelectedNetwork(network);
        setWalletConnectStep(1);
    }

    const handleBackPressed = () => {
        let newStep = Math.max(0, walletConnectStep - 1);
        setWalletConnectStep(newStep);
        if (newStep === 0) {
            setSelectedNetwork(undefined);
        }
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
        {/*====================== WALLET CONNECT BUTTON =================== */}
        <Button className={classes.walletConnectContainer} onClick={handleWalletButtonClick}>
            <AccountBalanceWalletIcon className={classes.mrsm} /><Typography className={classes.connectText} variant="body1">{walletData ? walletData.linkedAccount : "Connect"}</Typography>
        </Button>
        {/*======================= WALLET CONNECT MENU ==================== */}
        <Backdrop open={isConnectWalletOpen}>
            <Card>
                <Typography variant="h4" gutterBottom>Connect your wallet</Typography>
                <Stepper orientation="vertical" activeStep={walletConnectStep}>
                    <Step>
                        <StepLabel>
                            <Typography variant="body1" style={{ fontWeight: "bolder" }}>{selectedNetwork ? `Using the ${selectedNetwork.toUpperCase()} Network` : "Select Your Network"}</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
                                Please select the Network you wish to use;
                            </Typography>
                            <div className={classes.networksContainer}>
                                {dotGemsCtx.config.chain.supported_networks.map((network: NetworkModel) => {
                                    return <Button
                                        className={classes.networkButton}
                                        onClick={() => handleNetworkSelect(network.blockchain)}>
                                        <img src={network.icon} />
                                    </Button>
                                })}
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>
                            <Typography variant="body1" style={{ fontWeight: "bolder" }}>Select &amp; Link Your Wallet</Typography>
                        </StepLabel>
                        <StepContent>
                            <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
                                Please link your supported {selectedNetwork?.toUpperCase()} wallet;
                            </Typography>
                            {console.log(dotGemsCtx.config.chain.network_supported_wallets, dotGemsCtx.config.chain.network_supported_wallets[selectedNetwork])}
                            {selectedNetwork ? dotGemsCtx.config.chain.network_supported_wallets[selectedNetwork].map((wallet: WalletButtonModel) => {
                                return <div className={classes.walletsVSpacing}>
                                    <Button
                                        style={{
                                            backgroundColor: wallet.bgColor,
                                            color: wallet.fgColor,
                                            width: "100%",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "center"
                                        }}
                                        onClick={connectMockWallet}
                                    >
                                        <div style={{ width: "60px", display: "flex", alignItems: "center" }}>
                                            <img src={wallet.icon} className={classes.mrsm} />
                                        </div>
                                        <Typography variant="body2" style={{ fontWeight: "bold" }}>{wallet.name}</Typography>
                                    </Button>
                                </div>
                            }) : null }
                        </StepContent>
                    </Step>
                </Stepper>
                <div className={classes.cardFooter}>
                    <div className={classes.cardFooterActionsStart}>
                        {walletConnectStep > 0 ? <Button onClick={handleBackPressed}>Back</Button> : null}
                    </div>
                    <div className={classes.cardFooterActionsEnd}>
                        <Button onClick={() => setIsConnectWalletOpen(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </Card>
        </Backdrop>
        {/*====================== CONNECTED WALLET MENU =================== */}
        {walletData && selectedNetwork ? <Menu
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
                setWalletConnectStep(0);
                setSelectedNetwork(undefined);
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