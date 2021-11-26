/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AdminMenu from "../../common/components/AdminMenu";
import AddProductFragment from "./fragments/AddProduct";
import BrandFragment from "./fragments/Brand";
import ModelFragment from "./fragments/Model";
import ProductFragment from "./fragments/Products";
import UserFragment from "./fragments/User";
import BranchFragment from "./fragments/Branch";
import CouponFragment from "./fragments/Coupon";
import InvoiceFragment from "./fragments/Invoice";

const AdminPage = (props) => {
  const [toggleBrand, setToggleBrand] = useState(false);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleAddProduct, setToggleAddProduct] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleUser, setToggleUser] = useState(true);
  const [toggleBranch, setToggleBranch] = useState(false);
  const [toggleCoupon, setToggleCoupon] = useState(false);
  const [toggleInvoice, setToggleInvoice] = useState(false);
  const toggleRef = useRef("user");
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(false));
  }, []);
  const disabledToggle = (ref) => {
    switch (ref) {
      case "brand":
        setToggleBrand(false);
        break;
      case "model":
        setToggleModel(false);
        break;
      case "add product":
        setToggleAddProduct(false);
        break;
      case "product":
        setToggleProduct(false);
        break;
      case "user":
        setToggleUser(false);
        break;
      case "branch":
        setToggleBranch(false);
        break;
      case "coupon":
        setToggleCoupon(false);
        break;
      case "invoice":
        setToggleInvoice(false);
        break;
      default:
        break;
    }
  };

  const toggle = (type) => {
    if (toggleRef.current === type) return;
    disabledToggle(toggleRef.current);
    switch (type) {
      case "brand":
        setToggleBrand(true);
        toggleRef.current = "brand";
        break;
      case "model":
        setToggleModel(true);
        toggleRef.current = "model";
        break;
      case "add product":
        setToggleAddProduct(true);
        toggleRef.current = "add product";
        break;
      case "product":
        setToggleProduct(true);
        toggleRef.current = "product";
        break;
      case "user":
        setToggleUser(true);
        toggleRef.current = "user";
        break;
      case "branch":
        setToggleBranch(true);
        toggleRef.current = "branch";
        break;
      case "coupon":
        setToggleCoupon(true);
        toggleRef.current = "coupon";
        break;
      case "invoice":
        setToggleInvoice(true);
        toggleRef.current = "invoice";
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="row">
        <div
          className="col-2"
          style={{ paddingRight: "4.5px", background: "rgb(38, 53, 68)" }}
        >
          <AdminMenu toggle={toggle} />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container">
              {toggleBrand && <BrandFragment />}
              {toggleModel && <ModelFragment />}
              {toggleAddProduct && <AddProductFragment />}
              {toggleProduct && <ProductFragment />}
              {toggleUser && <UserFragment />}
              {toggleBranch && <BranchFragment />}
              {toggleCoupon && <CouponFragment />}
              {toggleInvoice && <InvoiceFragment />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
