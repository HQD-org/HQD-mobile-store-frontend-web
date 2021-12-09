import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ProductPage = lazy(() => import("../pages/Products"));

const ProductRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.PRODUCT}
        exact
        component={Auth(ProductPage, false, false)}
      />
    </Switch>
  );
};

export default ProductRoute;
