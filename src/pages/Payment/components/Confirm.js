/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toastNotify from "../../../common/toastify";
import { numberWithCommas } from "../../../common/utils/helper";
import { findByNameAction } from "../../../redux/actions/Coupon/couponAction";
import ProductList from "./ProductList";

const Confirm = (props) => {
  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.coupon.detail);
  const {
    dataStep1,
    dataStep2,
    setShowStep1,
    setShowStep3,
    setDataStep2,
    showStep2,
  } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const [couponName, setCouponName] = useState("");
  const [address, setAddress] = useState(dataStep1.address);
  const listBranches = useSelector((state) => state.branch.list);

  const previousStep = () => {
    setShowStep1(true);
  };

  const nextStep = () => {
    setShowStep3(true);
  };

  const onChangeCoupon = (e) => {
    setCouponName(e.target.value);
  };

  const findCoupon = async () => {
    if (!couponName) return;
    await dispatch(findByNameAction({ name: couponName }));
  };

  useEffect(() => {
    if (!showStep2) return;
    if (coupon) {
      if (coupon._id) {
        if (dataStep2.estimatePrice >= coupon.minPriceToApply) {
          if (coupon.discountBy === "amount") {
            setDataStep2({
              ...dataStep2,
              discount: coupon.discountValue,
            });
            return;
          }
          let discount = dataStep2.estimatePrice * (coupon.discountValue / 100);
          if (discount > coupon.maxDiscount) discount = coupon.maxDiscount;
          setDataStep2({
            ...dataStep2,
            discount,
          });
          return;
        }
        toastNotify("Số tiền mua hàng không đủ để áp dụng mã giảm giá");
        return;
      }
    }
  }, [coupon]);

  useEffect(() => {
    if (!showStep2) return;
    if (dataStep1.idBranch !== "1") {
      const findBranch = listBranches.find(
        (branch) => branch._id === dataStep1.idBranch
      );
      setAddress(findBranch.address);
    } else {
      setAddress(dataStep1.address);
    }
  }, [dataStep1.address, dataStep1.idBranch]);

  useEffect(() => {
    if (!showStep2) return;
    setTotalPrice(
      dataStep2.estimatePrice + dataStep2.shipPrice - dataStep2.discount
    );
  }, [dataStep2]);

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
          {dataStep1.receiveType === "at store" ? (
            <div className="row">
              <div className="col-6">
                <h6>Chi nhánh đặt hàng</h6>
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
          ) : (
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
          )}

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
                value={couponName}
                onChange={onChangeCoupon}
                className="form-control"
                type="text"
                style={{ height: "35px" }}
              />
            </div>
            <div className="col-3" style={{ textAlign: "end" }}>
              <button className="btnCoupon" type="button" onClick={findCoupon}>
                Áp dụng
              </button>
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
