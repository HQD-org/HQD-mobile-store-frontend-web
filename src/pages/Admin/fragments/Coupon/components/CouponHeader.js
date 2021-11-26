import React, { useState } from "react";
import "../../../../../common/css/Coupon.Style.css";
import { RiCoupon3Fill } from "react-icons/ri";
import { FormGroup } from "reactstrap";

const CouponHeader = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <RiCoupon3Fill className="icon-admin icon-coupon" />
            <span className="name-management">Coupon</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <form>
          <div className="row mb-3">
            <div className="col-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchTerm"
              />
            </div>
            <div className="col-2">
              <FormGroup>
                <select className="form-select" name="status">
                  <option value="all" selected dissable>
                    Status
                  </option>
                  <option value="kd">Khả dụng</option>
                  <option value="kkd">Không khả dụng</option>
                  <option value="hm">Hết mã</option>
                </select>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(CouponHeader);
