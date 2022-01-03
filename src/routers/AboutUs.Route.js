import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const AboutUsPage = lazy(() => import("../pages/AboutUs"));

const AboutUsRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.ABOUTUS}
        exact
        component={Auth(AboutUsPage, false, false)}
      />
    </Switch>
  );
};

export default AboutUsRoute;
