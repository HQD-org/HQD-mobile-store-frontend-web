import React, { useState } from "react";
import AdminMenu from "../../common/components/AdminMenu";
import AddProductFragment from "./fragments/AddProduct";
import BrandFragment from "./fragments/Brand";
import ModelFragment from "./fragments/Model";
const Admin = () => {
  const [toggleBrand, setToggleBrand] = useState(true);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleAddProduct, setToggleAddProduct] = useState(false);
  const toggle = (type) => {
    switch (type) {
      case "brand":
        if (toggleBrand) break;
        setToggleBrand(true);
        setToggleModel(false);
        setToggleAddProduct(false);
        break;
      case "model":
        if (toggleModel) break;
        setToggleBrand(false);
        setToggleModel(true);
        setToggleAddProduct(false);
        break;
      case "add-product":
        if (toggleAddProduct) break;
        setToggleBrand(false);
        setToggleModel(false);
        setToggleAddProduct(true);
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
