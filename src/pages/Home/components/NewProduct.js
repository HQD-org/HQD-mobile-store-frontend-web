import React from "react";
import imgXiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import imgFrame from "../../../common/images/frameNew.jpg";

const NewProduct = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <form>
        {" "}
        <div className="row filter-list">
          <div className="col-1 brand-list">
            <select className="form-select" aria-label="select-brand">
              <option selected>Brand</option>
              <option value="1">Oppo</option>
              <option value="2">Samsung</option>
              <option value="3">Apple</option>
            </select>
          </div>
          <div className="col-1 capacity-list">
            <select className="form-select" aria-label="select-capacity">
              <option selected>Capacity</option>
              <option value="1">32 Gb</option>
              <option value="2">128 GB</option>
              <option value="3">252 GB</option>
            </select>
          </div>
          <div className="col-1 ram-list">
            <select className="form-select" aria-label="select-ram">
              <option selected>RAM</option>
              <option value="1">2 GB</option>
              <option value="2">3 GB</option>
              <option value="3">4 GB</option>
            </select>
          </div>
          <div className="col-1 operating-system-list">
            <select
              className="form-select"
              aria-label="select-operating-system"
            >
              <option selected>Operating System</option>
              <option value="1">iOS</option>
              <option value="2">Android</option>
            </select>
          </div>
          <div className="col-1 price-list">
            <select className="form-select" aria-label="select-price">
              <option selected>Price</option>
              <option value="1">1m - 2m</option>
              <option value="2">2m - 5m</option>
              <option value="3">5m - 10m</option>
            </select>
          </div>
          <div className="col-2">
            <button className="btnfilter-home" type="submit">
              Filter
            </button>
          </div>
        </div>
      </form>
      <div className="row" style={{ alignItems: "baseline" }}>
        <div className="col-1">
          <h6>
            NEW <br /> PRODUCTS
          </h6>
          <div className="badge-ribbon"></div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="row" style={{ justifyContent: "center" }}>
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
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
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
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
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
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
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
                <h5 className="card-title">Xiaomi Redmi Note 9 4GB-128GB</h5>
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

export default NewProduct;
