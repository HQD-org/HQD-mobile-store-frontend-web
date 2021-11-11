import React from "react";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/ProductList";
const ProductFragment = React.memo(() => {
  return (
    <>
      <ProductHeader />
      <ProductList />
    </>
  );
});

export default ProductFragment;
