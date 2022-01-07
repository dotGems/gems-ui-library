
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Backdrop, Button, Link, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import {
    AccountBalanceWallet as AccountBalanceWalletIcon,
    AddCircle as AddCircleIcon
} from '@mui/icons-material';

import { Card } from "../1_core/Card";
import DotGemsContext from '../1_core/DotGemsContext';
import { NetworkModel } from '../../models/Network.model';
import { SUPPORTED_NETWORKS, SUPPORTED_WALLETS } from '../../data/constants/chain';
import { WalletButtonModel, WalletModel } from '../../models/Wallet.model';

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
    const [selectedNetwork, setSelectedNetwork] = useState<string | undefined>(undefined);
    const [walletConnectStep, setWalletConnectStep] = useState(0);
    const [walletData, setWalletData] = useState<WalletModel|undefined>(undefined);

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
            }
        }
    }, []);

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
            username: "Cryptominer400",
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
        <Button className={classes.walletConnectContainer} onClick={() => setIsConnectWalletOpen(true)}>
            <AccountBalanceWalletIcon className={classes.mrsm} /><Typography className={classes.connectText} variant="body1">{walletData ? walletData.username : "Connect"}</Typography>
        </Button>
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
                                Learn more about the different networks and how to purchase NFTs&nbsp;
                                <Link target="_blank" rel="noreferrer" href="https://example.com">here</Link>.
                            </Typography>
                            <div className={classes.networksContainer}>
                                {dotGemsCtx.config.chain.supportedNetworks.map((network: NetworkModel) => {
                                    return <Button
                                        className={classes.networkButton}
                                        onClick={() => handleNetworkSelect(network.name)}>
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
                        <StepContent >
                            <Typography variant="body1" style={{ color: "gray" }} gutterBottom>
                                Don't have a wallet ? Use the + to create one. Please link your supported {selectedNetwork?.toUpperCase()} wallet;
                            </Typography>
                            {selectedNetwork ? SUPPORTED_WALLETS[selectedNetwork].map((wallet: WalletButtonModel) => {
                                return <div className={classes.walletsVSpacing}>
                                    <Button
                                        style={{
                                            backgroundColor: wallet.bgColor,
                                            color: wallet.fgColor,
                                            width: "80%"
                                        }}
                                        onClick={connectMockWallet}
                                    >
                                        <img src={wallet.icon} className={classes.mrsm} />
                                        <Typography variant="body2" style={{fontWeight: "bold"}}>{wallet.name}</Typography>
                                    </Button>
                                    <Button style={{width: "20%"}} target="_blank" rel="noreferrer" href={wallet.url}><AddCircleIcon sx={{fontSize: "42px"}}/></Button>
                                </div>
                            }) : null}
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
    </>
    );
};