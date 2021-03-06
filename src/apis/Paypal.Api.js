import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";

const url = "/payment";

const pay = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/order`, body);
    toastNotify(
      res
        ? "Bạn sẽ được chuyển đến trang thanh toán của paypal"
        : "Thanh toán thất bại"
    );
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thanh toán thất bại");
    return {
      success: false,
    };
  }
};

const refund = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/refund`, body);
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const Paypal = { pay, refund };

export default Paypal;
