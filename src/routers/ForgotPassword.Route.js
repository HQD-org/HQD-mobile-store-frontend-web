import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ForgotPasswordPage = lazy(() => import("../pages/ForgotPassword"));

const ForgotPasswordRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.FORGOTPASSWORD}
        exact
        component={Auth(ForgotPasswordPage, false)}
      />
    </Switch>
  );
};

export default ForgotPasswordRoute;
