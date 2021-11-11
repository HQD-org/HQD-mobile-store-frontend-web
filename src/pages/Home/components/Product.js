import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";

const Product = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-2">
          <button className="product-header">SAMSUNG</button>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div class="row row-cols-1 row-cols-md-5 g-1 group-promotion">
          <div class="col">
            <div class="card h-100 card-newPro">
              <div className="img-pro">
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-newPro">
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
            <div class="card h-100 card-newPro">
              <div className="img-pro">
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-newPro">
              <div className="img-pro">
                {" "}
                <img src={imgXiaomi} class="card-img-top" alt="..." />
              </div>

              <div class="card-body">
                <h5 class="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 class="card-text now-price">4.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 card-newPro">
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

export default Product;
