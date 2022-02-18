import React from 'react';
import { Typography } from '@mui/material';

import HomeHeader from '../components/HomeHeader';

export default function Home() {
  return (
    <div style={{padding: "24px"}}>
      <HomeHeader/>
      <Typography variant="h5" fontWeight={"bold"} textAlign="left" style={{marginTop: "32px"}}>Notable Drops</Typography>
      <div style={{display: "flex", justifyContent: "flex-start", flexWrap: "wrap"}}>
      <div style={{margin: "16px", display: "inline-block", backgroundColor: "#EEE", width: "200px", height: "200px"}}></div>
      <div style={{margin: "16px", display: "inline-block", backgroundColor: "#EEE", width: "200px", height: "200px"}}></div>
      <div style={{margin: "16px", display: "inline-block", backgroundColor: "#EEE", width: "200px", height: "200px"}}></div>
      <div style={{margin: "16px", display: "inline-block", backgroundColor: "#EEE", width: "200px", height: "200px"}}></div>
      </div>
    </div>
  )
}
