import React from "react";
import AdminMenu from "../../common/components/AdminMenu";
import AppFooter from "../../common/components/AppFooter";
import AppHeader from "../../common/components/AppHeader";
import Model from "./components/Model";
import ModelHeader from "./components/ModelHeader";
const ModelPage = () => {
  return (
    <>
      <AppHeader />
      <div>
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
      <AppFooter />
    </>
  );
};

export default ModelPage;
