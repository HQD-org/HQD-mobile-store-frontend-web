import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

class FormRegister extends Component {
  state = {
    isPasswordShown: false,
  };
  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };
  render() {
    const { isPasswordShown } = this.state;
    return (
      <div>
        <div className="row" style={{ "justify-content": "center" }}>
          <Form style={{ maxWidth: "88%" }}>
            <Input
              type="email"
              pattern=".+@globex\.com"
              name="e-mail-address"
              id="a-mail-address"
              placeholder="E-mail Address"
              className="form-control"
              required
            />
            <div className="div-password">
              <Input
                type={isPasswordShown ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                className="form-control"
                required
              />
              <i
                className={`bi ${
                  isPasswordShown ? "bi-eye-fill" : "bi-eye-slash-fill"
                }  password-icon`}
                onClick={this.togglePasswordVisibility}
              ></i>
            </div>
            <div>
              <p className="txtForgot">
                <Link
                  to="/forgot-password"
                  style={{ color: "#3fa5ef", textDecoration: "none" }}
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <div className="row" style={{ "justify-content": "center" }}>
              <button class="btnSubmit" type="submit">
                LOGIN
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default FormRegister;
