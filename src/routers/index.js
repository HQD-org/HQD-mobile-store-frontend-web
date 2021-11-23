import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppFooter from "../common/components/AppFooter";
import AppHeader from "../common/components/AppHeader";
import Loading from "../common/components/Loading";
import DashboardRoute from "./Dashboard.Route";
import ForgotPasswordRoute from "./ForgotPassword.Route";
import HomeRoute from "./Home.Route";
import LoginRoute from "./Login.Route";
import RegisterRoute from "./Register.Route";
import VerifyRoute from "./Verify.Route";
import ProductRoute from "./Product.Route";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <DashboardRoute />
        <HomeRoute />
        <ProductRoute />
        <LoginRoute />
        <RegisterRoute />
        <ForgotPasswordRoute />
        <VerifyRoute />
        <AppFooter />
      </Suspense>
      <Loading />
    </Router>
  );
};

export default Routers;
