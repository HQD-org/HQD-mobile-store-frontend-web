import React from "react";
import Brands from "./components/Brands";
import HeaderBrand from "./components/HeaderBrand";

const FragmentBrandPage = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          {" "}
          <HeaderBrand />
          <Brands />
        </div>
      </div>
    </div>
  );
};

export default FragmentBrandPage;
