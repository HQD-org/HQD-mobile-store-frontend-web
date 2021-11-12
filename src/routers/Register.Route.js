import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const RegisterPage = lazy(() => import("../pages/Register"));

const RegisterRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.REGISTER}
        exact
        component={Auth(RegisterPage, false, false, true)}
      />
    </Switch>
  );
};

export default RegisterRoute;
