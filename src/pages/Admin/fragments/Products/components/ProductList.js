import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../../../common/utils/helper";

const ProductList = (props) => {
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
              <div className="card card-product">
                <div className="img-top-text">
                  <img
                    src={img}
                    className="card-img-top img-productList"
                    alt={product.name}
                  />
                  <div className="txt-product">
                    <h4
                      className="name-pro"
                      data-toggle="tooltip"
                      title={product.name}
                    >
                      {product.name}
                    </h4>
                    <h6 className="capacity-pro">
                      Capacity: {product.capacity}
                    </h6>
                    <h6 className="ram-pro">RAM: {product.ram}</h6>
                    <h6 className="price-pro">Giá: {price}₫</h6>
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
