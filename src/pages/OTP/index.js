import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "../../common/css/Form.Style.css";
import login2 from "../../common/images/login2.png";

const OTPcodePage = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
    console.log(otp);
    // Validation();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
        </div>
        <div className="col" style={{ marginTop: "150px" }}>
          <div>
            <div className="row" style={{ "justify-content": "center" }}>
              <h3 className="txtStart">OTP CODE</h3>
              <p className="txtSignup">Email Verification</p>
              <p style={{ maxWidth: "88%" }}>
                Enter the code sent to{" "}
                <span style={{ fontWeight: "bold" }}>user123@gmail.com</span>
              </p>
              <div style={{ maxWidth: "88%" }}>
                <OtpInput
                  className="otp-input"
                  value={otp}
                  onChange={handleChange}
                  numInputs={4}
                  separator={<span>•</span>}
                  //   inputStyle={"digitsInput"}
                  //   containerStyle={"OTPInputsForm"}
                  // isDisabled={isFormDisabled}
                />
              </div>
            </div>
          </div>

          <div
            className="row"
            style={{
              marginTop: "10px",
              "justify-content": "center",
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
                }}
              >
                RESEND
              </button>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div style={{ maxWidth: "88%" }}>
              <button className="btnVerify">Verify</button>
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
  );
};

export default OTPcodePage;
