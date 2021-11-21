/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";
import FormRegister from "./components/RegisterForm";

const RegisterPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              style={{ marginTop: "80px" }}
              src={login2}
              alt="bg"
              width="100%"
            ></img>
          </div>
          <div className="col">
            <div className="row" style={{ justifyContent: "center" }}>
              <p className="txtStart">START FOR FREE</p>
              <h3 className="txtSignup">Sign up to HQD Mobile</h3>
            </div>
            <FormRegister />
            <p className="text-center mt-2">
              Have an account?{" "}
              <span>
                <Link
                  to="/login"
                  style={{ color: "#3fa5ef", textDecoration: "none" }}
                >
                  Login now
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
