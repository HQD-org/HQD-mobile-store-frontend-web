import React from "react";
import "../../../../../common/css/Model.Style.css";

const HeaderAddModel = () => {
  return (
    <div className="row" style={{ marginTop: "50px", alignItems: "baseline" }}>
      <div className="col">
        <div>
          <i className="bi bi-plus-square-fill icon-admin icon-modelheader"></i>
          <span className="name-management">Add Model</span>
        </div>
        <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
      </div>

      <div className="col-6"></div>
      <div className="col-2"></div>
    </div>
  );
};

export default HeaderAddModel;
