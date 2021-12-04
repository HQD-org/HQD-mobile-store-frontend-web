import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../common/utils/helper";

const InfoOrder = () => {
  const itemsInCart = useSelector((state) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = useState("0");
  const [totalPrice, setTotalPrice] = useState("30000");
  const [estimatePrice, setEstimatePrice] = useState("0");

  useEffect(() => {
    if (itemsInCart.length > 0) {
      const total = itemsInCart.reduce((init, item) => {
        return init + item.price * item.quantity;
      }, 0);
      setTotalPrice(numberWithCommas(total + 30000));
      setEstimatePrice(numberWithCommas(total));
      return;
    }

    setTotalPrice("0");
  }, [itemsInCart]);

  useEffect(() => {
    if (itemsInCart.length > 0) {
      const total = itemsInCart.reduce((init, item) => {
        return init + item.quantity;
      }, 0);
      setTotalQuantity(total);
      return;
    }

    setTotalQuantity("0");
  }, [itemsInCart]);
  return (
    <div className="summary">
      <div className="row">
        <h5>SUMMARY</h5>
      </div>
      <hr style={{ marginTop: "20px" }} />
      <div className="row">
        <h6>
          Tổng <span style={{ color: "red" }}>{totalQuantity}</span> sản phẩm
        </h6>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Tạm tính: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>{estimatePrice}₫</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h6>Phí ship: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>30.000₫</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h6>Tổng ước tính: </h6>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <p>{totalPrice}₫</p>
        </div>
      </div>
      <div className="row" style={{ textAlign: "center" }}>
        <Link to="/payment">
          <button className="btnCheckout" type="submit">
            ĐẶT HÀNG NGAY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InfoOrder;
