import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import discountImg from "../../../common/images/discount-tag.jpg";
import backgroundSale from "../../../common/images/sale.jpg";
import { numberWithCommas } from "../../../common/utils/helper";

const Sale = () => {
  const products = useSelector((state) => state.product.list);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setList(products.slice(0, 4));
    }
  }, [products]);
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row" style={{ textAlign: "center" }}>
        <i className="bi bi-brightness-alt-high-fill"></i>
      </div>
      <div className="row" style={{ alignItems: "center" }}>
        <div className="col-5">
          <hr />
        </div>
        <div className="col-2" style={{ textAlign: "center" }}>
          <p className="discount-header">DISCOUNT HOLIDAY</p>
        </div>
        <div className="col-5">
          <hr />
        </div>
      </div>
      <div
        className="promotion-product"
        style={{ backgroundImage: `url(${backgroundSale})` }}
      >
        <div className="row">
          <h2 className="txtSale">Shopping everyday</h2>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4 group-promotion">
          {list.map((item) => {
            const color = item.model.color[0];
            const price = item.color.find(
              (item) => item.name === color.name
            ).price;
            return (
              <div className="col" key={`discount${item._id}`}>
                <Link
                  className="card h-100 card-sale"
                  to={`/detail/${item._id}`}
                >
                  <div className="discount-tag">
                    <img src={discountImg} className="imgDiscount" alt="..." />
                  </div>
                  <div className="img-pro">
                    <img
                      src={color.images[0]}
                      className="card-img-top pro-sale"
                      alt="mobile product"
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h5 className="card-text now-price">
                      {numberWithCommas(price - 1000000)} ₫
                    </h5>
                    <h5 className="card-text pre-price">
                      {numberWithCommas(price)} ₫
                    </h5>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sale;
