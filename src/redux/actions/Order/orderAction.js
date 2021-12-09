import { changeLoading } from "../System/systemAction";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  GET_BY_STATUS_AND_USER_FAIL,
  GET_BY_STATUS_AND_USER_SUCCESS,
  CHANGE_STATUS_ORDER_FAIL,
  CHANGE_STATUS_ORDER_SUCCESS,
  REMOVE_ORDER_FAIL,
  REMOVE_ORDER_SUCCESS,
} from "./types";
import orderAPI from "../../../apis/Order.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function createOrderFail() {
  return {
    type: CREATE_ORDER_FAIL,
    payload: {},
  };
}

export function createOrderSuccess(data) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: data,
  };
}

export function createOrderAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.create(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(createOrderSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(createOrderFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(createOrderFail());
      return false;
    }
  };
}

export function getByStatusAndUserFail() {
  return {
    type: GET_BY_STATUS_AND_USER_FAIL,
    payload: {},
  };
}

export function getByStatusAndUserSuccess(data) {
  return {
    type: GET_BY_STATUS_AND_USER_SUCCESS,
    payload: data,
  };
}

export function getByStatusAndUserAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.getByStatusAndUser();
      if (res.success) {
        dispatch(loading());
        dispatch(getByStatusAndUserSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getByStatusAndUserFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getByStatusAndUserFail());
      return false;
    }
  };
}

export function changeStatusOrderFail() {
  return {
    type: CHANGE_STATUS_ORDER_FAIL,
    payload: {},
  };
}

export function changeStatusOrderSuccess(data) {
  return {
    type: CHANGE_STATUS_ORDER_SUCCESS,
    payload: data,
  };
}

export function changeStatusOrderAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.changeStatus(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(changeStatusOrderSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(changeStatusOrderFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(changeStatusOrderFail());
      return false;
    }
  };
}

export function removeOrderFail() {
  return {
    type: REMOVE_ORDER_FAIL,
    payload: {},
  };
}

export function removeOrderSuccess(data) {
  return {
    type: REMOVE_ORDER_SUCCESS,
    payload: data,
  };
}

export function removeOrderAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.remove(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(removeOrderSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(removeOrderFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(removeOrderFail());
      return false;
    }
  };
}
