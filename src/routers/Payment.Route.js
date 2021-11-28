import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const PaymentPage = lazy(() => import("../pages/Payment"));

const PaymentRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.PAYMENT}
        exact
        component={Auth(PaymentPage, false, false)}
      />
    </Switch>
  );
};

export default PaymentRoute;
