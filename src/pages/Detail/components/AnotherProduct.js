import React from "react";
import SameProduct from "./SameProduct";

const AnotherProduct = () => {
  return (
    <div>
      <div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion mb-3">
            <SameProduct />
            <SameProduct />
            <SameProduct />
            <SameProduct />
            <SameProduct />
          </div>
          <div className="row mb-3 mt-2" style={{ textAlign: "center" }}>
            <div>
              <button type="button" className="btnAnotherProduct">
                Khám phá các sản phẩm khác
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherProduct;
