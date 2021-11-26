/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";
import LoginForm from "./components/LoginForm";

const LoginPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  const loginFormRef = useRef(null);
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  }, []);
  useEffect(() => {
    if (loginFormRef.current) loginFormRef.current.scrollIntoView();
  }, [loginFormRef]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
          </div>
          <div
            ref={loginFormRef}
            className="col"
            style={{ marginTop: "100px" }}
          >
            <div className="row" style={{ justifyContent: "center" }}>
              <p className="txtStart">WELCOME BACK</p>
              <h3 className="txtSignup">Login to HQD Mobile</h3>
            </div>
            <LoginForm />
            <p className="text-center mt-2">
              Don't have any account?{" "}
              <span>
                <Link
                  to="/register"
                  style={{ color: "#3fa5ef", textDecoration: "none" }}
                >
                  Sign up now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
