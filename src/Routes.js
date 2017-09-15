import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";


export class Routes extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;
