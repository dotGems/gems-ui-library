import React, { HTMLAttributes, ReactNode } from 'react';
import { Card as MuiCard, CardActionArea as MuiCardActionArea, CardContent as MuiCardContent, Typography as MuiTypography } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: 'text' | 'outlined' | 'contained';
    imgUrl?: string;
    imgPadding?: string;
    ipfsImg?: string;
    title?: string;
    titleAlign?: 'center' | 'left' | 'right';
    width?: string;
    height?: string;
}

const useStyles = makeStyles({
    rounded: {
        borderRadius: "25px"
    },
    normal: {
        borderRadius: "25px"
    },
    cardImage: {
        width: "100%", height: "300px", objectFit: "cover"
    },
});

export const Card = ({ children, title = "Pomelo Tree",
    imgUrl = "",
    width = "350px",
    height = "370px",
    titleAlign = 'center',
    ipfsImg = "QmeFach1u8wQQiggRi8CaBLZk1AZUtEfDiKMAVgmSysSsi",
    ...props }: Props) => {
    const classes = useStyles();
    return (
        <MuiCard style={{ borderRadius: "25px", height: height, width: width }} key={title}>
            <MuiCardActionArea>
                <img className={classes.cardImage} alt={title}
                    onError={(event: any) => event.target.src = `https://cloudflare-ipfs.com/ipfs/${ipfsImg}`}
                    src={`https://functions.eosn.io/v1/ipfs/${ipfsImg}?size=700`}
                />
                <MuiCardContent>
                    <MuiTypography style={{ fontSize: "20px", textAlign: titleAlign }}>{title}</MuiTypography>
                </MuiCardContent>
            </MuiCardActionArea>
        </MuiCard>
    )
}