import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ModelPage = lazy(() => import("../pages/Model"));

const ModelRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.MODEL} component={Auth(ModelPage, true, true)} />
    </Switch>
  );
};

export default ModelRoute;
