import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const AdminPage = lazy(() => import("../pages/Admin"));

const DashboardRoute = () => {
  return (
    <Switch>
      <Route path={PATH.ADMIN} exact component={Auth(AdminPage, true, true)} />
    </Switch>
  );
};

export default DashboardRoute;
