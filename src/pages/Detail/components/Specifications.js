import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";

const Specifications = () => {
  const product = useSelector((state) => state.product.productDetail);
  const [model, setModel] = useState({});
  useEffect(() => {
    if (product.model) setModel(product.model);
  }, [product]);

  return (
    <div>
      <Table bordered>
        <tbody>
          <tr>
            <th>Màn hình</th>
            <td>{model.screen}</td>
          </tr>
          <tr>
            <th>Hệ điều hành</th>
            <td>{model.operation}</td>
          </tr>
          <tr>
            <th>Camera sau</th>
            <td>{model.rearCamera}</td>
          </tr>
          <tr>
            <th>Camera trước</th>
            <td>{model.frontCamera}</td>
          </tr>
          <tr>
            <th>Chip</th>
            <td>{model.chip}</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>{product.ram}</td>
          </tr>
          <tr>
            <th>Bộ nhớ trong</th>
            <td>{product.capacity}</td>
          </tr>
          <tr>
            <th>Sim</th>
            <td>{model.sim}</td>
          </tr>
          <tr>
            <th>Pin, Sạc</th>
            <td>{model.battery + ", " + model.charger}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Specifications;
