import React, { Component } from "react";
import { Form, Input, FormGroup } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

class FormRegister extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{ "justify-content": "center" }}>
          <Form style={{ maxWidth: "88%" }}>
            <Input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              className="form-control"
              required
            />
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="form-control"
              required
            />
            <div className="row">
              <div className="col">
                <FormGroup style={{ position: "relative" }}>
                  <select
                    type="select"
                    name="village"
                    id="village"
                    className="form-select"
                    required
                  >
                    <option disabled selected style={{ color: "#828181" }}>
                      Choose Village
                    </option>
                    <option>V1</option>
                    <option>V2</option>
                    <option>V3</option>
                  </select>
                </FormGroup>
              </div>
              <div className="col">
                <FormGroup style={{ position: "relative" }}>
                  <select
                    type="select"
                    name="district"
                    id="district"
                    className="form-select"
                    required
                  >
                    <option disabled selected style={{ color: "#828181" }}>
                      Choose District
                    </option>
                    <option>Q1</option>
                    <option>Q2</option>
                    <option>Q3</option>
                  </select>
                </FormGroup>
              </div>
              <div className="col">
                <FormGroup style={{ position: "relative" }}>
                  <select
                    type="select"
                    name="province"
                    id="province"
                    className="form-select"
                    required
                  >
                    <option disabled selected style={{ color: "#828181" }}>
                      Choose Province
                    </option>
                    <option>LD</option>
                    <option>BT</option>
                    <option>TP Hồ Chí Minh</option>
                  </select>
                </FormGroup>
              </div>
            </div>

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
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Mobile number"
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
            <Input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="form-control"
              required
            />
            <div className="row" style={{ "justify-content": "center" }}>
              <button class="btnSubmit" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default FormRegister;
