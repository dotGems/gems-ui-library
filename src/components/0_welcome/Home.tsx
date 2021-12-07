import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
  codeSnippet: {
    backgroundColor: "#EEE",
    padding: "0.25em 0.5em",
    borderRadius: "3px"
  }
});

export const Home = () => {

  const classes = useStyles();

  return <div style={{padding: "2em"}}>
      <Typography variant="h1" style={{fontSize: "2em"}}>Welcome to the dotGems UI Library !</Typography>
      <img src="/img/welcome/dotGems.png"/>
      <Typography variant="body1">
        <p>The goal of this project is to provide high quality, flexible components to enable developers to build their NFT platforms faster. dotGems is an NFT platform developed by EOS Nation, therefore, the initial focus will be to provide those tools for EOS-based NFT projects.</p>
        <Typography variant="h2" style={{fontSize: "1.5em"}}>Getting Started</Typography>
        <ol>
          <li>Run <code className={classes.codeSnippet}>npm i</code> to install the library</li>
          <li>Wrap your app with the <a href="/?path=/story/core-dotgemscontext--default">dotGemsContext and configure it</a></li>
          <li>Import the needed components and enjoy!</li>
        </ol>
        <code>
          <span style={{color: "#AA0066"}}>import</span> &#123; <span style={{color: "#3355AA"}}>Button</span> &#125; <span style={{color: "#AA0066"}}>from</span> <span style={{color: "#AA6655"}}>"@dotgems/ui"</span>;
          <p style={{color: "#22AA22"}}>// Refer to this documentation for components props and usage<br/><span style={{color: "#777"}}>{"<"}<span style={{color: "#22AA99"}}>Button <span style={{color: "#3355AA"}}>label=<span style={{color: "#AA6655"}}>"Hello World"</span></span></span>/{">"}</span></p>
        </code>
      </Typography>
    </div>;
};
