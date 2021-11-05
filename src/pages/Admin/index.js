import React, { useState } from "react";
import AdminMenu from "../../common/components/AdminMenu";
import AddModelFragment from "./fragments/AddModel";
import BrandFragment from "./fragments/Brand";
import ModelFragment from "./fragments/Model";

const AdminPage = () => {
  const [toggleBrand, setToggleBrand] = useState(true);
  const [toggleModel, setToggleModel] = useState(false);
  const [toggleAddModel, setToggleAddModel] = useState(false);
  const toggle = (type) => {
    switch (type) {
      case "brand":
        if (toggleBrand) break;
        setToggleBrand(true);
        setToggleModel(false);
        setToggleAddModel(false);

        break;
      case "model":
        if (toggleModel) break;
        setToggleBrand(false);
        setToggleModel(true);
        setToggleAddModel(false);

        break;
      case "add model":
        if (toggleAddModel) break;
        setToggleBrand(false);
        setToggleModel(false);
        setToggleAddModel(true);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu toggle={toggle} />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container">
              {toggleBrand && <BrandFragment />}
              {toggleModel && <ModelFragment />}
              {toggleAddModel && <AddModelFragment />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
