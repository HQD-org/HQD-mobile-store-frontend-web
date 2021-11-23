/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductFilter from "./components/Filter";
import ProductCard from "./components/ProductCard";

const ProductPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row mt-3 mb-3">
          <ProductFilter />
        </div>
        <hr />

        <div style={{ marginTop: "20px" }}>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="row row-cols-1 row-cols-md-5 g-1 group-promotion">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
