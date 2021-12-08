import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";

const url = "/order";

const create = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/create`, body);
    toastNotify(res ? res.message.VN : "Thêm hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm hoá đơn thất bại");
    return {
      success: false,
    };
  }
};

const changeStatus = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/change-status`, body);
    toastNotify(res ? res.message.VN : "Cập nhật hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật hoá đơn thất bại");
    return {
      success: false,
    };
  }
};

const remove = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/cancel`, body);
    toastNotify(res ? res.message.VN : "Huỷ hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Huỷ hoá đơn thất bại");
    return {
      success: false,
    };
  }
};

const getByStatusAndUser = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-by-status-and-user`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm hoá đơn thất bại");
    return {
      success: false,
    };
  }
};

const Cart = { create, remove, changeStatus, getByStatusAndUser };

export default Cart;
