import { changeLoading } from "../System/systemAction";
import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_FAIL,
  GET_ORDER_SUCCESS,
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

export function addOrderFail() {
  return {
    type: CREATE_ORDER_FAIL,
    payload: {},
  };
}

export function addOrderSuccess(data) {
  return {
    type: CREATE_ORDER_SUCCESS,
    payload: data,
  };
}

export function addOrderAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.create(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addOrderSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addOrderFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addOrderFail());
      return false;
    }
  };
}

export function getOrderFail() {
  return {
    type: GET_ORDER_FAIL,
    payload: {},
  };
}

export function getOrderSuccess(data) {
  return {
    type: GET_ORDER_SUCCESS,
    payload: data,
  };
}

export function getOrderAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.getOrder();
      if (res.success) {
        dispatch(loading());
        dispatch(getOrderSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getOrderFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getOrderFail());
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
