import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/coupon";
const insert = async (body) => {
  try {
    console.log("log at ==> Coupon.Api.js ==> body: ", body);
    const res = await axiosClient.post(`${url}/create`, body);
    toastNotify(res ? res.message.VN : "Thêm mã khuyến mãi thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm mã khuyến mãi thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/get-all?${query}`);
    // toastNotify(res ? res.message.VN : "Lấy mã khuyến mãi thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy mã khuyến mãi thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật mã khuyến mãi thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật mã khuyến mãi thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm mã khuyến mãi thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm mã khuyến mãi thất bại");
    return {
      success: false,
    };
  }
};

const use = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/use`, body);
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const generateUniqueName = async () => {
  try {
    const res = await axiosClient.get(`${url}/generate-name`);
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const Coupon = { insert, filter, getAll, update, use, generateUniqueName };

export default Coupon;
