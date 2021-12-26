import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../common/css/Error.Style.css";

const ErrorPage = (props) => {
  const type = props.match.params.type;
  return (
    <div>
      <div
        className="cont_principal cont_principal cont_error_active"
        style={{ backgroundColor: "#d4d9ed" }}
      >
        <div className="cont_error">
          <h1>Oops..!</h1>
          <p>{type === "payment" ? "Something was error" : "Page Not Found"}</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <BiArrowBack className="home" /> Back To Home
          </Link>
        </div>
        <div className="cont_aura_1"></div>
        <div className="cont_aura_2"></div>
      </div>
    </div>
  );
};

export default ErrorPage;
