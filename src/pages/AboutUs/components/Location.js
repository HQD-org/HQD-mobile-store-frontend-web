import React, { useState } from "react";
import { useSelector } from "react-redux";
import imgLocation from "../../../common/images/map.jpg";

const Location = () => {
  const listBranch = useSelector((state) => state.branch.list);
  return (
    <div className="row location">
      <div className="col-5">
        <img src={imgLocation} alt="" width="100%" />
      </div>
      <div className="col-6">
        {listBranch.map((branch) => {
          const address = branch.address;
          return (
            <div className="row mb-3 mt-3" style={{ alignItems: "baseline" }}>
              <div className="columnLocation"></div>
              <div className="col">
                <p value={branch._id} key={branch._id}>
                  <strong>{branch.name}: </strong>
                  {address.detail +
                    ", " +
                    address.village +
                    ", " +
                    address.district +
                    ", " +
                    address.province}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
