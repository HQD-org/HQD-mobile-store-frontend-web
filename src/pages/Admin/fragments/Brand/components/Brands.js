import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import { useSelector } from "react-redux";
import "../../../../../common/css/Brand.Style.css";
import BrandCard from "./BrandCard";

const Brands = (props) => {
  const { setCurrentBrand, setModal, modal, setOption } = props;
  const listBrand = useSelector((state) => state.brand.list);
  const toggle = (index) => {
    if (index || index === 0) {
      setCurrentBrand(listBrand[index]);
      setOption(false);
    }
    setModal(!modal);
  };

  return (
    <div
      className="row row-cols-1 row-cols-md-4 g-4"
      style={{ marginTop: "15px" }}
    >
      <BrandCard list={listBrand} toggle={toggle} />
    </div>
  );
};

export default Brands;
