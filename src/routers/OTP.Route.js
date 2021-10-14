import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const OTPPage = lazy(() => import("../pages/OTP"));

const OTPRoute = () => {
  return (
    <Switch>
      <Route path={PATH.OTPCODE} exact component={Auth(OTPPage, false)} />
    </Switch>
  );
};

export default OTPRoute;
