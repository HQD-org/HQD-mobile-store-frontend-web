import React from "react";
import "../../../../../common/css/Statistical.Style.css";

const StatisticalHeader = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="fas fa-chart-line icon-admin icon-statistical"></i>
            <span className="name-management">Statistical</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default React.memo(StatisticalHeader);
