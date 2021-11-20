/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useSelector } from "react-redux";
import { translateStatusToVietnamese } from "../../../../../common/utils/helper";

const Model = (props) => {
  const { setModalEditor, modalEditor, setOption, setCurrentModel } = props;
  const brands = useSelector((state) => state.brand.list);
  const models = useSelector((state) => state.model.list);

  const toggleEditor = (index) => {
    if (index || index === 0) {
      setCurrentModel(models[index]);
      setOption(false);
    }
    setModalEditor(!modalEditor);
  };

  const ModelElement = (props) => {
    const { models, brands } = props;
    return models.map((model, index) => {
      const brand = brands.find((brand) => brand._id === model.idBrand) || "";
      const status = translateStatusToVietnamese(model.status);
      return (
        <tr onClick={() => toggleEditor(index)} key={index}>
          <td>{index + 1}</td>
          <td>{model.name}</td>
          <td>{brand.name}</td>
          <td>{model.operation}</td>
          <td>{model.timeDebut}</td>
          <td>{status}</td>
        </tr>
      );
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table table-striped" style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Model</th>
              <th>Thương hiệu</th>
              <th>Hệ điều hành</th>
              <th>Thời gian ra mắt</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ModelElement models={models} brands={brands} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Model;
