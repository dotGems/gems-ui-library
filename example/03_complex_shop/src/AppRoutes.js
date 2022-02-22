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
import DropsDetails from './pages/DropsDetails';
import ScrollToTop from './utils/ScrollToTop';

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
        onClick: () => pushRouteAndSetActive(`/${link.id}`)
      }
    })
  }

  useEffect(() => []);

  return (
    <div>
      <Navbar data={navbarDataCombined} activeLink={activeLink}/>
      <div style={{maxWidth: "1000px", margin: "120px auto"}}>
        <ScrollToTop/>
        <Switch>
          <Route path="/discover">
            <Home/>
          </Route>
          <Route
            path="/drops"
            render={({ match: { url } }) => (
              <>
                <Route path={`${url}/`} component={Drops} exact />
                <Route path={`${url}/details/:dropId`} component={DropsDetails} />
              </>
            )}
          />
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