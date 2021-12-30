import React, { useState, useEffect } from "react";
import starTrending from "../../../common/images/Star1.png";
import backgroundTrending from "../../../common/images/halloween.jpg";
import imgWait from "../../../common/images/wait.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Trending = () => {
  const products = useSelector((state) => state.product.list);
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      console.log(products.length);
      setFirstList(products.slice(0, 1));
      setSecondList(products.slice(1, 2));
    }
  }, [products]);
  return (
    <div style={{ marginTop: "60px" }}>
      <div className="row" style={{ textAlign: "center" }}>
        <img src={imgWait} alt=""></img>
      </div>
      <div
        className="row body-trending"
        style={{
          backgroundImage: `url(${backgroundTrending})`,
          marginTop: "-149px",
        }}
      >
        <div
          id="Indicators"
          className="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#Indicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#Indicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {firstList.map((item) => {
                const color = item.model.color[0];
                return (
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                      <div className="box-trending">
                        <img
                          src={color.images[0]}
                          className="d-block img-trending"
                          alt="..."
                        />
                      </div>
                      <div className="star-trending">
                        <img src={starTrending} alt="" width="65%"></img>
                      </div>
                    </div>
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="row txtNameTrending">
                        <p>{item.name}</p>
                      </div>
                      <div className="row txtTrending">
                        <p>{item.description}</p>
                      </div>
                      <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                          <Link
                            className="col"
                            key={`new-product${item._id}`}
                            to={`/detail/${item._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <button className="btnBuy">
                              Buy Now
                              <i className="bi bi-arrow-right-short"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>
                  </div>
                );
              })}
            </div>
            <div className="carousel-item">
              {secondList.map((item) => {
                const color = item.model.color[0];
                return (
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                      <div className="box-trending">
                        <img
                          src={color.images[0]}
                          className="d-block img-trending"
                          alt="..."
                        />
                      </div>
                      <div className="star-trending">
                        <img src={starTrending} alt="" width="65%"></img>
                      </div>
                    </div>
                    <div className="col" style={{ padding: "20px" }}>
                      <div className="row txtNameTrending">
                        <p>{item.name}</p>
                      </div>
                      <div className="row txtTrending">
                        <p>{item.description}</p>
                      </div>
                      <div className="row">
                        <div className="col-8"></div>
                        <div className="col-4">
                          <Link
                            className="col"
                            key={`new-product${item._id}`}
                            to={`/detail/${item._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <button className="btnBuy">
                              Buy Now
                              <i className="bi bi-arrow-right-short"></i>
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
