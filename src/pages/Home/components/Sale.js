import React from "react";
import backgroundSale from "../../../common/images/sale.jpg";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import discountImg from "../../../common/images/discount-tag.jpg";

const Sale = () => {
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
          <div className="col">
            <div className="card h-100 card-sale">
              <div className="discount-tag">
                <img src={discountImg} className="imgDiscount" alt="..." />
              </div>
              <div className="img-pro">
                <img
                  src={imgXiaomi}
                  className="card-img-top pro-sale"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 className="card-text now-price">4.940.000 ₫</h5>
                <h5 className="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-sale">
              <div className="discount-tag">
                <img src={discountImg} className="imgDiscount" alt="..." />
              </div>
              <div className="img-pro">
                <img
                  src={imgXiaomi}
                  className="card-img-top pro-sale"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 className="card-text now-price">4.940.000 ₫</h5>
                <h5 className="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-sale">
              <div className="discount-tag">
                <img src={discountImg} className="imgDiscount" alt="..." />
              </div>
              <div className="img-pro">
                <img
                  src={imgXiaomi}
                  className="card-img-top pro-sale"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 className="card-text now-price">4.940.000 ₫</h5>
                <h5 className="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-sale">
              <div className="discount-tag">
                <img src={discountImg} className="imgDiscount" alt="..." />
              </div>
              <div className="img-pro">
                <img
                  src={imgXiaomi}
                  className="card-img-top pro-sale"
                  alt="..."
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
                <h5 className="card-text now-price">4.940.000 ₫</h5>
                <h5 className="card-text pre-price">5.940.000 ₫</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
