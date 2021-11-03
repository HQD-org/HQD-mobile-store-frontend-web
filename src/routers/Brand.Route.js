import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const BrandPage = lazy(() => import("../pages/Brand"));

const BrandRoute = () => {
  return (
    <Switch>
      <Route path={PATH.BRAND} exact component={Auth(BrandPage, true, true)} />
    </Switch>
  );
};

export default BrandRoute;
