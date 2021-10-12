import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../common/constants/RoutePath";

const HomePage = lazy(() => import("../pages/Home"));

const HomeRoute = () => {
  return (
    <Switch>
      {/* để tạm */}
      <Route path={PATH.HOME} exact component={HomePage} />
    </Switch>
  );
};

export default HomeRoute;
