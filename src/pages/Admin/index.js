import React from "react";
import AdminMenu from "../../common/components/AdminMenu";

const Admin = () => {
  return (
    <>
      <div className="row">
        <div className="col-2" style={{ paddingRight: "4.5px" }}>
          <AdminMenu />
        </div>
        <div className="col">
          <div className="container-fluid">
            <div className="container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;