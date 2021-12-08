import React from "react";
import ProductList from "./ProductList";
import "../../../common/css/Payment.Style.css";

const BillInformation = () => {
  return (
    <div className="form-deliveryInfor">
      <div className="row">
        <div className="col-6">
          <h6>Họ tên người nhận</h6>
        </div>
        <div className="col-6">
          <p>Một người nào đó</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Số điện thoại người nhận</h6>
        </div>
        <div className="col-6">
          <p>0123456789</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Địa chỉ nhận hàng</h6>
        </div>
        <div className="col-6">
          <p>Mặt trăng</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Đơn hàng</h6>
        </div>
      </div>
      <hr />
      <div className="row">
        <ProductList />
      </div>
      <div className="row mb-3">
        <div className="col-4">
          <h6>Mã khuyến mãi</h6>
        </div>
        <div className="col-5">
          <p style={{ color: "#3FA5EF" }}>MKM27112021</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Tạm tính</h6>
        </div>
        <div className="col-6">
          <p className="txtprice">7.999.999₫</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Phí vận chuyển</h6>
        </div>
        <div className="col-6">
          <p className="txtprice">30.000₫</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Khuyến mãi</h6>
        </div>
        <div className="col-6">
          <p className="txtprice coupon">- 10.000₫</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Tổng tính</h6>
        </div>
        <div className="col-6">
          <p className="txtprice totalPrice">7.989.999₫</p>
        </div>
      </div>
    </div>
  );
};

export default BillInformation;
