import React from "react";
import "../../../common/css/Brand.Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoiPhone from "../../../common/images/iPhone-logo.jpg";
import logoOppo from "../../../common/images/oppo-logo.jpg";
import logoSamsung from "../../../common/images/samsung-logo.png";

const Brands = () => {
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4" style={{ marginTop: "15px" }}>
      <div class="col">
        <div class="card h-100 card-brand">
          <div className="logo-brand">
            <img src={logoSamsung} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">SAMSUNG</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Hoạt động</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand">
          <div className="logo-brand">
            <img src={logoiPhone} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">iPhone</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Hoạt động</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand">
          <div className="logo-brand">
            <img src={logoOppo} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">OPPO</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Ngưng kinh doanh</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
