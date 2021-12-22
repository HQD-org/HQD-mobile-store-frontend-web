import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../common/utils/helper";

const Product = () => {
  const products = useSelector((state) => state.product.homeList);
  return products.map((productsByBrand) => {
    const list = productsByBrand.list;
    return (
      <div style={{ marginTop: "20px" }} key={`brand-${productsByBrand.brand}`}>
        <div className="row">
          <div className="col-2">
            <button className="product-header">{productsByBrand.brand}</button>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
            {list.map((product) => {
              const color = product.model.color[0];
              const price = product.color.find(
                (item) => item.name === color.name
              ).price;
              return (
                <Link
                  key={`productByBrand${product._id}`}
                  to={`/detail/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="col">
                    <div className="card h-100 card-newPro">
                      <div className="img-pro">
                        <img
                          src={color.images[0]}
                          className="card-img-top"
                          alt={product.name}
                          width="200px"
                          height="200px"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "black" }}>
                          {product.name}
                        </h5>
                        <h5 className="card-text now-price">
                          {numberWithCommas(price) + " đ"}
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a className="see-all" href="/product">
              <span>See more</span>
            </a>
          </div>
        </div>
      </div>
    );
  });
};

export default Product;
