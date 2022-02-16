import React, { useState } from "react";
import { Navbar, Footer } from "@dotgems/react";
import {
  Switch,
  Route,
  useHistory,
  withRouter
} from "react-router-dom";

import Home from './pages/Home';
import Drops from './pages/Drops';
import Market from './pages/Market';
import Constructs from './pages/Constructs';

function AppRoutes() {


  const navbarData = {
    logo: {
      src: "/img/dotGems_logo.png",
      alt: "dotGems Logo"
    },
    links: [
      {
        id: "discover",
        label: "Discover",
        onClick: () => setAndPrintLink('discover'),
      },
      {
        id: "drops",
        label: "Drops",
        onClick: () => setAndPrintLink('drops'),
      },
      {
        id: "market",
        label: "Market",
        onClick: () => setAndPrintLink('market'),
      },
      {
        id: "constructs",
        label: "Constructs",
        onClick: () => setAndPrintLink('constructs'),
      },
    ]
  };

const footerData = {
  logo: {
    src: '/img/dotGems_logo.png',
    alt: 'dotGems Logo',
  },
}

let history = useHistory();
const [activeLink, setActiveLink] = useState('discover'); 

const setAndPrintLink = (link) => {
  history.push(link);
  setActiveLink(link);
}

  return (
    <div>
      <Navbar data={navbarData} activeLink={activeLink}/>
    <div style={{maxWidth: "1000px", margin: "86px auto"}}>
      <Switch>
        <Route path="/discover">
          <Home/>
        </Route>
        <Route path="/drops">
          <Drops/>
        </Route>
        <Route path="/market">
          <Market/>
        </Route>
        <Route path="/constructs">
          <Constructs/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
    <Footer data={footerData}/>
    </div>
  )
}

export default withRouter(AppRoutes);