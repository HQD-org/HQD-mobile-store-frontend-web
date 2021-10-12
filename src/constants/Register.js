import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/FormRegister.css";
import FormRegister from "../components/RegisterForm";
import login2 from "../images/login2.png";
import "../css/FormRegister.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
        </div>
        <div className="col">
          <div className="row" style={{ "justify-content": "center" }}>
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
  );
}

export default Register;
