import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const AddProductPage = lazy(() => import("../pages/AddProduct"));

const AddProductRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.ADDPRODUCT}
        exact
        component={Auth(AddProductPage, false)}
      />
    </Switch>
  );
};

export default AddProductRoute;
