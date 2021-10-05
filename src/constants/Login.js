import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/FormRegister.css";
import LoginForm from "../components/LoginForm";
import login2 from "../images/login2.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={login2} alt="bg" width="100%"></img>
        </div>
        <div className="col" style={{ marginTop: "150px" }}>
          <div className="row" style={{ "justify-content": "center" }}>
            <p className="txtStart">WELCOME BACK</p>
            <h3 className="txtSignup">Login to HQD Mobile</h3>
          </div>
          <LoginForm />
          <p className="text-center mt-2">
            Don't have any account?{" "}
            <span>
              <Link
                to="/signup"
                style={{ color: "#3fa5ef", textDecoration: "none" }}
              >
                Sign up now
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
