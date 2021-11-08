import React, { useState } from "react";
import AdminMenu from "../../common/components/AdminMenu";
import AddProductFragment from "./fragments/AddProduct";
import BrandFragment from "./fragments/Brand";
import ModelFragment from "./fragments/Model";
import ProductFragment from "./fragments/Products";
const Admin = () => {
  const [toggleBrand, setToggleBrand] = useState(true);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleAddProduct, setToggleAddProduct] = useState(false);
  const [toggleProduct, setToggleProduct] = useState(false);
  const toggle = (type) => {
    switch (type) {
      case "brand":
        if (toggleBrand) break;
        setToggleBrand(true);
        setToggleModel(false);
        setToggleAddProduct(false);
        setToggleProduct(false);
        break;
      case "model":
        if (toggleModel) break;
        setToggleBrand(false);
        setToggleModel(true);
        setToggleAddProduct(false);
        setToggleProduct(false);
        break;
      case "add-product":
        if (toggleAddProduct) break;
        setToggleBrand(false);
        setToggleModel(false);
        setToggleAddProduct(true);
        setToggleProduct(false);
        break;
      case "product":
        if (toggleProduct) break;
        setToggleBrand(false);
        setToggleModel(false);
        setToggleAddProduct(false);
        setToggleProduct(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu toggle={toggle} />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container">
              {toggleBrand && <BrandFragment />}
              {toggleModel && <ModelFragment />}
              {toggleAddProduct && <AddProductFragment />}
              {toggleProduct && <ProductFragment />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
