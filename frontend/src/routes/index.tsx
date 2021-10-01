import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import NewPoke from "../pages/NewPoke";
import UpdatePokemon from "../pages/UpdatePokemon";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Feed} />
      <Route path="/newPoke" component={NewPoke} />
      <Route path="/updatePoke/:id" component={UpdatePokemon} />
    </Switch>
  );
};

export default Routes;
