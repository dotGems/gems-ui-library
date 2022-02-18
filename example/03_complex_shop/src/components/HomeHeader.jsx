import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';

export default function HomeHeader() {
  return (
    <div>
      <div style={{zIndex: "-1", position: "absolute", top: 0, left: 0, right: 0, height: "690px", backgroundImage: 'url("/img/home_bg.png")', backgroundSize: "contain", backgroundRepeat: "no-repeat", marginTop: "-40px", paddingTop: "60px"}}></div>
      <Typography variant="h3" component="h1" textAlign="left" style={{ fontWeight:"bold", maxWidth: "600px" }}>Welcome to the .gems Marketplace</Typography>
      <Typography variant="h5" component="h2" textAlign="left" style={{maxWidth: "450px"}}>A place to discover <span style={{fontWeight: "bold", color: "#42A5F5"}}>curated NFTs</span> and collectivles on WAX and EOS.</Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <div style={{width: "300px"}}>
            <Button
              href="https://forms.monday.com/forms/4f7995d7277d876cdea679eba924d56a?r=use1"
              target="_blank"
              rel="noreferrer"
              variant="contained"
              fullWidth
              style={{margin: "32px 0 16px 0"}}>
                Apply as an artist
              </Button>
            <Button variant="outlined" fullWidth>Learn more about us</Button>
          <img style={{marginTop: "32px"}} src="/img/stats.svg" alt="dotGems Marketplace statistics"/>
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box display={{ xs: "none", md: "block" }}>
            <img style={{marginTop: "-72px", width: "125%"}} src="/img/highlight.png" alt="dotGems Highlighted NFTs"/>
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}
