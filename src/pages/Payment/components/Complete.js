import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import complete from "../../../common/images/complete.png";
import { createOrderAction } from "../../../redux/actions/Order/orderAction";
import { getCartAction } from "../../../redux/actions/Cart/cartAction";
import { useHistory } from "react-router-dom";

const Complete = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { setShowStep2, dataStep1, dataStep2 } = props;
  const itemsInCart = useSelector((state) => state.cart.items);
  const previousStep = () => {
    setShowStep2(true);
  };

  const confirmOrder = async () => {
    const products = itemsInCart.map((item) => {
      return {
        idProduct: item.idProduct,
        quantity: item.quantity,
        color: item.color,
        image: item.image,
        price: item.price,
      };
    });
    const address = dataStep1.address;
    const data = {
      products: products,
      totalPrice:
        dataStep2.estimatePrice + dataStep2.shipPrice - dataStep2.discount,
      coupon: "123",
      receiveInfo: {
        receiver: dataStep1.name,
        phone: dataStep1.phone,
        address:
          address.detail +
          ", " +
          address.village +
          ", " +
          address.district +
          ", " +
          address.province,
        receiveAt: dataStep1.receiveType,
        timeReceive: dataStep1.timeDelivery,
        message: dataStep1.message,
      },
    };

    if (dataStep1.paymentType === "cod") {
      const res = await dispatch(createOrderAction(data));
      if (res) {
        await dispatch(getCartAction());
        history.push("/");
      }
      return;
    }
  };

  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-5">
        <div className="form-deliveryInfor">
          <div style={{ textAlign: "center" }}>
            <button className="paymentNow" onClick={confirmOrder}>
              XÁC NHẬN ĐƠN HÀNG
            </button>
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Link to="/Cart" style={{ textDecoration: "none" }}>
              <p className="btncancel">Cancel</p>
            </Link>
          </div>

          <img src={complete} alt="" width="100%"></img>
        </div>
        <button className="btnSubmit" onClick={previousStep}>
          Previous
        </button>
      </div>
    </div>
  );
};
export default Complete;
