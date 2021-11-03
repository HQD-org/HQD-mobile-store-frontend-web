import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const HomePage = lazy(() => import("../pages/Home"));

const HomeRoute = () => {
  return (
    <Switch>
      <Route path={PATH.HOME} exact component={Auth(HomePage, false)} />
    </Switch>
  );
};

export default HomeRoute;
