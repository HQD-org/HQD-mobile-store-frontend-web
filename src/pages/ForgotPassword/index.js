import React from "react";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";
import { Form, Input } from "reactstrap";
import AppHeader from "../../common/components/AppHeader";
import AppFooter from "../../common/components/AppFooter";

const ForgotPasswordPage = () => {
  return (
    <div>
      <AppHeader />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
          </div>
          <div className="col" style={{ marginTop: "100px" }}>
            <div className="row" style={{ "justify-content": "center" }}>
              <h3 className="txtStart">FORGOT PASSWORD?</h3>
              <p className="txtSignup">
                Enter the Email address associated with your account
              </p>
              <p style={{ maxWidth: "88%" }}>
                We will send you a verification code to check your authenticity
              </p>
              <Form style={{ maxWidth: "88%" }}>
                <Input
                  type="text"
                  name="e-mail"
                  id="e-mail"
                  placeholder="Email"
                  className="form-control"
                  required
                />
                <div className="row" style={{ "justify-content": "center" }}>
                  <button class="btnSubmit" type="submit">
                    SEND
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default ForgotPasswordPage;
