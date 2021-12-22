import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../common/components/Authentication";
import { PATH } from "../common/constants/RoutePath";

const QuestionPage = lazy(() => import("../pages/Question"));

const QuestionRoute = () => {
  return (
    <Switch>
      <Route
        path={PATH.QUESTION}
        exact
        component={Auth(QuestionPage, false, false)}
      />
    </Switch>
  );
};

export default QuestionRoute;
