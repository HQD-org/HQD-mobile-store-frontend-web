import React from "react";

const Filter = (props) => {
  const { setStatus, status } = props;
  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="row">
      {/* <div className="col-3">
        <input className="form-control" type="search" placeholder="Search" />
      </div> */}
      <div className="col-3">
        <select
          className="form-select"
          value={status}
          onChange={(e) => onStatusChange(e)}
        >
          <option value="wait">Chờ xác nhận</option>
          <option value="confirmed">Chờ lấy hàng</option>
          <option value="delivering">Đang giao hàng</option>
          <option value="delivered">Giao thành công</option>
          <option value="cancel">Đã hủy</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
