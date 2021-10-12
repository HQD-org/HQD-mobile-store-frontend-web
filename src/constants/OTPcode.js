import React from "react";
import { Form, Input } from "reactstrap";
import login2 from "../images/login2.png";
import "../css/FormRegister.css";

function OTPcode() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
        </div>
        <div className="col" style={{ marginTop: "150px" }}>
          <div className="row" style={{ "justify-content": "center" }}>
            <h3 className="txtStart">OTP CODE</h3>
            <p className="txtSignup">Email Verification</p>
            <p style={{ maxWidth: "88%" }}>
              Enter the code sent to users@gmail.com
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
                <button
                  class="btnSubmit"
                  type="submit"
                  style={{ background: "#68bc68" }}
                >
                  VERIFY
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPcode;
