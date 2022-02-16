import React from "react";
import { DotGemsWrapper } from "@dotgems/react";
import {
  BrowserRouter as Router
} from "react-router-dom";


import AppRoutes from './AppRoutes';

import './App.scss';

function App() {


  return (
    <div className="App">
      <DotGemsWrapper>
        <Router>
          <AppRoutes/>
        </Router>
      </DotGemsWrapper>
    </div>
  );
}

export default App;
