import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ForgotPasswordPage = lazy(() => import("../pages/ForgotPassword"));

const ForgotPasswordRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.FORGOT_PASSWORD}
        exact
        component={Auth(ForgotPasswordPage, false, false, true)}
      />
    </Switch>
  );
};

export default ForgotPasswordRoute;
