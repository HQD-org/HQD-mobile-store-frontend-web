import React from "react";
import AddProductForm from "./components/AddProductForm";
import AddProductHeader from "./components/AddProductHeader";
import "../../../../common/css/Product.Style.css";

const AddProductFragment = React.memo(() => {
  return (
    <div>
      <AddProductHeader />
      <AddProductForm />
    </div>
  );
});

export default AddProductFragment;
