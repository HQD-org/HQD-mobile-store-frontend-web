import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../common/constants/RoutePath";

const ErrorPage = lazy(() => import("../pages/Error"));

const ErrorRoute = () => {
  return (
    <Switch>
      <Route path={PATH.ERROR} component={ErrorPage} />
    </Switch>
  );
};

export default ErrorRoute;
