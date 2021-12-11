import React, { useEffect, useState } from "react";
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imgFrame from "../../../common/images/frameNew.jpg";
import newIcon from "../../../common/images/new.png";
import { numberWithCommas } from "../../../common/utils/helper";

const NewProduct = () => {
  const products = useSelector((state) => state.product.list);
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      setFirstList(products.slice(0, 5));
      setSecondList(products.slice(5, 10));
    }
  }, [products]);
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row" style={{ alignItems: "baseline" }}>
        <div className="col-1">
          <img src={newIcon} alt="" width="100%" />
        </div>
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="row" style={{ justifyContent: "center" }}>
        <div
          id="carouselNewProduct"
          className="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
                {firstList.map((item) => {
                  const color = item.model.color[0];
                  const price = item.color.find(
                    (item) => item.name === color.name
                  ).price;
                  return (
                    <Link
                      className="col"
                      key={`new-product${item._id}`}
                      to={`/detail/${item._id}`}
                    >
                      <div className="card h-100 card-newPro">
                        <div
                          className="img-pro"
                          style={{
                            backgroundImage: `url(${imgFrame})`,
                            borderRadius: "6px",
                            backgroundSize: "contain",
                          }}
                        >
                          <img
                            src={color.images[0]}
                            className="card-img-top imgNew"
                            alt="product mobile"
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-title">{item.name_with_type}</h5>
                          <h5 className="card-text now-price">
                            {numberWithCommas(price)} ₫
                          </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="carousel-item">
              <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
                {secondList.map((item) => {
                  const color = item.model.color[0];
                  const price = item.color.find(
                    (item) => item.name === color.name
                  ).price;
                  return (
                    <Link
                      className="col"
                      key={`new-product${item._id}`}
                      to={`/detail/${item._id}`}
                    >
                      <div className="card h-100 card-newPro">
                        <div
                          className="img-pro"
                          style={{
                            backgroundImage: `url(${imgFrame})`,
                            borderRadius: "6px",
                            backgroundSize: "contain",
                          }}
                        >
                          <img
                            src={color.images[0]}
                            className="card-img-top imgNew"
                            alt="product mobile"
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-title">{item.name_with_type}</h5>
                          <h5 className="card-text now-price">
                            {numberWithCommas(price)} ₫
                          </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselNewProduct"
            data-bs-slide="prev"
          >
            <IoArrowBackCircle aria-hidden="true" className="icon-prev" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselNewProduct"
            data-bs-slide="next"
          >
            <IoArrowForwardCircle aria-hidden="true" className="icon-next" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
