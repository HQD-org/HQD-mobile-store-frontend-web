import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import complete from "../../../common/images/complete.png";
import {
  createOrderAction,
  createOrderForGuestAction,
} from "../../../redux/actions/Order/orderAction";
import {
  getCartAction,
  getCartGuestAction,
} from "../../../redux/actions/Cart/cartAction";
import { useHistory } from "react-router-dom";
import Cookie from "js-cookie";
import { applyCouponAction } from "../../../redux/actions/Coupon/couponAction";

const Complete = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const coupon = useSelector((state) => state.coupon.detail);
  const { setShowStep2, dataStep1, dataStep2, setDataStep1, setDataStep2 } =
    props;
  const itemsInCart = useSelector((state) => state.cart.items);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const previousStep = () => {
    setShowStep2(true);
  };

  const resetDataPayment = () => {
    setDataStep1({
      name: "",
      phone: "",
      email: "",
      address: {
        detail: "",
        province: "",
        district: "",
        village: "",
      },
      receiveType: "at home",
      paymentType: "cod",
      timeDelivery: "all day",
      message: " ",
      idBranch: "1",
    });
    setDataStep2({ estimatePrice: 0, shipPrice: 30000, discount: 0 });
  };

  const confirmOrder = async () => {
    const products = itemsInCart.map((item) => {
      return {
        idProduct: item.idProduct,
        quantity: item.quantity,
        color: item.color,
        image: item.image,
        price: item.price,
        name: item.name,
      };
    });
    const data = {
      products: products,
      totalPrice:
        dataStep2.estimatePrice + dataStep2.shipPrice - dataStep2.discount,
      receiveInfo: {
        receiver: dataStep1.name,
        phone: dataStep1.phone,
        receiveAt: dataStep1.receiveType,
        timeReceive: dataStep1.timeDelivery,
        message: dataStep1.message,
      },
    };

    if (dataStep1.receiveType === "at home") {
      const address = dataStep1.address;
      data.receiveInfo.address =
        address.detail +
        ", " +
        address.village +
        ", " +
        address.district +
        ", " +
        address.province;
    } else {
      data.idBranch = dataStep1.idBranch;
    }

    if (dataStep1.paymentType === "cod") {
      if (coupon._id) {
        await dispatch(applyCouponAction({ id: coupon._id }));
        data.coupon = coupon._id;
      }
      if (!isLogin) {
        const res = await dispatch(createOrderForGuestAction(data));
        if (res) {
          Cookie.remove("cart");
          await dispatch(getCartGuestAction());
          // resetDataPayment();
          history.push("/");
        }
        return;
      }
      const res = await dispatch(createOrderAction(data));
      if (res) {
        await dispatch(getCartAction());
        // resetDataPayment();
        history.push("/");
      }
      return;
    }
  };

  return (
    <div className="row mt-3 mb-3" style={{ justifyContent: "center" }}>
      <div className="col-6">
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
        <button className="btnNext" onClick={previousStep}>
          Previous
        </button>
      </div>
    </div>
  );
};
export default Complete;
