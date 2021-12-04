import React from "react";

const Filter = () => {
  return (
    <div className="row">
      <div className="col-3">
        <input className="form-control" type="search" placeholder="Search" />
      </div>
      <div className="col-3">
        <select className="form-select">
          <option selected value="1">
            Tất cả
          </option>
          <option value="2">Chờ xác nhận</option>
          <option value="3">Chờ lấy hàng</option>
          <option value="4">Đang giao hàng</option>
          <option value="5">Giao thành công</option>
          <option value="6">Đã hủy</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
