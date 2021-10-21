import React from "react";
import AdminHeader from "../../common/components/AdminHeader";
import AdminMenu from "../../common/components/AdminMenu";
import AddModelForm from "./components/AddModelForm";
import HeaderAddModel from "./components/HeaderAddModel";

const AddModelPage = () => {
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
              <HeaderAddModel />
              <AddModelForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModelPage;
