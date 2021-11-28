import React from "react";
import "../../../common/css/ProductHome.Style.css";

const ProductFilter = () => {
  return (
    <form>
      <div className="row filter-list">
        <div className="col-2 brand-list">
          <select className="form-select" aria-label="select-brand">
            <option selected>Brand</option>
            <option value="1">Tất cả</option>
            <option value="2">Oppo</option>
            <option value="3">Samsung</option>
            <option value="4">Apple</option>
          </select>
        </div>
        <div className="col-2 capacity-list">
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
        <div className="col-2 operating-system-list">
          <select className="form-select" aria-label="select-operating-system">
            <option selected>Operating System</option>
            <option value="1">iOS</option>
            <option value="2">Android</option>
          </select>
        </div>
        <div className="col-2 price-list">
          <select className="form-select" aria-label="select-price">
            <option selected>Price</option>
            <option value="1">Dưới 2m</option>
            <option value="2">2m - 5m</option>
            <option value="3">5m - 10m</option>
            <option value="4">Trên 10m</option>
          </select>
        </div>
        <div className="col-2">
          <button className="btnfilter-home" type="submit">
            Filter
          </button>
        </div>
      </div>
      <div className="row mt-3" style={{ alignItems: "center" }}>
        <div className="col-6">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-3">
              <p>
                <strong>20 Điện thoại</strong>
              </p>
            </div>
            <div className="col-2">
              <div class="form-check">
                <input
                  name="radioPro"
                  class="form-check-input"
                  type="radio"
                  id="trendingCheckbox"
                />
                <label class="form-check-label" for="trendingCheckbox">
                  Trending
                </label>
              </div>
            </div>
            <div className="col-2">
              <div class="form-check">
                <input
                  name="radioPro"
                  class="form-check-input"
                  type="radio"
                  id="newCheckbox"
                />
                <label class="form-check-label" for="newCheckbox">
                  New
                </label>
              </div>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <div className="col">
          <div className="row" style={{ justifyContent: "flex-start" }}>
            <div className="col-8"></div>
            <div className="col-3 sort-list">
              <select className="form-select" aria-label="sort">
                <option selected>Sort</option>
                <option value="1">Giá giảm</option>
                <option value="2">Giá tăng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductFilter;
