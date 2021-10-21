import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const AddModelPage = lazy(() => import("../pages/AddModel"));

const AddModelRoute = () => {
  return (
    <Switch>
      <Route path={PATH.ADDMODEL} exact component={Auth(AddModelPage, false)} />
    </Switch>
  );
};

export default AddModelRoute;
