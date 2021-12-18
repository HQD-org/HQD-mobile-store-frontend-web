import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../common/utils/helper";

const InfoOrder = () => {
  const itemsInCart = useSelector((state) => state.cart.items);
  const [totalPrice, setTotalPrice] = useState("30000");
  const [estimatePrice, setEstimatePrice] = useState("0");
  const [totalQuantity, setTotalQuantity] = useState("0");

  useEffect(() => {
    if (itemsInCart.length > 0) {
      const total = itemsInCart.reduce((init, item) => {
        return init + item.price * item.quantity;
      }, 0);
      const totalProduct = itemsInCart.reduce((init, item) => {
        return init + item.quantity;
      }, 0);
      setTotalQuantity(totalProduct);
      setTotalPrice(numberWithCommas(total + 30000));
      setEstimatePrice(numberWithCommas(total));
      return;
    }

    setTotalQuantity("0");
    setTotalPrice("0");
  }, [itemsInCart]);

  return (
    <div className="summary" style={{ marginBottom: "1rem" }}>
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
        <Link to={itemsInCart.length > 0 ? "/payment" : "#"}>
          <button className="btnCheckout">ĐẶT HÀNG NGAY</button>
        </Link>
      </div>
    </div>
  );
};

export default InfoOrder;
