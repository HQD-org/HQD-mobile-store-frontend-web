import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CartList from "./components/CartList";
import InforOrder from "./components/InforOrder";

const CartPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-7">
          {" "}
          <CartList />
        </div>
        <div className="col-3">
          <InforOrder />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
