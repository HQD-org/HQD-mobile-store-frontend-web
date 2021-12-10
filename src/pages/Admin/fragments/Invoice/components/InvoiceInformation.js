/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { FcViewDetails } from "react-icons/fc";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "../../../../../common/css/Payment.Style.css";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../../../common/utils/helper";

const InvoiceInformation = (props) => {
  const { modal, setModal, currentItem } = props;
  const invoices = useSelector((state) => state.order.list);
  const [order, setOrder] = useState("");
  const [receiveInfo, setReceiveInfo] = useState("");
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    if (currentItem >= 0) {
      setOrder(invoices[currentItem]);
    }
  }, [currentItem]);

  useEffect(() => {
    if (order) {
      setReceiveInfo(order.receiveInfo);
    }
  }, [order]);
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
          <div className="row">
            <div className="col-6">
              <h6>Địa chỉ nhận hàng</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo ? receiveInfo.address : ""}</p>
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
              <p style={{ color: "#3FA5EF" }}>MKM27112021</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Tạm tính</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">Quên lưu field này rầu =)) ₫</p>
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
