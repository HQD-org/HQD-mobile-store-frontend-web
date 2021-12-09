import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filter from "./components/Filter";
import OrderList from "./components/OrderList";
import "../../common/css/Bill.Style.css";
import img from "../../common/images/bill.png";

const BillPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });

  return (
    <div className="container">
      <div className="row mt-3 mb-3" style={{ alignItems: "center" }}>
        <div className="col-8">
          <div className="row mt-3 mb-3">
            <Filter />
          </div>
          <div className="row mt-3 mb-3">
            <OrderList />
          </div>
        </div>
        <div className="col-4">
          <img src={img} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
export default BillPage;
