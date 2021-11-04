import React from "react";
import AdminHeader from "../../common/components/AdminHeader";
import AdminMenu from "../../common/components/AdminMenu";
import AddProductForm from "./components/AddProductForm";
import AddProductHeader from "./components/AddProductHeader";

const AddProductPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu />
        </div>
        <div className="col">
          <div className="container-fluid">
            <AddProductHeader />
            <AddProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
