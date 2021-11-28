import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import "../../../common/css/ProductHome.Style.css";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col">
      <div className="card h-100 card-newPro">
        <Link
          to="/product/tenSp-haygidocungdc"
          style={{ textDecoration: "none" }}
        >
          <div className="img-pro">
            <img src={imgXiaomi} className="card-img-top" alt="..." />
          </div>

          <div className="card-body">
            <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
            <h5 className="card-text now-price">4.940.000 ₫</h5>
            <h5 class="card-text pre-price"></h5>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
