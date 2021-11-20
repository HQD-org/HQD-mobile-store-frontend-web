/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FormGroup } from "reactstrap";
import { statusModel } from "../../../../../common/constants/ListSelect";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
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
  } = props;
  const brands = useSelector((state) => state.brand.list);
  const [os, setOs] = useState("all");
  const [timeDebut, setTimeDebut] = useState("all");
  const toggleEditor = () => {
    setModalEditor(!modalEditor);
    setOption(true);
  };

  const timeDebutList = [
    { _id: "all", name: "Tất cả" },
    { _id: "2020", name: "2020" },
    { _id: "2021", name: "2021" },
    { _id: "2022", name: "2022" },
  ];
  const osList = [
    { _id: "all", name: "Tất cả" },
    { _id: "android", name: "Android" },
    { _id: "ios", name: "IOS" },
  ];
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
    console.log("log at ==> ModelHeader ==> line 65 ==> filter: ");
  };
  return (
    <>
      <div className="container-fluid">
        <div
          className="row"
          style={{ marginTop: "50px", alignItems: "baseline" }}
        >
          <div className="col">
            <div>
              <i className="bi bi-front icon-admin icon-model" />
              <span className="name-management">Model</span>
            </div>
            <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <form onSubmit={onSubmit}>
            <div className="col-2">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchTerm"
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
                    defaultValue={idBrand}
                    name="brand"
                    onChange={(e) => onFilterValueChange(e, "brand")}
                  >
                    <option value="all">Filter by Brand</option>
                    {options(brands)}
                  </select>
                </FormGroup>
              </div>
              <div className="col-2">
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
              <div className="col-2">
                <button type="submit" className="btn-filter">
                  Filter
                </button>
              </div>
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
          </form>
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
      </div>
    </>
  );
};

export default ModelHeader;
