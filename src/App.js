import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import InnerHome from '../src/components/InnerHome/InnerHome'
import home from '../src/components/home/home'
function App() {
  return (
    <div>
      <div>

        <BrowserRouter>
        <Switch>
        <Route exact path="/" component={InnerHome} />
        <Route exact path="/" component={home} />
        </Switch>
        </BrowserRouter>
        </div>
        </div>
  );
}

export default App;
