import React from "react";
import { IoAdd, IoChevronBackCircleSharp, IoRemove } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../../common/utils/helper";
import {
  removeCartAction,
  removeCartGuestAction,
  updateCartAction,
  updateCartGuestAction,
} from "../../../redux/actions/Cart/cartAction";

const ListItem = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.items);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const updateCart = async (data) => {
    if (isLogin) {
      return await dispatch(updateCartAction(data));
    }
    return await dispatch(updateCartGuestAction(data));
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

  const removeFromCart = async (item) => {
    if (!isLogin) {
      await dispatch(removeCartGuestAction(item.idProduct));
      return;
    }
    await dispatch(
      removeCartAction({ idProduct: item.idProduct, color: item.color })
    );
  };

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

      {itemsInCart.map((p, index) => (
        <li key={index}>
          <hr />
          <div className="row">
            <div className="col-3">
              <img src={p.image} alt="" width="100%" height="150px" />
            </div>
            <div className="col-4">
              <div>
                <h6>{p.name}</h6>
                <p>{p.color}</p>
                <button
                  className="btnRemoveCart"
                  onClick={() => removeFromCart(p)}
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
