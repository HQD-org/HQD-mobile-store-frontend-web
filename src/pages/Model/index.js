import React from "react";
import AdminHeader from "../../common/components/AdminHeader";
import AdminMenu from "../../common/components/AdminMenu";
import Model from "./components/Model";
import ModelHeader from "./components/ModelHeader";

const ModelPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container"></div>
            <ModelHeader />
            <Model />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelPage;
