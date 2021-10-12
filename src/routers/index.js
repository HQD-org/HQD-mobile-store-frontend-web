import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppFooter from "../common/components/AppFooter";
import AppHeader from "../common/components/AppHeader";
import Loading from "../common/components/Loading";
import HomeRoute from "./Home.Route";
import LoginRoute from "./Login.Route";
import RegisterRoute from "./Register.Route";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <HomeRoute />
        <LoginRoute />
        <RegisterRoute />
        <AppFooter />
      </Suspense>
      <Loading />
    </Router>
  );
};

export default Routers;
