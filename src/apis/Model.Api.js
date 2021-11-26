import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const insert = async (body) => {
  try {
    const res = await axiosClient.post(`/admin/mobile-model/create`, body);
    toastNotify(res ? res.message.VN : "Thêm mẫu điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm mẫu điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async () => {
  try {
    const res = await axiosClient.get(`/mobile-model/get-all`);
    // toastNotify(res ? res.message.VN : "Lấy mẫu điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy mẫu điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`/admin/mobile-model/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật mẫu điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật mẫu điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`/mobile-model/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm mẫu điện thoại thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm mẫu điện thoại thất bại");
    return {
      success: false,
    };
  }
};

const Model = { insert, getAll, update, filter };

export default Model;
