import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ErrorPage = lazy(() => import("../pages/Error"));

const ErrorRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.ERROR}
        exact
        component={Auth(ErrorPage, false, false)}
      />
    </Switch>
  );
};

export default ErrorRoute;
