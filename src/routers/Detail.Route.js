import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const DetailPage = lazy(() => import("../pages/Detail"));

const DetailRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.DETAIL}
        exact
        component={Auth(DetailPage, false, false)}
      />
    </Switch>
  );
};

export default DetailRoute;
