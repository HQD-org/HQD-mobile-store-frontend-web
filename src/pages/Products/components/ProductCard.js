/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../common/css/ProductHome.Style.css";
import { numberWithCommas } from "../../../common/utils/helper";

const ProductCard = (props) => {
  const { product } = props;
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("0");

  useEffect(() => {
    if (product.model) {
      setColor(product.model.color[0]);
    }
  }, [product]);

  useEffect(() => {
    if (color) {
      setPrice(
        numberWithCommas(
          product.color.find((item) => item.name === color.name).price
        )
      );
    }
  }, [color]);

  return (
    <div className="col">
      <div className="card h-100 card-newPro">
        <Link to={`/detail/${product._id}`} style={{ textDecoration: "none" }}>
          <div className="img-pro">
            <img
              src={color ? color.images[0] : ""}
              className="card-img-top"
              alt={product.name}
              height="200px"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h5 className="card-text now-price">{price} ₫</h5>
            {/* <h5 className="card-text pre-price"></h5> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
