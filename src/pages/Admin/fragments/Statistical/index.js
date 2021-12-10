import React, { useState } from "react";
import StatisticalProduct from "./components/Product";
import Profit from "./components/Profit";
import StatisticalHeader from "./components/StatisticalHeader";

const StatisticalFragment = React.memo(() => {
  const [btnChart, setBtnChart] = useState(true);

  return (
    <div>
      <div className="row">
        <StatisticalHeader />
        <div className="row">
          <div className="row mb-3" style={{ justifyContent: "end" }}>
            <div className="col-1">
              <button
                type="button"
                className="statistical-profit"
                onClick={() => setBtnChart(true)}
              >
                Profit
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="statistical-product"
                onClick={() => setBtnChart(false)}
              >
                Product
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {btnChart ? <Profit /> : <StatisticalProduct />}
        </div>
      </div>
    </div>
  );
});

export default StatisticalFragment;
