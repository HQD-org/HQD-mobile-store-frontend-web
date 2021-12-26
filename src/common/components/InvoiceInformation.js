/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FcViewDetails } from "react-icons/fc";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "../css/Payment.Style.css";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/helper";

const InvoiceInformation = (props) => {
  const { modal, setModal, currentItem, setCurrentItem } = props;
  const invoices = useSelector((state) => state.order.list);
  const [order, setOrder] = useState("");
  const [receiveInfo, setReceiveInfo] = useState("");
  const [estimatePrice, setEstimatePrice] = useState("0");
  const [discount, setDiscount] = useState("0");
  const [address, setAddress] = useState("");
  const toggle = () => {
    setModal(false);
    setCurrentItem(-1);
  };

  useEffect(() => {
    if (currentItem >= 0) {
      setOrder(invoices[currentItem]);
    }
  }, [currentItem]);

  useEffect(() => {
    if (order) {
      const estimate = order.products.reduce(
        (total, p) => total + p.price * p.quantity,
        0
      );
      setEstimatePrice(numberWithCommas(estimate));
      setReceiveInfo(order.receiveInfo);
    }
  }, [order]);

  useEffect(() => {
    const estimatePriceInt = parseInt(estimatePrice.replace(/[^0-9]/g, ""));
    if (estimatePriceInt > 0) {
      setDiscount(30000 + estimatePriceInt - order.totalPrice);
    }
  }, [estimatePrice]);

  useEffect(() => {
    if (receiveInfo) {
      if (receiveInfo.receiveAt === "at store") {
        const addr = order.branch.address;
        setAddress(
          addr.detail +
            ", " +
            addr.village +
            ", " +
            addr.district +
            ", " +
            addr.province
        );
      } else {
        setAddress(receiveInfo.address);
      }
    }
  }, [receiveInfo]);

  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-invoice">
      <ModalHeader className="close-x" toggle={toggle}>
        <FcViewDetails fontSize="30px" />
        Đơn hàng
      </ModalHeader>
      <ModalBody>
        <div className="form-deliveryInfor">
          <div className="row">
            <div className="col-6">
              <h6>Họ tên người nhận</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo ? receiveInfo.receiver : ""}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Số điện thoại người nhận</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo ? receiveInfo.phone : ""}</p>
            </div>
          </div>
          {receiveInfo.receiveAt === "at store" ? (
            <div className="row">
              <div className="col-6">
                <h6>Chi nhánh nhận hàng</h6>
              </div>
              <div className="col-6">
                <p>{address}</p>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-6">
                <h6>Địa chỉ nhận hàng</h6>
              </div>
              <div className="col-6">
                <p>{address}</p>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-6">
              <h6>Hình thức thanh toán</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo.status === "cod" ? "COD" : "PayPal"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Đơn hàng</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <ProductList products={order.products} />
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <h6>Mã khuyến mãi</h6>
            </div>
            <div className="col-5">
              <p style={{ color: "#3FA5EF" }}>{order.coupon || ""}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Tạm tính</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">{estimatePrice} ₫</p>
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
              <p className="txtprice coupon">- {discount}₫</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Tổng tính</h6>
            </div>
            <div className="col-6">
              <p className="txtprice totalPrice">
                {order ? numberWithCommas(order.totalPrice) : 0} ₫
              </p>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default InvoiceInformation;
