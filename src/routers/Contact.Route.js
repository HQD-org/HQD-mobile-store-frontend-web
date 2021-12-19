import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const ContactPage = lazy(() => import("../pages/Contact"));

const ContactRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.CONTACT}
        exact
        component={Auth(ContactPage, false, false)}
      />
    </Switch>
  );
};

export default ContactRoute;
