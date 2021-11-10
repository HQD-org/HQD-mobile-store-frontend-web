import React from "react";
import { Form, Input } from "reactstrap";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";
import validate from "./hooks/validate";
import { sendOTPAction } from "../../redux/actions/Auth/authActions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const forgotPassword = async (e) => {
    e.preventDefault();
    const username = e.target.email.value;
    const isValidData = validate(username);
    if (!isValidData) return;
    const res = await dispatch(sendOTPAction({ username }));
    if (res) history.push(`/verify?email=${username}&type=password`);
    return;
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
          </div>
          <div className="col" style={{ marginTop: "100px" }}>
            <div className="row" style={{ justifyContent: "center" }}>
              <h3 className="txtStart">FORGOT PASSWORD?</h3>
              <p className="txtSignup">
                Enter the Email address associated with your account
              </p>
              <p style={{ maxWidth: "88%" }}>
                We will send you a verification code to check your authenticity
              </p>
              <Form style={{ maxWidth: "88%" }} onSubmit={forgotPassword}>
                <Input
                  type="text"
                  name="email"
                  id="e-mail"
                  placeholder="Email"
                  className="form-control"
                  autoFocus
                />
                <div className="row" style={{ justifyContent: "center" }}>
                  <button className="btnSubmit" type="submit">
                    SEND
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
