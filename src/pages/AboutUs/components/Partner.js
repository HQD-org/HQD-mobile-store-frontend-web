import React from "react";
import { useSelector } from "react-redux";
import { getAllBrandAction } from "../../../redux/actions/Brand/brandAction";

const Partner = () => {
  const listBrand = useSelector((state) => state.brand.list);
  return (
    <div className="row mb-3 mt-3">
      <div
        className="row"
        style={{ textAlign: "center", marginBottom: "50px", color: "#113c72" }}
      >
        <h1>Brands we work with</h1>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        {listBrand.map((brand) => {
          return brand.status === "active" ? (
            <div
              className="col-3"
              key={brand._id}
              style={{ textAlign: "center" }}
            >
              <img src={brand.image} alt="" width="150px" height="150px" />
            </div>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default Partner;
