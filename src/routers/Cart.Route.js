import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const CartPage = lazy(() => import("../pages/Cart"));

const CartRoute = () => {
  return (
    <Switch>
      <Route path={PATH.CART} exact component={Auth(CartPage, false, false)} />
    </Switch>
  );
};

export default CartRoute;
