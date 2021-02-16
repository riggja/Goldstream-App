import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar.js";
import Homepage from "./Homepage.js";
import Files from "./Files.js";
import Settings from "./Settings.js";
import Error from "./Error";
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/homepage" component={Homepage} exact/>
          <Route path="/files" component={Files} />
          <Route path="/settings" component={Settings} />
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
