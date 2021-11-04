import React from "react";
import AdminHeader from "../../common/components/AdminHeader";
import AdminMenu from "../../common/components/AdminMenu";
import Brands from "./components/Brands";
import HeaderBrand from "./components/HeaderBrand";

const BrandPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container">
              <HeaderBrand />
              <Brands />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
