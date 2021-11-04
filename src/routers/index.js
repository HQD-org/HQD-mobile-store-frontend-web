import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppFooter from "../common/components/AppFooter";
import AppHeader from "../common/components/AppHeader";
import Loading from "../common/components/Loading";
import AddModelRoute from "./AddModel.Route";
import DashboardRoute from "./Dashboard.Route";
import ForgotPasswordRoute from "./ForgotPassword.Route";
import HomeRoute from "./Home.Route";
import LoginRoute from "./Login.Route";
import OTPRoute from "./OTP.Route";
import RegisterRoute from "./Register.Route";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <DashboardRoute />
        <AddModelRoute />
        <HomeRoute />
        <LoginRoute />
        <RegisterRoute />
        <ForgotPasswordRoute />
        <OTPRoute />
        <AppFooter />
      </Suspense>
      <Loading />
    </Router>
  );
};

export default Routers;
