import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";

const url = "/cart";
const addToCart = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/add-to-cart`, body);
    toastNotify(res ? res.message.VN : "Thêm gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm gio hang thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/update-cart`, body);
    toastNotify(res ? res.message.VN : "Cập nhật gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật gio hang thất bại");
    return {
      success: false,
    };
  }
};

const remove = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/delete-cart`, body);
    toastNotify(res ? res.message.VN : "Xoa khoi gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Xoa khoi gio hang thất bại");
    return {
      success: false,
    };
  }
};

const getCart = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-cart`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm gio hang thất bại");
    return {
      success: false,
    };
  }
};

//cart api for guest
const updateGuest = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/update-cart-guest`, body);
    toastNotify(res ? res.message.VN : "Cập nhật gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật gio hang thất bại");
    return {
      success: false,
    };
  }
};

const merge = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/merge-cart`, body);
    // toastNotify(res ? res.message.VN : "Cập nhật gio hang thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Cập nhật gio hang thất bại");
    return {
      success: false,
    };
  }
};

const Cart = { addToCart, remove, update, getCart, updateGuest, merge };

export default Cart;
