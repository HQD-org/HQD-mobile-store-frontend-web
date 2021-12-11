/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../common/css/Form.Style.css";
import {
  getCartAction,
  getCartGuestAction,
} from "../../redux/actions/Cart/cartAction";
import { getAllProvince } from "../../redux/actions/Location/locationAction";
import Complete from "./components/Complete";
import Confirm from "./components/Confirm";
import DeliveryInfo from "./components/DeliveryInfo";
import { useHistory } from "react-router-dom";
import toastNotify from "../../common/toastify";

const PaymentPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { showHeaderAndFooter } = props;
  const itemsInCart = useSelector((state) => state.cart.items);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [dataStep1, setDataStep1] = useState({
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
  });

  const [dataStep2, setDataStep2] = useState({
    estimatePrice: 0,
    shipPrice: 30000,
    discount: 10000,
  });

  const [showStep1, setShowStep1] = useState(true);
  const [showStep2, setShowStep2] = useState(false);
  const [showStep3, setShowStep3] = useState(false);

  useEffect(() => {
    if (!isLogin) {
      const getCart = async () => {
        await dispatch(getCartGuestAction());
      };
      getCart();
    } else {
      const getCart = async () => {
        await dispatch(getCartAction());
      };
      getCart();
    }

    dispatch(showHeaderAndFooter(true));
    dispatch(getAllProvince());
  }, []);

  useEffect(() => {
    if (itemsInCart.length > 0) {
      const totalPrice = itemsInCart.reduce((init, item) => {
        return init + item.price * item.quantity;
      }, 0);
      setDataStep2((prev) => ({ ...prev, estimatePrice: totalPrice }));
      return;
    }
    toastNotify("Không có sản phẩm trong giỏ hàng để thực hiện giao dịch");
    history.push("/cart");
  }, [itemsInCart]);

  useEffect(() => {
    if (showStep1) setShowStep2(false);
  }, [showStep1]);

  useEffect(() => {
    if (showStep2) {
      setShowStep1(false);
      setShowStep3(false);
    }
  }, [showStep2]);

  useEffect(() => {
    if (showStep3) setShowStep2(false);
  }, [showStep3]);

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="step-progress">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-12">
              <ul className="progressbar">
                <li className={showStep1 ? "active" : "done"}>Information</li>
                <li className={showStep2 ? "active" : showStep3 ? "done" : ""}>
                  Confirm
                </li>
                <li className={showStep3 ? "active" : ""}>Complete</li>
              </ul>
            </div>
          </div>

          {showStep1 && (
            <DeliveryInfo
              dataStep1={dataStep1}
              setShowStep2={setShowStep2}
              setDataStep1={setDataStep1}
            />
          )}
          {showStep2 && (
            <Confirm
              dataStep1={dataStep1}
              dataStep2={dataStep2}
              setShowStep1={setShowStep1}
              setShowStep3={setShowStep3}
            />
          )}
          {showStep3 && (
            <Complete
              dataStep1={dataStep1}
              dataStep2={dataStep2}
              setShowStep2={setShowStep2}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
