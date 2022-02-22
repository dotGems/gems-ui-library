import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  notableDrop: {
    margin: "16px",
    display: "inline-block",
    backgroundColor: "#EEE",
    width: "100%",
    height: "200px",
    [theme.breakpoints.up('md')]: {
      width: "200px",
      height: "200px",
    }
  }
}));

export default function NotableDrops() {

const classes = useStyles();

  return (
    <>
      <Typography variant="h5" fontWeight={"bold"} textAlign="left" style={{marginTop: "32px"}}>Notable Drops</Typography>
      <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>
        <div className={classes.notableDrop}></div>
        <div className={classes.notableDrop}></div>
        <div className={classes.notableDrop}></div>
        <div className={classes.notableDrop}></div>
      </div>
    </>
  )
}
