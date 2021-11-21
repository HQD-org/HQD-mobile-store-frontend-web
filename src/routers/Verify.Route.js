import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const VerifyPage = lazy(() => import("../pages/Verify"));

const VerifyRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.VERIFY}
        exact
        component={Auth(VerifyPage, false, false, true)}
      />
    </Switch>
  );
};

export default VerifyRoute;
