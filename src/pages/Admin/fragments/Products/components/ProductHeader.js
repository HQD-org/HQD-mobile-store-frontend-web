import React from "react";
import "../../../../../common/css/Model.Style.css";
import { FormGroup } from "reactstrap";
import {
  capacityList,
  ramList,
  statusProduct,
} from "../../../../../common/constants/ListSelect";
import { renderOptionSelect } from "../../../../../common/utils/helper";
import { useSelector } from "react-redux";

const ProductHeader = (props) => {
  const {
    onFilterValueChange,
    status,
    idBrand,
    idBranch,
    ram,
    capacity,
    filterProduct,
  } = props;
  const brands = useSelector((state) => state.brand.list);
  const branches = useSelector((state) => state.branch.list);
  const pagination = useSelector((state) => state.product.pagination);
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
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => onFilterValueChange(e, "name")}
          />
        </div>
        <div
          className="row"
          style={{ marginTop: "20px", alignItems: "center" }}
        >
          <div className="col-2">
            <FormGroup>
              <select
                className="form-select"
                onChange={(e) => onFilterValueChange(e, "branch")}
                defaultValue={idBranch}
              >
                <option value="all">Filter by Branch</option>
                {renderOptionSelect(branches)}
              </select>
            </FormGroup>
          </div>
          <div className="col-2">
            <FormGroup>
              <select
                className="form-select"
                onChange={(e) => onFilterValueChange(e, "brand")}
                defaultValue={idBrand}
              >
                <option value="all">Filter by Brand</option>
                {renderOptionSelect(brands)}
              </select>
            </FormGroup>
          </div>
          <div className="col-Capacity">
            <FormGroup>
              <select
                className="form-select"
                defaultValue={capacity}
                onChange={(e) => onFilterValueChange(e, "capacity")}
              >
                <option value="all">Filter by Capacity</option>
                {renderOptionSelect(capacityList)}
              </select>
            </FormGroup>
          </div>
          <div className="col-RAM">
            <FormGroup>
              <select
                className="form-select"
                defaultValue={ram}
                onChange={(e) => onFilterValueChange(e, "ram")}
              >
                <option value="all">Filter by RAM</option>
                {renderOptionSelect(ramList)}
              </select>
            </FormGroup>
          </div>
          <div className="col-2">
            <FormGroup>
              <select
                className="form-select"
                defaultValue={status}
                onChange={(e) => onFilterValueChange(e, "status")}
              >
                <option value="all">Filter by Status</option>
                {renderOptionSelect(statusProduct)}
              </select>
            </FormGroup>
          </div>
          <div className="col-2">
            <button
              onClick={() => filterProduct(1, pagination.itemPerPage)}
              className="btn-filter"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductHeader);
