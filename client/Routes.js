import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Resliqi } from "./components/Projects/Resliqi";
const Routes = () => {
  return (
    <Switch>
      <Route path="/resliqi" component={Resliqi} />
    </Switch>
  );
};

export default withRouter(Routes);
