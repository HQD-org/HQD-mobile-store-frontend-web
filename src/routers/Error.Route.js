import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const ErrorPage = lazy(() => import("../pages/Error"));

const ErrorRoute = () => {
  return (
    <Switch>
      <Route path="/404" component={ErrorPage} />
    </Switch>
  );
};

export default ErrorRoute;
