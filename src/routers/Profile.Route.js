import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ProfilePage = lazy(() => import("../pages/Profile"));

const ProfileRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.PROFILE}
        exact
        component={Auth(ProfilePage, false, false)}
      />
    </Switch>
  );
};

export default ProfileRoute;
