import React from 'react';
import { makeStyles } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { Button, Grid, Typography } from '@mui/material';

export interface FooterProps extends StandardModel {
  data: {
    logo: {
      src: string,
      alt: string
    },
  }
}

const useStyles = makeStyles({
  footer: {
    borderTop: "4px solid #F3F3F3",
    padding: "48px",
  },
  footerLogo: {
    width: "200px",
    display: "block",
    filter: "grayscale(100%) brightness(0%)",
  },
  columnList: {
    listStyle: "none",
    paddingLeft: 0,
  },
  footerColumnLink: {
    textDecoration: "none",
    color: "#6B6B6B",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "8px 0",
    '&:hover': {
      textDecoration: "underline",
    }
  },
  footerRowImg: {
    width: "24px",
    marginRight: "12px"
  },
  footerCopyrights: {
    width: "100%",
    paddingTop: "24px",
    color: "#C8C8C8",
    textAlign: "center"
  },
});

/**
 * Displays the checkout screen.
 */
export const Footer = ({
  data
}: FooterProps) => {

  const classes = useStyles();

  const socialLinks = [
    {
      label: "Discord",
      logo: "/img/footer/discord.svg",
      link: "https://discord.com/invite/XhAKScPbZj",
    },
    {
      label: "Instagram",
      logo: "/img/footer/instagram.svg",
      link: "https://www.instagram.com/dotgems/",
    },
    {
      label: "Telegram",
      logo: "/img/footer/telegram.svg",
      link: "https://t.me/dotGems",
    },
    {
      label: "Twitch",
      logo: "/img/footer/twitch.svg",
      link: "https://www.twitch.tv/dotgems",
    },
    {
      label: "Twitter",
      logo: "/img/footer/twitter.svg",
      link: "https://twitter.com/dotgems_",
    },
    {
      label: "Youtube",
      logo: "/img/footer/youtube.svg",
      link: "https://www.youtube.com/channel/UCokjLRgLgerCf5ijGYhp28w",
    },
  ];

  const otherLinks = [
    {
      label: "Pomelo",
      logo: "/img/footer/pomelo.svg",
      link: "https://www.pomelo.io",
    },
    {
      label: "Blend",
      logo: "/img/footer/blend.svg",
      link: "https://blend.dotgems.io/",
    },
  ];

  const renderCopyrightYear = () => {
    const curYear = new Date().getFullYear();
    const startDate = 2022;
    let copyYear = startDate.toString();
    if(curYear > startDate) {
      copyYear += ` - ${curYear}`;
    }
    return copyYear;
  }

  return (
    <footer className={classes.footer}>
      <Grid container spacing={{xs: 6, md: 16}}>
        <Grid item xs={12} md={3}>
          <img className={classes.footerLogo}src={data.logo.src} alt={data.logo.alt}/>
          <Button style={{marginTop: "48px"}} variant="contained">Apply as an artist</Button>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='body1' style={{fontWeight: "bold"}}>Community</Typography>
          <ul className={classes.columnList}>
            {socialLinks.map((socialLink) => <li>
              <a className={classes.footerColumnLink} href={socialLink.link} target="_blank" rel="noreferrer">
                <img className={classes.footerRowImg} src={socialLink.logo}/>
                <Typography style={{display: "inline-block"}} variant='body1'>{socialLink.label}</Typography>
              </a>
            </li>)}
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography variant='body1' style={{fontWeight: "bold"}}>Other</Typography>
        <ul className={classes.columnList}>
            {otherLinks.map((otherLink) => <li>
              <a className={classes.footerColumnLink} href={otherLink.link} target="_blank" rel="noreferrer">
                <img className={classes.footerRowImg} src={otherLink.logo}/>
                <Typography style={{display: "inline-block"}} variant='body1'>{otherLink.label}</Typography>
              </a>
            </li>)}
          </ul>
        </Grid>
      </Grid>
      <Typography
        variant='caption'
        className={classes.footerCopyrights}
      >
        &copy;&nbsp;{renderCopyrightYear()}&nbsp;dotGems&nbsp;-&nbsp;All Rights Reserved.
      </Typography>
    </footer>
  );
};