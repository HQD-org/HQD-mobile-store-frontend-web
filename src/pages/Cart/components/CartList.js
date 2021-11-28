import React, { useState } from "react";
import Vivo from "../../../common/images/vivo-y20s.png";
import Xiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import { IoAdd, IoRemove, IoChevronBackCircleSharp } from "react-icons/io5";
import "../../../common/css/Cart.Style.css";
import { Link } from "react-router-dom";

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
  const [quantity, setQuantity] = useState(1);
  console.log(quantity);

  const plusQuantity = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log(quantity);
    }
  };
  return (
    <ul className="listCart">
      <div className="row">
        <div className="col-6">
          <h5>Your Cart</h5>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "#18966b" }}
          >
            <h5>
              <IoChevronBackCircleSharp fontSize="30px" /> Shopping Continue
            </h5>
          </Link>
        </div>
      </div>

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
                <button className="btnRemoveCart">Remove</button>
              </div>
            </div>
            <div className="col-5 price-quantity">
              <div>
                <h6 style={{ textAlign: "end" }}>{`${p.price}₫`}</h6>
                <div class="quantity">
                  <div class="sub">
                    <IoRemove onClick={subQuantity} />
                  </div>
                  <div class="number">{quantity}</div>
                  <div class="plus">
                    <IoAdd onClick={plusQuantity} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CartList = () => {
  return (
    <div className="row">
      <div className="col">
        <ListItem product={product} />
      </div>
    </div>
  );
};

export default CartList;
