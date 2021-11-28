/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { FaHandPointRight } from "react-icons/fa";
import "../../../../../common/css/Product.Style.css";
import { getAllModelAction } from "../../../../../redux/actions/Model/modelAction";
import { useDispatch, useSelector } from "react-redux";

const ModelTable = (props) => {
  const { setModal, setCurrentItem } = props;
  const dispatch = useDispatch();
  const models = useSelector((state) => state.model.list) || [];
  const toggle = (id) => {
    setModal(true);
    setCurrentItem(id);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={{ color: "#a60000", fontSize: "11px" }}>
          <FaHandPointRight style={{ marginRight: "10px" }} />
          Guide: Chọn Model muốn thêm sản phẩm
        </div>
      </div>
      <div className="row">
        <table
          className="table table-striped"
          style={{ marginTop: "30px", borderCollapse: "inherit" }}
        >
          <thead className="thead-addpro">
            <tr>
              <th>STT</th>
              <th>Tên Model</th>
              <th>Thương hiệu</th>
              <th>Hệ điều hành</th>
              <th>Thời gian ra mắt</th>
            </tr>
          </thead>
          <tbody>
            {models.map((model, index) => (
              <tr onClick={() => toggle(model._id)} key={model._id}>
                <td>{index + 1}</td>
                <td>{model.name}</td>
                <td>{model.idBrand.name}</td>
                <td>{model.operation}</td>
                <td>{model.timeDebut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelTable;
