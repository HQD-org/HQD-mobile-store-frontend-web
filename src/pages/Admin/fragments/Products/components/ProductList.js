import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../../../common/utils/helper";

const ProductList = (props) => {
  const { setModal } = props;
  const toggle = () => setModal(true);
  const products = useSelector((state) => state.product.list);

  return (
    <div className="container-fluid">
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ marginTop: "15px" }}
      >
        {products.map((product) => {
          const color = product.color[0];
          const img = product.model.color.find(
            (item) => item.name === color.name
          ).images[0];
          const price = numberWithCommas(color.price);
          const quantity = color.quantityInfo.reduce((total, item) => {
            return item.quantity;
          }, 0);
          return (
            <div className="col" key={product._id}>
              <div className="card card-product" onClick={toggle}>
                <div className="img-top-text">
                  <img
                    src={img}
                    className="card-img-top img-productList"
                    alt={product.name}
                  />
                  <div className="txt-product">
                    <p className="name-pro">{product.name}</p>
                    <p className="capacity-pro">Capacity: {product.capacity}</p>
                    <p className="ram-pro">RAM: {product.ram}</p>
                    <p className="price-pro">Giá: {price}</p>
                  </div>
                </div>

                <div className="card-body">
                  <p className="card-text">Màu: {color.name}</p>
                  <p className="card-text">Số lượng: {quantity}</p>
                  <p className="card-text">
                    Trạng thái:{" "}
                    <span className="txt-status">{product.status}</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
