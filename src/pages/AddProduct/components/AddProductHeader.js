import React from "react";
import "../../../common/css/Product.Style.css";
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
            <i class="bi bi-plus-square-fill icon-admin icon-modelheader"></i>
            <span className="name-management">Add Product</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>

        <div className="col-6"> </div>
        <div className="col-2"></div>
      </div>
      <hr />
      <div className="row">
        <div className="col-2">
          <form>
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />{" "}
          </form>
        </div>
        <form>
          <div
            className="row"
            style={{ marginTop: "20px", alignItems: "center" }}
          >
            {" "}
            <div className="col-2">
              <FormGroup>
                <select class="form-select">
                  <option selected disabled>
                    Filter by Brand
                  </option>
                  <option value="1">OPPO</option>
                  <option value="2">SAMSUNG</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select class="form-select">
                  <option selected disabled>
                    Filter by Operating System
                  </option>
                  <option value="1">iOS</option>
                  <option value="2">Android</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select class="form-select">
                  <option selected disabled>
                    Filter by Time
                  </option>
                  <option value="1">2021</option>
                  <option value="2">2020</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select class="form-select">
                  <option selected disabled>
                    Filter by Status
                  </option>
                  <option value="1">Hoạt động</option>
                  <option value="2">Hết hàng</option>
                  <option value="3">Ngừng kinh doanh</option>
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
  );
};

export default AddProductHeader;
