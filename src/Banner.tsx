import React from 'react';
import MuiButton from '@mui/material/Button';
import MuiCard from '@mui/material/Button';
import MuiGrid from '@mui/material/Grid';
import MuiTypography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import { Theme, useMediaQuery } from '@mui/material';
// import GoldenPomelo from '../../assets/GoldenPomelo.png';

const useStyles = makeStyles((theme: Theme) => ({
    card: {

        padding: "16px",
        borderRadius: "25px",
        // background: "#011B4D",
        color: "#FFF",
        width: "750px",
        backgroundImage: "linear-gradient(140deg, #021b4d , #2435a9)",
        // [theme.breakpoints.down("xs")]: {
        //     display: "none"
        // }
    },
    cardMobile: {
        padding: "16px",
        borderRadius: "25px",
        // background: "#011B4D",
        color: "#FFF",
        // width: "700px",
        backgroundImage: "linear-gradient(140deg, #021b4d , #2435a9)",
        // [theme.breakpoints.up("sm")]: {
        //     display: "none",
        // }
    },
    grid: {

        padding: "0px 16px",
        display: "flex",
        margin: "auto",
        justifyContent: "left",
        flexDirection: "column",

    },
    cardImage: {
        // backgroundColor: "#FFF",
        borderRadius: "18px",
        objectFit: "cover",
        width: "100%",
    },
}));



export interface BannerProps {
    title?: string;
    subtitle?: string;
    ipfsImg?: string;
    buttonText?: string;
    buttonColor?: string;
    color?: string;
}

export const Banner = ({ title = "Golden Pomelo is here!", subtitle = "Blend 1 Pomelo Tree + 4 Juicy Pomelos, and receive a Golden Pomelo",
    ipfsImg = "QmSBHhXYRCmgnAiEGGxWpr3kNpsei9jj4PDaHcaoyw76Kp", buttonText = "Blend Yours Now" }) => {
    // QmSFuWQUw6duPgY4ctnpnBNrv1TtCCrhq5mxnFwBj9H69y
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)', { noSsr: true });

    return (
        <>
            {/* <MuiGrid container style={{ display: "flex", justifyContent: "center", padding: "8px" }}> */}
            {matches ?
                <MuiCard className={classes.card}>
                    <MuiGrid container direction="row">
                        <MuiGrid item xs={8} sm={8} className={classes.grid} direction="column">
                            <div style={{ padding: "0px 0px 16px 0px" }}>
                                {/* <Typography style={{ fontSize: "35px", textAlign: "left" }}>Golden Pomelo is here!</Typography> */}
                                <MuiTypography style={{ fontSize: "35px", textAlign: "left" }}>{title}</MuiTypography>
                                <MuiTypography style={{ fontSize: "20px", textAlign: "left", padding: "8px 0px 0px 0px" }}>{subtitle}</MuiTypography>
                                {/* <MuiTypography style={{ fontSize: "20px", textAlign: "left", padding: "0px 0px" }}> and receive a Golden Pomelo</MuiTypography> */}
                            </div>
                            <MuiButton style={{
                                backgroundColor: "#18AB6B",
                                color: "#FFF",
                                padding: "9px 55px 9px 55px", borderRadius: "25px", width: "max-content",
                            }}
                                onClick={() => window.open("https://blend.dotgems.io/eos")}
                            >Blend yours now</MuiButton>

                            {/* <Button style={{
                                backgroundColor: "#18AB6B",
                                color: "#FFF",
                                padding: "9px 55px 9px 55px", borderRadius: "25px", width: "max-content",
                            }}
                                onClick={() => window.open("https://blend.dotgems.io/eos")}
                            >Have a Sneak Peek</Button> */}

                            {/* </div> */}
                        </MuiGrid>
                        <MuiGrid item xs={4} sm={4} className={classes.grid}>
                            <img
                                className={classes.cardImage}
                                alt="golden-pomelo"
                                onError={(event: any) => event.target.src = `https://cloudflare-ipfs.com/ipfs/${ipfsImg}`}
                                src={`https://functions.eosn.io/v1/ipfs/${ipfsImg}?size=700`}
                            />
                        </MuiGrid>
                    </MuiGrid>
                </MuiCard>
                :
                <MuiCard className={classes.cardMobile}>
                    <MuiGrid container direction="column">
                        <MuiGrid item xs={12} className={classes.grid}>
                            <img
                                className={classes.cardImage}
                                alt="golden-pomelo"
                                onError={(event: any) => event.target.src = `https://cloudflare-ipfs.com/ipfs/${ipfsImg}`}
                                src={`https://functions.eosn.io/v1/ipfs/${ipfsImg}?size=700`}
                            />
                        </MuiGrid>
                        <MuiGrid item xs={12} className={classes.grid} direction="column">
                            {/* <div style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column" }}> */}
                            <div style={{ padding: "0px 0px 16px 0px" }}>
                                <MuiTypography style={{ fontSize: "30px", textAlign: "left" }}>{title}</MuiTypography>
                                <MuiTypography style={{ fontSize: "18px", textAlign: "left", padding: "8px 0px 0px 0px" }}>{subtitle}</MuiTypography>
                            </div>
                            <MuiButton style={{
                                backgroundColor: "#18AB6B",
                                color: "#FFF",
                                padding: "9px 55px 9px 55px", borderRadius: "25px",
                            }}
                                onClick={() => window.open("https://blend.dotgems.io/eos")}
                            >{buttonText}</MuiButton>
                        </MuiGrid>
                    </MuiGrid>
                </MuiCard>
            }
            {/* </MuiGrid> */}
        </>
    );
};






// interface Props extends HTMLAttributes<HTMLButtonElement> {
//     children: ReactNode;
//     variant: 'text' | 'outlined' | 'contained';

// }

// const useStyles = makeStyles({
//     rounded: {
//         borderRadius: "25px"
//     },
//     normal: {
//         borderRadius: "25px"
//     }
// });

// export const Banner = ({ children, ...props }: Props) => {
//     const classes = useStyles();
//     return (
//         <MuiButton className={classes.rounded}>
//             {children}
//         </MuiButton >
//     )
// }