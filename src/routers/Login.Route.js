import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const LoginPage = lazy(() => import("../pages/Login"));

const LoginRoute = () => {
  return (
    <Switch>
      <Route path={PATH.LOGIN} exact component={Auth(LoginPage, false)} />
    </Switch>
  );
};

export default LoginRoute;
