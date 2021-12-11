import React, { useEffect, useState } from "react";
import { numberWithCommas } from "../../../common/utils/helper";
import ProductList from "./ProductList";

const Confirm = (props) => {
  const { dataStep1, dataStep2, setShowStep1, setShowStep3 } = props;
  const [address, setAddress] = useState(dataStep1.address);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setAddress(dataStep1.address);
  }, [dataStep1.address]);

  useEffect(() => {
    setTotalPrice(
      dataStep2.estimatePrice + dataStep2.shipPrice - dataStep2.discount
    );
  }, [dataStep2]);

  const previousStep = () => {
    setShowStep1(true);
  };

  const nextStep = () => {
    setShowStep3(true);
  };
  return (
    <div className="row mt-3 mb-3" style={{ justifyContent: "center" }}>
      <div className="col-6">
        <div className="form-deliveryInfor">
          <div className="row">
            <div className="col-6">
              <h6>Họ tên người nhận</h6>
            </div>
            <div className="col-6">
              <p>{dataStep1.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Số điện thoại người nhận</h6>
            </div>
            <div className="col-6">
              <p>{dataStep1.phone}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Địa chỉ nhận hàng</h6>
            </div>
            <div className="col-6">
              <p>
                {address.detail +
                  ", " +
                  address.village +
                  ", " +
                  address.district +
                  ", " +
                  address.province}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Phương thức thanh toán</h6>
            </div>
            <div className="col-6">
              <p>
                {dataStep1.paymentType === "cod"
                  ? "Thanh toán khi nhận hàng"
                  : "Paypal"}
              </p>
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
              <input
                className="form-control"
                type="text"
                style={{ height: "35px" }}
              />
            </div>
            <div className="col-3" style={{ textAlign: "end" }}>
              <button className="btnCoupon">Áp dụng</button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Tạm tính</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">
                {numberWithCommas(dataStep2.estimatePrice)}₫
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Phí vận chuyển</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">
                {numberWithCommas(dataStep2.shipPrice)}₫
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Khuyến mãi</h6>
            </div>
            <div className="col-6">
              <p className="txtprice coupon">{`- ${numberWithCommas(
                dataStep2.discount
              )}₫`}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Tổng tính</h6>
            </div>
            <div className="col-6">
              <p className="txtprice totalPrice">
                {numberWithCommas(totalPrice)}₫
              </p>
            </div>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-6">
            <button className="btnNext" onClick={previousStep}>
              Previous
            </button>
          </div>
          <div className="col-6">
            <button className="btnNext" onClick={nextStep}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
