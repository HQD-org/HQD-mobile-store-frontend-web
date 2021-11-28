import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import imgFrame from "../../../common/images/frameNew.jpg";
import newIcon from "../../../common/images/new.png";
import { IoArrowForwardCircle, IoArrowBackCircle } from "react-icons/io5";

const NewProduct = () => {
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
          class="carousel slide"
          data-bs-touch="false"
          data-bs-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                      <h5 className="card-text pre-price">5.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 card-newPro">
                    <div
                      className="img-pro"
                      style={{
                        backgroundImage: `url(${imgFrame})`,
                        borderRadius: "6px",
                        backgroundSize: "contain",
                      }}
                    >
                      {" "}
                      <img
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                      <h5 className="card-text pre-price">5.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                      <h5 className="card-text pre-price">5.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 card-newPro">
                    <div
                      className="img-pro"
                      style={{
                        backgroundImage: `url(${imgFrame})`,
                        borderRadius: "6px",
                        backgroundSize: "contain",
                      }}
                    >
                      {" "}
                      <img
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
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
                        src={imgXiaomi}
                        className="card-img-top imgNew"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">
                        Xiaomi Redmi Note 9 4GB-128GB
                      </h5>
                      <h5 className="card-text now-price">4.940.000 ₫</h5>
                      <h5 className="card-text pre-price">5.940.000 ₫</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselNewProduct"
            data-bs-slide="prev"
          >
            <IoArrowBackCircle aria-hidden="true" className="icon-prev" />
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselNewProduct"
            data-bs-slide="next"
          >
            <IoArrowForwardCircle aria-hidden="true" className="icon-next" />
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
