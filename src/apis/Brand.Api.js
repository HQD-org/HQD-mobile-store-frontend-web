import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";
const insert = async (body) => {
  try {
    const res = await axiosClient.post(`/admin/mobile-brand/create`, body);
    toastNotify(res ? res.message.VN : "Thêm thương hiệu thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm thương hiệu thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async () => {
  try {
    const res = await axiosClient.get(`/mobile-brand/get-all`);
    // toastNotify(res ? res.message.VN : "Lấy thương hiệu thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy thương hiệu thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`/admin/mobile-brand/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật thương hiệu thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật thương hiệu thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`/mobile-brand/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm thương hiệu thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm thương hiệu thất bại");
    return {
      success: false,
    };
  }
};

const Brand = { insert, getAll, update, filter };

export default Brand;
