import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/product";

const insert = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/create`, body);
    toastNotify(res ? res.message.VN : "Thêm điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-all`);
    // toastNotify(res ? res.message.VN : "Lấy điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const findById = async (id) => {
  try {
    const res = await axiosClient.get(`${url}/find-by-id/${id}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const Product = { insert, getAll, update, filter, findById };

export default Product;
