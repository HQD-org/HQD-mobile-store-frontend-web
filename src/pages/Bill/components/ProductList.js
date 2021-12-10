import React from "react";
import "../../../common/css/Cart.Style.css";

const ProductList = (props) => {
  const { products } = props;
  return (
    <div className="col">
      <ul className="listCart">
        {products.map((p) => (
          <li key={p._id}>
            <hr />
            <div className="row">
              <div className="col-3">
                <img src={p.image} alt="" width="80%" />
              </div>
              <div className="col-4">
                <div>
                  <h6>{p.name}</h6>
                  <p>{p.color}</p>
                </div>
              </div>
              <div className="col-4 price-quantity">
                <div>
                  <h6 style={{ textAlign: "end" }}>{p.price}</h6>
                  <p>x1</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
