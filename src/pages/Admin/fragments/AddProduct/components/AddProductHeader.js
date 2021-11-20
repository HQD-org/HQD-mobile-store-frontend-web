import React from "react";
import "../../../../../common/css/Product.Style.css";
import { FormGroup } from "reactstrap";

const AddProductHeader = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="bi bi-plus-square-fill icon-admin icon-modelheader"></i>
            <span className="name-management">Add Product</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>

        <div className="col-6"> </div>
        <div className="col-2"></div>
      </div>
      <hr />

      <div
        className="row"
        style={{ marginTop: "20px", alignItems: "baseline" }}
      >
        <div className="col-3">
          <form>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />{" "}
          </form>
        </div>
        <div className="col-8">
          <form>
            <div className="row">
              <div className="col-3">
                <FormGroup>
                  <select className="form-select">
                    <option selected disabled>
                      Brand
                    </option>
                    <option value="1">OPPO</option>
                    <option value="2">SAMSUNG</option>
                  </select>
                </FormGroup>
              </div>
              <div className="col-3">
                <FormGroup>
                  <select className="form-select">
                    <option selected disabled>
                      Operating System
                    </option>
                    <option value="1">iOS</option>
                    <option value="2">Android</option>
                  </select>
                </FormGroup>
              </div>
              <div className="col-2">
                <FormGroup>
                  <select className="form-select">
                    <option selected disabled>
                      Time
                    </option>
                    <option value="1">2021</option>
                    <option value="2">2020</option>
                  </select>
                </FormGroup>
              </div>
              <div className="col-2">
                <button className="btn-filter">Filter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductHeader;
