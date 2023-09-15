import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import App from "../App";
import { HISTORICO_PATH } from "../model";
import { Historico } from "./Historico/Historico";

export default function RootView() {
  const { url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${url}/`}>
        <App />
      </Route>
      <Route path={`${url}${HISTORICO_PATH}`}>
        <Historico />
      </Route>
    </Switch>
  );
}
