import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "../common/components/Loading";
import AddModelRoute from "./AddModel.Route";
import BrandRoute from "./Brand.Route";
import DashboardRoute from "./Dashboard.Route";
import ForgotPasswordRoute from "./ForgotPassword.Route";
import HomeRoute from "./Home.Route";
import LoginRoute from "./Login.Route";
import ModelRoute from "./Model.Route";
import OTPRoute from "./OTP.Route";
import RegisterRoute from "./Register.Route";
import AppHeader from "../common/components/AppHeader";
import AppFooter from "../common/components/AppFooter";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <DashboardRoute />
        <BrandRoute />
        <AddModelRoute />
        <ModelRoute />
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
