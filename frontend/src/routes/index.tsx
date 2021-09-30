import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import NewPoke from "../pages/NewPoke";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/newPoke" component={NewPoke} />
    </Switch>
  );
};

export default Routes;
