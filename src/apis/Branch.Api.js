import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";
import queryString from "query-string";

const url = "/branch";
const insert = async (body) => {
  try {
    console.log("log at ==> Branch.Api.js ==> body: ", body);
    const res = await axiosClient.post(`${url}/create`, body);
    toastNotify(res ? res.message.VN : "Thêm chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Thêm chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const getAll = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-all`);
    // toastNotify(res ? res.message.VN : "Lấy chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const update = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/update`, body);
    toastNotify(res ? res.message.VN : "Cập nhật chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Cập nhật chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const filter = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams);
    const res = await axiosClient.get(`${url}/filter?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const getByListId = async (queryParams) => {
  try {
    const query = queryString.stringify(queryParams, {
      arrayFormat: "bracket",
    });
    const res = await axiosClient.get(`${url}/get-by-list-id?${query}`);
    // toastNotify(res ? res.message.VN : "Tìm kiếm chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Tìm kiếm chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const getAllOpen = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-all-open`);
    // toastNotify(res ? res.message.VN : "Lấy chi nhánh thất bại");
    return res && res.data
      ? { data: res.data || {}, success: true }
      : { success: false };
  } catch (error) {
    // toastNotify("Lấy chi nhánh thất bại");
    return {
      success: false,
    };
  }
};

const Branch = { insert, filter, getAll, update, getByListId, getAllOpen };

export default Branch;
