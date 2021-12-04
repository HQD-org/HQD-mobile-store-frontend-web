import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const BillPage = lazy(() => import("../pages/Bill"));

const BillRoute = () => {
  return (
    <Switch>
      <Route path={PATH.BILLS} exact component={Auth(BillPage, false, false)} />
    </Switch>
  );
};

export default BillRoute;
