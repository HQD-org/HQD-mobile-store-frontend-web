/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AdminMenu from "../../common/components/AdminMenu";
import AddModelFragment from "./fragments/AddModel";
import AddProductFragment from "./fragments/AddProduct";
import BrandFragment from "./fragments/Brand";
import ModelFragment from "./fragments/Model";
import ProductFragment from "./fragments/Products";

const AdminPage = (props) => {
  const [toggleBrand, setToggleBrand] = useState(false);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleAddModel, setToggleAddModel] = useState(true);
  const [toggleAddProduct, setToggleAddProduct] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const toggleRef = useRef("add model");
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
      case "add model":
        setToggleAddModel(false);
        break;
      case "add product":
        setToggleAddProduct(false);
        break;
      case "product":
        setToggleProduct(false);
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
      case "add model":
        setToggleAddModel(true);
        toggleRef.current = "add model";
        break;
      case "add product":
        setToggleAddProduct(true);
        toggleRef.current = "add product";
        break;
      case "product":
        setToggleProduct(true);
        toggleRef.current = "product";
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
              {toggleAddModel && <AddModelFragment />}
              {toggleAddProduct && <AddProductFragment />}
              {toggleProduct && <ProductFragment />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
