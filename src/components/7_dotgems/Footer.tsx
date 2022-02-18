import React from 'react';
import { makeStyles, useTheme } from '@mui/styles';

import { StandardModel } from "../../models/Standard.model";
import { Button, Grid, Typography } from '@mui/material';

export interface FooterProps extends StandardModel {
  data: {
    company: string,
    releaseYear: string,
    logo: {
      src: string,
      alt: string
    },
    cta?: {
      label: string,
      link: string
    },
    linkColumns?: [
      {
        title: string,
        links: Array<{
          label: string,
          logo?: string,
          link: string,
        }>
      }
    ]
  }
}

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    borderTop: `4px solid ${theme.palette.grey[50]}`,
    padding: "48px",
  },
  footerLogo: {
    width: "200px",
    display: "block",
    margin: "auto",
    filter: "grayscale(100%) brightness(0%)",
  },
  columnList: {
    listStyle: "none",
    textAlign: "left",
    paddingLeft: 0,
  },
  footerColumnLink: {
    textDecoration: "none",
    color: theme.palette.grey[600],
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
    paddingBottom: "100px",
    color: theme.palette.grey[500],
    textAlign: "center"
  },
  bufferGrid: {
    [theme.breakpoints.down('md')]: {
      display: "none"
    },
  }
}));

/**
 * Displays the checkout screen.
 */
export const Footer = ({
  data
}: FooterProps) => {

  const theme = useTheme();
  const classes = useStyles(theme);

  const renderCopyrightYear = (releaseYear: string) => {
    const curYear = new Date().getFullYear();
    let copyYear = releaseYear;
    if (curYear > parseInt(releaseYear)) {
      copyYear += ` - ${curYear}`;
    }
    return copyYear;
  }

  /**
   * Renders a buffer grid to prevent links
   * from going under the branding column.
   * @param index listColumn index
   * @returns Grid buffer or null (if not required)
   */
  const renderBufferGrid = (index: number) => {
    if (index > 0 && index % 3 === 0) {
      return (<Grid item xs={12} md={3} className={classes.bufferGrid}></Grid>);
    }
    return null;
  }

  return (
    <footer className={classes.footer}>
      <Grid container spacing={{ xs: 6, md: 16 }}>
        <Grid item xs={12} md={3}>
          <img className={classes.footerLogo} src={data.logo.src} alt={data.logo.alt} />
          {data.cta ?
            <Button
              style={{ marginTop: "48px" }}
              variant="contained"
              href={data.cta.link}
              target="_blank"
              rel="noreferrer">
              {data.cta.label}
            </Button>
            : null}
        </Grid>
        {data.linkColumns ? data.linkColumns.map((linkColumn, index) => (
          <>
            {renderBufferGrid(index)}
            <Grid item xs={12} md={3}>
              <Typography variant='body1' style={{ textAlign: "left", fontWeight: "bold" }}>{linkColumn.title}</Typography>
              <ul className={classes.columnList}>
                {linkColumn.links.map((link) => <li>
                  <a className={classes.footerColumnLink} href={link.link} target="_blank" rel="noreferrer">
                    <img className={classes.footerRowImg} src={link.logo} />
                    <Typography style={{ display: "inline-block" }} variant='body1'>{link.label}</Typography>
                  </a>
                </li>)}
              </ul>
            </Grid>
          </>))
          : null}
      </Grid>
      <Typography
        variant='caption'
        className={classes.footerCopyrights}
      >
        &copy;&nbsp;{renderCopyrightYear(data.releaseYear)}&nbsp;{data.company}&nbsp;-&nbsp;All Rights Reserved.
      </Typography>
    </footer>
  );
};