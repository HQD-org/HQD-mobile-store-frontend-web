import queryString from "query-string";
import React, { useState, useEffect } from "react";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";
import {
  sendOTPAction,
  verifyAction,
} from "../../redux/actions/Auth/authActions";
import toastNotify from "../../common/toastify";

const VerifyPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const email = queryString.parse(history.location.search).email;
  const handleChange = (otp) => setOtp(otp);
  const verify = async () => {
    if (otp.length < 4) {
      toastNotify("Vui lòng nhập đủ 4 ký tự", "error");
      return;
    }
    const res = await dispatch(verifyAction({ otp, username: email }));
    if (res) {
      history.push("/login");
    }
  };
  const resendOTP = async () => {
    await dispatch(sendOTPAction({ username: email }));
    setDisabled(true);
    setTime(60);
    setTimeout(() => {
      setTime(0);
      setDisabled(false);
    }, 60000);
  };
  useEffect(() => {
    if (time > 0)
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
  }, [time]);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid"
                src={login2}
                alt="bg"
                width="100%"
              ></img>
            </div>
            <div className="col" style={{ marginTop: "150px" }}>
              <div>
                <div className="row" style={{ justifyContent: "center" }}>
                  <h3 className="txtStart">OTP CODE</h3>
                  <p className="txtSignup">Email Verification</p>
                  <p style={{ maxWidth: "88%" }}>
                    Enter the code sent to{" "}
                    <span style={{ fontWeight: "bold" }}>{email}</span>
                  </p>
                  <div style={{ maxWidth: "88%" }}>
                    <OtpInput
                      className="otp-input"
                      value={otp}
                      onChange={handleChange}
                      numInputs={4}
                      separator={<span>•</span>}
                      shouldAutoFocus={true}
                    />
                  </div>
                </div>
              </div>

              <div
                className="row"
                style={{
                  marginTop: "10px",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    maxWidth: "88%",
                  }}
                >
                  <p>Didn't receive the code? </p>
                  <button
                    style={{
                      border: "none",
                      background: "white",
                      color: "#99e099",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                    onClick={resendOTP}
                    disabled={disabled}
                  >
                    RESEND
                  </button>
                  <div> {time ? `after ${time} seconds` : ""}</div>
                </div>
              </div>
              <div className="row" style={{ justifyContent: "center" }}>
                <div style={{ maxWidth: "88%" }}>
                  <button onClick={verify} className="btnVerify">
                    Verify
                  </button>
                </div>
                <div style={{ maxWidth: "88%" }}>
                  <button
                    style={{
                      border: "none",
                      background: "white",
                      color: "rgb(198 198 198)",
                      marginLeft: "23%",
                      marginTop: "7px",
                    }}
                    onClick={() => setOtp("")}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyPage;
