import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/order";

const create = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/create`, body);
    toastNotify(res ? res.message.VN : "Tạo hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Tạo hoá đơn thất bại");
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

const getByStatusAndUser = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/get-by-status-and-user?${query}`);
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

const getByStatusAndBranch = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(
      `${url}/get-by-status-and-branch?${query}`
    );
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

const filterByBranch = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/filter-by-branch?${query}`);
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

const createForGuest = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/create-guest`, body);
    toastNotify(res ? res.message.VN : "Tạo hoá đơn thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Tạo hoá đơn thất bại");
    return {
      success: false,
    };
  }
};

const Cart = {
  create,
  createForGuest,
  remove,
  changeStatus,
  getByStatusAndUser,
  getByStatusAndBranch,
  filterByBranch,
};

export default Cart;
