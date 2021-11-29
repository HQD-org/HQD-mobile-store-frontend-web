import React from "react";
import { useSelector } from "react-redux";
import { FormGroup } from "reactstrap";
import {
  osList,
  timeDebutList,
} from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Product.Style.css";
import { renderOptionSelect } from "../../../../../common/utils/helper";

const AddProductHeader = (props) => {
  const { idBrand, os, timeDebut, onFilterValueChange, filterModel } = props;
  const brands = useSelector((state) => state.brand.list);
  const pagination = useSelector((state) => state.model.pagination);

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
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => onFilterValueChange(e, "name")}
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-3">
              <FormGroup>
                <select
                  className="form-select"
                  onChange={(e) => onFilterValueChange(e, "brand")}
                  defaultValue={idBrand}
                >
                  <option value="all">Brand</option>
                  {renderOptionSelect(brands)}
                </select>
              </FormGroup>
            </div>
            <div className="col-3">
              <FormGroup>
                <select
                  className="form-select"
                  onChange={(e) => onFilterValueChange(e, "os")}
                  defaultValue={os}
                >
                  <option value="all">Operating System</option>
                  {renderOptionSelect(osList)}
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <FormGroup>
                <select
                  className="form-select"
                  onChange={(e) => onFilterValueChange(e, "timeDebut")}
                  defaultValue={timeDebut}
                >
                  <option value="all">Time</option>
                  {renderOptionSelect(timeDebutList)}
                </select>
              </FormGroup>
            </div>
            <div className="col-2">
              <button
                onClick={() => filterModel(1, pagination.itemPerPage)}
                className="btn-filter"
              >
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductHeader;
