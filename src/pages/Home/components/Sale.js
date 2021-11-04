import React from "react";
import backgroundSale from "../../../common/images/sale.jpg";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";

const Sale = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row" style={{ textAlign: "center" }}>
        <i class="bi bi-brightness-alt-high-fill"></i>
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

        <div class="row row-cols-1 row-cols-md-4 g-4 group-promotion">
          <div class="col">
            <div class="card h-100 card-sale">
              <div className="img-pro">
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
                <h5 class="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-sale">
              <div className="img-pro">
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
                <h5 class="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-sale">
              <div className="img-pro">
                {" "}
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
                <h5 class="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-sale">
              <div className="img-pro">
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
                <h5 class="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
