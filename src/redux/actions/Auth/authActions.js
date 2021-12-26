import Cookies from "js-cookie";
import authAPI from "../../../apis/Auth.Api";
import { changeLoading } from "../System/systemAction";
import {
  GET_AUTH_FAIL,
  GET_AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  // REGISTER_FAIL,
  // REGISTER_SUCCESS,
  // VERIFY_FAIL,
  // VERIFY_SUCCESS,
  // SEND_OTP_FAIL,
  // SEND_OTP_SUCCESS,
} from "./types";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFail() {
  return {
    type: LOGIN_FAIL,
    payload: {},
  };
}

export function loginAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await authAPI.login(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(loginSuccess(res.data));
        return res.data;
      }
      if (res.needVerify) {
        dispatch(loading());
        dispatch(loginFail());
        return { needVerify: true };
      }
      if (res.needVerify) {
        dispatch(loading());
        dispatch(loginFail());
        return { needVerify: true };
      }
      dispatch(loading());
      dispatch(loginFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(loginFail());
      return false;
    }
  };
}

export const getAuthSuccess = (data) => {
  return {
    type: GET_AUTH_SUCCESS,
    payload: data,
  };
};

export const getAuthFail = () => {
  return {
    type: GET_AUTH_FAIL,
    payload: {},
  };
};

export const getAuthAction = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.getAuth();
    if (res.success) {
      dispatch(loading());
      dispatch(getAuthSuccess(res.data));
      return { ...res.data, isAuth: true };
    }
    dispatch(loading());
    dispatch(getAuthFail());
    return { isAuth: false };
  } catch {
    dispatch(loading());
    dispatch(getAuthFail());
    return { isAuth: false };
  }
};

export function logoutAction() {
  Cookies.remove("accessToken");
  return {
    type: LOGOUT,
    payload: {},
  };
}

// export const registerSuccess = (data) => {
//   return {
//     type: REGISTER_SUCCESS,
//     payload: data,
//   };
// };

// export const registerFail = () => {
//   return {
//     type: REGISTER_FAIL,
//     payload: {},
//   };
// };

export const registerAction = (body) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.register(body);
    // if (!res.success) {
    //   dispatch(loading());
    //   dispatch(registerFail());
    // } else {
    //   dispatch(loading());
    //   dispatch(registerSuccess(res.data));
    // }
    dispatch(loading());
    return res.success;
  } catch (err) {
    console.log(err);
    dispatch(loading());
    // dispatch(registerFail());
    return false;
  }
};

// export const verifySuccess = (data) => {
//   return {
//     type: VERIFY_SUCCESS,
//     payload: data,
//   };
// };

// export const verifyFail = () => {
//   return {
//     type: VERIFY_FAIL,
//     payload: {},
//   };
// };

export const verifyAction = (body) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.verify(body);
    // if (!res.success) {
    //   dispatch(loading());
    //   dispatch(verifyFail());
    // } else {
    //   dispatch(loading());
    //   dispatch(verifySuccess(res.data));
    // }
    dispatch(loading());
    return res.success;
  } catch (err) {
    console.log(err);
    dispatch(loading());
    // dispatch(verifyFail());
    return false;
  }
};

export const sendOTPAction = (body) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.sendOTP(body);
    dispatch(loading());
    return res.success;
  } catch (err) {
    console.log(err);
    dispatch(loading());
    return false;
  }
};

export const forgotPasswordAction = (body) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.forgotPassword(body);
    dispatch(loading());
    return res.success;
  } catch (err) {
    console.log(err);
    dispatch(loading());
    return false;
  }
};

export const changePasswordAction = (body) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await authAPI.changePassword(body);
    dispatch(loading());
    return res.success;
  } catch (err) {
    console.log(err);
    dispatch(loading());
    return false;
  }
};
