import React from "react";
import Vivo from "../../../common/images/vivo-y20s.png";
import Xiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import "../../../common/css/Cart.Style.css";

const product = [
  {
    id: 1,
    name: "OPPO A31",
    color: "Xanh",
    price: 4999999,
    img: Vivo,
  },
  {
    id: 2,
    name: "Xiaomi A59",
    color: "Đỏ",
    price: 3000000,
    img: Xiaomi,
  },
];

const ListItem = ({ product }) => {
  return (
    <ul className="listCart">
      {product.map((p) => (
        <li key={p.id}>
          <hr />
          <div className="row">
            <div className="col-3">
              <img src={`${p.img}`} alt="" width="80%" />
            </div>
            <div className="col-4">
              <div>
                <h6>{`${p.name}`}</h6>
                <p>{`${p.color}`}</p>
              </div>
            </div>
            <div className="col-4 price-quantity">
              <div>
                <h6 style={{ textAlign: "end" }}>{`${p.price}₫`}</h6>
                <p>x1</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const ProductList = () => {
  return (
    <div className="col">
      <ListItem product={product} />
    </div>
  );
};

export default ProductList;
