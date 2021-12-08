import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  capacityList,
  priceList,
  // osList,
  ramList,
} from "../../../common/constants/ListSelect";
import "../../../common/css/ProductHome.Style.css";
import { renderOptionSelect } from "../../../common/utils/helper";

const ProductFilter = (props) => {
  const { brand, ram, capacity, price, sort, onChangeFilter, filterProduct } =
    props;
  const brands = useSelector((state) => state.brand.list);
  const pagination = useSelector((state) => state.product.pagination);
  const [filterType, setFilterType] = useState("new");
  const onFilterRadioChange = (e, type) => {
    setFilterType(e.target.value);
    onChangeFilter(e, type);
  };
  return (
    <>
      <div className="row filter-list">
        <div className="col-2 brand-list">
          <select
            className="form-select"
            aria-label="select-brand"
            value={brand}
            onChange={(e) => onChangeFilter(e, "brand")}
          >
            <option value={"all"}>Brand</option>
            {renderOptionSelect(brands)}
          </select>
        </div>
        <div className="col-2 capacity-list">
          <select
            className="form-select"
            aria-label="select-capacity"
            value={capacity}
            onChange={(e) => onChangeFilter(e, "capacity")}
          >
            <option value={"all"}>Capacity</option>
            {renderOptionSelect(capacityList)}
          </select>
        </div>
        <div className="col-1 ram-list">
          <select
            className="form-select"
            aria-label="select-ram"
            value={ram}
            onChange={(e) => onChangeFilter(e, "ram")}
          >
            <option value={"all"}>RAM</option>
            {renderOptionSelect(ramList)}
          </select>
        </div>
        {/* <div className="col-2 operating-system-list">
          <select
            className="form-select"
            aria-label="select-operating-system"
            value={operating}
            onChange={(e) => onChangeFilter(e, "operating")}
          >
            <option value={"all"}>Operating System</option>
            {renderOptionSelect(osList)}
          </select>
        </div> */}
        <div className="col-2 price-list">
          <select
            className="form-select"
            aria-label="select-price"
            value={price}
            onChange={(e) => onChangeFilter(e, "price")}
          >
            <option value={"all"}>Price</option>
            {renderOptionSelect(priceList)}
          </select>
        </div>
        <div className="col-2">
          <button
            className="btnfilter-home"
            onClick={() => filterProduct(1, pagination.itemPerPage)}
          >
            Filter
          </button>
        </div>
      </div>
      <div className="row mt-3" style={{ alignItems: "center" }}>
        <div className="col-6">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-3"></div>
            <div className="col-2">
              <div className="form-check">
                <input
                  name="radioPro"
                  className="form-check-input"
                  type="radio"
                  id="trendingCheckbox"
                  value="trend"
                  onChange={(e) => onFilterRadioChange(e, "trend")}
                  checked={filterType === "trend"}
                />
                <label className="form-check-label" htmlFor="trendingCheckbox">
                  Trending
                </label>
              </div>
            </div>
            <div className="col-2">
              <div className="form-check">
                <input
                  name="radioPro"
                  className="form-check-input"
                  type="radio"
                  id="newCheckbox"
                  value="new"
                  onChange={(e) => onFilterRadioChange(e, "new")}
                  checked={filterType === "new"}
                />
                <label className="form-check-label" htmlFor="newCheckbox">
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
              <select
                className="form-select"
                aria-label="sort"
                defaultValue={sort}
                onChange={(e) => onChangeFilter(e, "sort")}
              >
                <option value="all">Sort</option>
                <option value="-1">Giá giảm</option>
                <option value="1">Giá tăng</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;
