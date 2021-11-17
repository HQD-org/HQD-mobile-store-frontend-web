/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../../../../../common/css/Model.Style.css";
import { FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrandAction } from "../../../../../redux/actions/Brand/brandAction";
import { statusModel } from "../../../../../common/constants/ListSelect";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ModelHeader = () => {
  const dispatch = useDispatch();
  const brands = useSelector((state) => state.brand.list);
  useEffect(() => {
    dispatch(getAllBrandAction());
  }, []);
  const [brand, setBrand] = useState("all");
  const [status, setStatus] = useState("all");
  const [os, setOs] = useState("all");
  const [timeDebut, setTimeDebut] = useState("all");
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
  const onChangeFilter = (e, type) => {
    switch (type) {
      case "brand":
        setBrand(e.target.value);
        break;
      case "status":
        setStatus(e.target.value);
        break;
      case "os":
        setOs(e.target.value);
        break;
      case "timeDebut":
        setTimeDebut(e.target.value);
        break;
      default:
        break;
    }
  };
  const options = (list) => {
    console.log("log at ==> ModelHeader ==> line 49 ==> list: ", list);
    return list.map((element) => {
      return (
        <option key={element._id} value={element._id}>
          {element.name}
        </option>
      );
    });
  };
  const filter = async (e) => {
    e.preventDefault();
    let filter = {
      brand: brand,
      status: status,
      os: os,
      timeDebut: timeDebut,
    };
    console.log("log at ==> ModelHeader ==> line 65 ==> filter: ", filter);
    // dispatch(getAllBrandAction(1, 1000, filter));
  };
  return (
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
        <form onSubmit={filter}>
          <div className="col-2">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchTerm"
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
                  defaultValue={brand}
                  name="brand"
                  onChange={(e) => onChangeFilter(e, "brand")}
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
                  onChange={(e) => onChangeFilter(e, "os")}
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
                  onChange={(e) => onChangeFilter(e, "timeDebut")}
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
                  onChange={(e) => onChangeFilter(e, "status")}
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
  );
};

export default ModelHeader;
