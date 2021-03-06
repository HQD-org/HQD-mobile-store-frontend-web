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
        ????n h??ng
      </ModalHeader>
      <ModalBody>
        <div className="form-deliveryInfor">
          <div className="row">
            <div className="col-6">
              <h6>H??? t??n ng?????i nh???n</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo ? receiveInfo.receiver : ""}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>S??? ??i???n tho???i ng?????i nh???n</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo ? receiveInfo.phone : ""}</p>
            </div>
          </div>
          {receiveInfo.receiveAt === "at store" ? (
            <div className="row">
              <div className="col-6">
                <h6>Chi nh??nh nh???n h??ng</h6>
              </div>
              <div className="col-6">
                <p>{address}</p>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-6">
                <h6>?????a ch??? nh???n h??ng</h6>
              </div>
              <div className="col-6">
                <p>{address}</p>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-6">
              <h6>H??nh th???c thanh to??n</h6>
            </div>
            <div className="col-6">
              <p>{receiveInfo.status === "cod" ? "COD" : "PayPal"}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>????n h??ng</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <ProductList products={order.products} />
          </div>
          <div className="row mb-3">
            <div className="col-4">
              <h6>M?? khuy???n m??i</h6>
            </div>
            <div className="col-5">
              <p style={{ color: "#3FA5EF" }}>{order.coupon || ""}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>T???m t??nh</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">{estimatePrice} ???</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Ph?? v???n chuy???n</h6>
            </div>
            <div className="col-6">
              <p className="txtprice">30.000???</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>Khuy???n m??i</h6>
            </div>
            <div className="col-6">
              <p className="txtprice coupon">- {discount}???</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>T???ng t??nh</h6>
            </div>
            <div className="col-6">
              <p className="txtprice totalPrice">
                {order ? numberWithCommas(order.totalPrice) : 0} ???
              </p>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default InvoiceInformation;
