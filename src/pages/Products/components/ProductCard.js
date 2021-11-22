import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";

const ProductCard = () => {
  return (
    <div className="col">
      <div className="card h-100 card-newPro">
        <div className="img-pro">
          <img src={imgXiaomi} className="card-img-top" alt="..." />
        </div>

        <div className="card-body">
          <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
          <h5 className="card-text now-price">4.940.000 ₫</h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
