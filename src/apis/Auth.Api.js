import Cookie from "js-cookie";
import toastNotify from "../common/toastify";
import axiosClient from "./axiosClient";

const url = "/auth";

const getAuth = async () => {
  try {
    const res = await axiosClient.get(`${url}/get-auth`);
    if (res && res.data) return { data: res.data, success: true };
    return { success: false };
  } catch (error) {
    return {
      success: false,
    };
  }
};

const login = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/login`, { ...body });
    if (res && res.data) {
      Cookie.set("accessToken", res.data.accessToken);
      toastNotify(res.message.VN);
      return { data: res.data, success: true };
    }
    toastNotify(res.message.VN);
    return { data: {}, success: false };
  } catch (error) {
    toastNotify(error.message.VN || "Đăng nhập thất bại");
    if (error.status === 401)
      return {
        needVerify: true,
        success: false,
      };
    return { success: false };
  }
};

const register = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/register`, body);
    toastNotify(res ? res.message.VN : "Đăng ký thất bại");
    return res && res.data
      ? { data: res || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Đăng ký thất bại");
    return {
      success: false,
    };
  }
};

const verify = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/verify`, body);
    toastNotify(res ? res.message.VN : "Xác minh thất bại");
    return res && res.data
      ? { data: res || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Xác minh thất bại");
    return {
      success: false,
    };
  }
};

const sendOTP = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/forgot-password`, body);
    toastNotify(res ? res.message.VN : "Gửi otp thất bại");
    return res && res.data
      ? { data: res || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Gửi otp thất bại");
    return {
      success: false,
    };
  }
};

const forgotPassword = async (body) => {
  try {
    const res = await axiosClient.post(`${url}/forgot-password/verify`, body);
    toastNotify(res ? res.message.VN : "Lấy lại mật khẩu thất bại");
    return res && res.data
      ? { data: res || {}, success: true }
      : { success: false };
  } catch (error) {
    toastNotify("Lấy lại mật khẩu thất bại");
    return {
      success: false,
    };
  }
};

const Auth = { getAuth, login, register, verify, sendOTP, forgotPassword };

export default Auth;
