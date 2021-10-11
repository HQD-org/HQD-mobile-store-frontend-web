import React from "react";
import { Form, Input } from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginAction } from "../../../redux/actions/Auth/authActions";
import validate from "../hooks/validate";

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const login = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const isValidData = validate(username, password);
    if (!isValidData) return;
    const res = await dispatch(loginAction(isValidData));
    if (res) {
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
            id="username"
            placeholder="E-mail Address"
            className="form-control"
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
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
