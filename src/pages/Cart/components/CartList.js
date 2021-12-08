import React, { useEffect, useState } from "react";
import { IoAdd, IoChevronBackCircleSharp, IoRemove } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../../common/css/Cart.Style.css";
import { numberWithCommas } from "../../../common/utils/helper";
import {
  updateCartAction,
  removeCartAction,
} from "../../../redux/actions/Cart/cartAction";

const ListItem = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
  const dataProduct = useSelector((state) => state.cart.dataProduct);

  const updateCart = async (data) => {
    return await dispatch(updateCartAction(data));
  };

  const plusQuantity = (item) => {
    updateCart({
      idProduct: item.idProduct,
      quantity: item.quantity + 1,
      color: item.color,
    });
  };

  const subQuantity = (item) => {
    if (item.quantity - 1 <= 0) return;
    updateCart({
      idProduct: item.idProduct,
      quantity: item.quantity - 1,
      color: item.color,
    });
  };

  const removeFormCart = async (item) => {
    await dispatch(
      removeCartAction({ idProduct: item.idProduct, color: item.color })
    );
  };

  useEffect(() => {
    console.log("log at ==> CartList => cart", itemsInCart);
  }, [itemsInCart]);

  return (
    <ul className="listCart">
      <div className="row">
        <div className="col-6">
          <h5>Your Cart</h5>
        </div>
        <div className="col-6" style={{ textAlign: "end" }}>
          <Link
            to="/product"
            style={{ textDecoration: "none", color: "#18966b" }}
          >
            <h5>
              <IoChevronBackCircleSharp fontSize="30px" /> Shopping Continue
            </h5>
          </Link>
        </div>
      </div>

      {itemsInCart.map((p) => (
        <li key={p._id}>
          <hr />
          <div className="row">
            <div className="col-3">
              <img src={p.image} alt="" width="100%" height="150px" />
            </div>
            <div className="col-4">
              <div>
                <h6>
                  {dataProduct.find((item) => item._id === p.idProduct).name}
                </h6>
                <p>{p.color}</p>
                <button
                  className="btnRemoveCart"
                  onClick={() => removeFormCart(p)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="col-5 price-quantity">
              <div>
                <h6 style={{ textAlign: "end" }}>{`${numberWithCommas(
                  p.price
                )} ₫`}</h6>
                <div className="quantity">
                  <div className="sub">
                    <IoRemove onClick={() => subQuantity(p)} />
                  </div>
                  <div className="number">{p.quantity}</div>
                  <div className="plus">
                    <IoAdd onClick={() => plusQuantity(p)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CartList = () => {
  return (
    <div className="row">
      <div className="col">
        <ListItem />
      </div>
    </div>
  );
};

export default CartList;
