import { PATH } from "../common/constants/RoutePath";
import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
import Auth from "../common/components/Authentication";
import React from "react";

const LoginPage = lazy(() => import("../pages/Login"));

const LoginRoute = () => {
  return (
    <Switch>
      <Route path={PATH.LOGIN} exact component={Auth(LoginPage, false)} />
    </Switch>
  );
};

export default LoginRoute;
