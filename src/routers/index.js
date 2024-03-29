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
import DetailRoute from "./Detail.Route";
import CartRoute from "./Cart.Route";
import PaymentRoute from "./Payment.Route";
import ProfileRoute from "./Profile.Route";
import BillRoute from "./Bill.Route";
import ErrorRoute from "./Error.Route";
import ContactRoute from "./Contact.Route";
import QuestionRoute from "./Question.Route";

const Routers = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppHeader />
        <DashboardRoute />
        <HomeRoute />
        <ProductRoute />
        <ContactRoute />
        <DetailRoute />
        <CartRoute />
        <PaymentRoute />
        <ProfileRoute />
        <QuestionRoute />
        <BillRoute />
        <LoginRoute />
        <RegisterRoute />
        <ForgotPasswordRoute />
        <VerifyRoute />
        <ErrorRoute />
        <AppFooter />
      </Suspense>
      <Loading />
    </Router>
  );
};

export default Routers;
