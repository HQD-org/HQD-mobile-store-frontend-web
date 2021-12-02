import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCartAction } from "../../redux/actions/Cart/cartAction";
import CartList from "./components/CartList";
import InfoOrder from "./components/InfoOrder";

const CartPage = (props) => {
  const { showHeaderAndFooter } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
    dispatch(getCartAction());
  });

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-1"></div>
        <div className="col-7">
          <CartList />
        </div>
        <div className="col-3">
          <InfoOrder />
        </div>
      </div>
    </div>
  );
};
export default CartPage;
