import React, { useState, useEffect } from "react";
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

import footerData from './data/footer.data';
import navbarData from './data/navbar.data';

function AppRoutes() {

  let history = useHistory();
  const [activeLink, setActiveLink] = useState('discover'); 

  const pushRouteAndSetActive = (link) => {
    history.push(link);
    setActiveLink(link);
  }

  let navbarDataCombined = {
    logo: {...navbarData.logo},
    links: navbarData.links.map((link) => {
      return {
        ...link,
        onClick: () => pushRouteAndSetActive(link.id)
      }
    })
  }

  useEffect(() => []);

  return (
    <div>
      <Navbar data={navbarDataCombined} activeLink={activeLink}/>
      <div style={{maxWidth: "1000px", margin: "120px auto"}}>
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