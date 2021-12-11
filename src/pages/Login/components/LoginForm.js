import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input } from "reactstrap";
import { loginAction } from "../../../redux/actions/Auth/authActions";
import { mergeCartAction } from "../../../redux/actions/Cart/cartAction";
import validate from "../hooks/validate";
import Cookie from "js-cookie";

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const isValidData = validate(username, password);
    if (!isValidData) return;
    const res = await dispatch(loginAction(isValidData));
    if (res) {
      const cart = Cookie.get("cart");
      if (cart) {
        const done = dispatch(mergeCartAction({ products: JSON.parse(cart) }));
        if (done) Cookie.remove("cart");
      }
      if (res.role === "admin" || res.role === "manager branch") {
        history.push("/dashboard");
        return;
      }
      if (res.needVerify) {
        history.push(`/verify?email=${username}&type=active`);
        return;
      }
      if (history.location.pathname === "/login") {
        history.push("/");
        return;
      }
      history.goBack();
      return;
    }
  };
  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form style={{ maxWidth: "88%" }} onSubmit={login}>
          <Input
            type="email"
            name="username"
            placeholder="E-mail Address"
            className="form-control mt-4"
            autoFocus
          />

          <div className="div-password">
            <Input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="form-control mt-4"
            />
            <i
              className={`bi ${
                isPasswordShown ? "bi-eye-fill" : "bi-eye-slash-fill"
              }  password-icon`}
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            ></i>
          </div>
          <span>
            <Link
              to="/forgot-password"
              style={{ color: "#3fa5ef", textDecoration: "none" }}
            >
              Forgot Password?
            </Link>
          </span>
          <div className="row" style={{ justifyContent: "center" }}>
            <button className="btnSubmit" type="submit">
              LOGIN
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormLogin;
