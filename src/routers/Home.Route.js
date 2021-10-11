import { PATH } from "../common/constants/RoutePath";
import { Switch, Route } from "react-router-dom";
import { lazy } from "react";
import Auth from "../common/components/Authentication";
import React from "react";

const LoginPage = lazy(() => import("../pages/Login"));

const HomeRoute = () => {
  return (
    <Switch>
      {/* để tạm login */}
      <Route path={PATH.HOME} exact component={Auth(LoginPage, false)} />
    </Switch>
  );
};

export default HomeRoute;
