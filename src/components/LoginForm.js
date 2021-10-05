import React, { Component } from "react";
import { Form, Input } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

class FormRegister extends Component {
  render() {
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

            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="form-control"
              required
            />
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
