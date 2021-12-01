import { Typography } from '@mui/material';
import React from 'react';

export const Welcome = () => {
  return <div style={{padding: "2em"}}>
      <Typography variant="h1" style={{fontSize: "2em"}}>Welcome to the dotGems UI Library !</Typography>
      <img src="/img/welcome.png"/>
      <Typography variant="body1">
        <p>The goal of this project is to provide high quality, flexible components to enable developers to build their NFT platforms faster. dotGems is an NFT platform developed by EOS Nation, therefore, the initial focus will be to provide those tools for EOS-based NFT projects.</p>
      </Typography>
    </div>;
};
