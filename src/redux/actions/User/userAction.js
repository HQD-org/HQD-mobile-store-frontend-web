import { changeLoading } from "../System/systemAction";
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  FILTER_USER_FAIL,
  FILTER_USER_SUCCESS,
} from "./types";
import userAPI from "../../../apis/User.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addUserFail() {
  return {
    type: ADD_USER_FAIL,
    payload: {},
  };
}

export function addUserSuccess(data) {
  return {
    type: ADD_USER_SUCCESS,
    payload: data,
  };
}

export function addUserAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await userAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addUserSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addUserFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addUserFail());
      return false;
    }
  };
}

export function getAllUserFail() {
  return {
    type: GET_ALL_USER_FAIL,
    payload: {},
  };
}

export function getAllUserSuccess(data) {
  return {
    type: GET_ALL_USER_SUCCESS,
    payload: data,
  };
}

export function getAllUserAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await userAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllUserSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllUserFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllUserFail());
      return false;
    }
  };
}

export function updateUserFail() {
  return {
    type: UPDATE_USER_FAIL,
    payload: {},
  };
}

export function updateUserSuccess(data) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: data,
  };
}

export function updateUserAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await userAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateUserSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateUserFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateUserFail());
      return false;
    }
  };
}

export function filterUserFail() {
  return {
    type: FILTER_USER_FAIL,
    payload: {},
  };
}

export function filterUserSuccess(data) {
  return {
    type: FILTER_USER_SUCCESS,
    payload: data,
  };
}

export function filterUserAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await userAPI.filter(queryParams);
      console.log("log at ==> userAction ==> res: ", res);
      if (res.success) {
        dispatch(loading());
        dispatch(filterUserSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterUserFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterUserFail());
      return false;
    }
  };
}
