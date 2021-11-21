import React from "react";
import "../../../../../common/css/Model.Style.css";
import { FormGroup } from "reactstrap";

const ProductHeader = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="fab fa-product-hunt icon-admin icon-product" />
            <span className="name-management">Product</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-4">
          <form>
            <input
              className="form-control me-2"
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
                <select className="form-select">
                  <option selected disabled>
                    Filter by Branch
                  </option>
                  <option value="1">Q1</option>
                  <option value="2">Q2</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select className="form-select">
                  <option selected disabled>
                    Filter by Brand
                  </option>
                  <option value="1">SAMSUNG</option>
                  <option value="2">OPPO</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-Capacity">
              <FormGroup>
                <select className="form-select">
                  <option selected disabled>
                    Filter by Capacity
                  </option>
                  <option value="1">32 GB</option>
                  <option value="2">64 GB</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-RAM">
              <FormGroup>
                <select className="form-select">
                  <option selected disabled>
                    Filter by RAM
                  </option>
                  <option value="1">2 GB</option>
                  <option value="2">8 GB</option>
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select className="form-select">
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

export default React.memo(ProductHeader);
