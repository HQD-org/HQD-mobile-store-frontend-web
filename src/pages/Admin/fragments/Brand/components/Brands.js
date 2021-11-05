import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState } from "react";
import "../../../../../common/css/Brand.Style.css";
import BrandEditor from "./BrandEditor";
import BrandCard from "./BrandCard";
const Brands = (props) => {
  const { listBrand } = props;
  const [currentBrand, setCurrentBrand] = useState({});
  const [modal, setModal] = useState(false);
  const toggle = (index) => {
    if (index || index === 0) setCurrentBrand(listBrand[index]);
    setModal(!modal);
  };

  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ marginTop: "15px" }}
    >
      <BrandCard list={listBrand} toggle={toggle} />
      <BrandEditor
        modal={modal}
        toggle={toggle}
        option={false}
        brand={currentBrand}
      />
    </div>
  );
};

export default Brands;
