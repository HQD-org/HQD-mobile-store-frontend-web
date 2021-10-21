import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Loading from "../common/components/Loading";
import DashboardRoute from "./Dashboard.Route";
import ForgotPasswordRoute from "./ForgotPassword.Route";
import HomeRoute from "./Home.Route";
import LoginRoute from "./Login.Route";
import OTPRoute from "./OTP.Route";
import BrandRoute from "./Brand.Route";
import RegisterRoute from "./Register.Route";
import AddModelRoute from "./AddModel.Route";
import ModelRoute from "./Model.Route";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <DashboardRoute />
        <BrandRoute />
        <AddModelRoute />
        <ModelRoute />
        <HomeRoute />
        <LoginRoute />
        <RegisterRoute />
        <ForgotPasswordRoute />
        <OTPRoute />
      </Suspense>
      <Loading />
    </Router>
  );
};

export default Routers;
