/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useSelector } from "react-redux";
import { FormGroup } from "reactstrap";
import {
  osList,
  statusModel,
  timeDebutList,
} from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Model.Style.css";

const ModelHeader = (props) => {
  const {
    setModalEditor,
    modalEditor,
    setOption,
    status,
    idBrand,
    onFilterValueChange,
    filter,
    os,
    timeDebut,
  } = props;
  const brands = useSelector((state) => state.brand.list);
  const toggleEditor = () => {
    setModalEditor(!modalEditor);
    setOption(true);
  };

  const options = (list) => {
    return list.map((element) => {
      return (
        <option key={element._id} value={element._id}>
          {element.name}
        </option>
      );
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    filter(1, 20);
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row"
          style={{ marginTop: "50px", alignItems: "center" }}
        >
          <div className="col-10">
            <div>
              <i className="bi bi-front icon-admin icon-model" />
              <span className="name-management">Model</span>
            </div>
            <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn-addBrand"
              onClick={toggleEditor}
            >
              <i className="bi bi-plus-square-fill icon-brand"></i>
              <span>Add Model</span>
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-3">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="searchTerm"
                  onChange={(e) => onFilterValueChange(e, "name")}
                />
              </div>
            </div>

            <div
              className="row"
              style={{ marginTop: "20px", alignItems: "center" }}
            >
              <div className="col-2">
                <FormGroup>
                  <select
                    className="form-select"
                    defaultValue={idBrand}
                    name="brand"
                    onChange={(e) => onFilterValueChange(e, "brand")}
                  >
                    <option value="all">Filter by Brand</option>
                    {options(brands)}
                  </select>
                </FormGroup>
              </div>
              <div className="col-2" style={{ width: "23%" }}>
                <FormGroup>
                  <select
                    className="form-select"
                    defaultValue={os}
                    name="os"
                    onChange={(e) => onFilterValueChange(e, "os")}
                  >
                    <option value="all">Filter by Operating System</option>
                    {options(osList)}
                  </select>
                </FormGroup>
              </div>
              <div className="col-2">
                <FormGroup>
                  <select
                    className="form-select"
                    defaultValue={timeDebut}
                    name="timeDebut"
                    onChange={(e) => onFilterValueChange(e, "timeDebut")}
                  >
                    <option value="all">Filter by Time</option>
                    {options(timeDebutList)}
                  </select>
                </FormGroup>
              </div>
              <div className="col-2">
                <FormGroup>
                  <select
                    className="form-select"
                    defaultValue={status}
                    name="status"
                    onChange={(e) => onFilterValueChange(e, "status")}
                  >
                    <option value="all">Filter by Status</option>
                    {options(statusModel)}
                  </select>
                </FormGroup>
              </div>
              <div className="col-1">
                <button type="submit" className="btn-filter">
                  Filter
                </button>
              </div>
              <div className="col-2">
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="btnDownload-model"
                  table="table-to-xls"
                  filename="tablexls"
                  sheet="tablexls"
                  buttonText="Export"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModelHeader;
