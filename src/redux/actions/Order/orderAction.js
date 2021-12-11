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
  FILTER_BY_BRANCH_FAIL,
  FILTER_BY_BRANCH_SUCCESS,
  GET_BY_STATUS_AND_BRANCH_FAIL,
  GET_BY_STATUS_AND_BRANCH_SUCCESS,
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

export function getByStatusAndUserAction(query) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.getByStatusAndUser(query);
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

export function getByStatusAndBranchFail() {
  return {
    type: GET_BY_STATUS_AND_BRANCH_FAIL,
    payload: {},
  };
}

export function getByStatusAndBranchSuccess(data) {
  return {
    type: GET_BY_STATUS_AND_BRANCH_SUCCESS,
    payload: data,
  };
}

export function getByStatusAndBranchAction(query) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.getByStatusAndBranch(query);
      if (res.success) {
        dispatch(loading());
        dispatch(getByStatusAndBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getByStatusAndBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getByStatusAndBranchFail());
      return false;
    }
  };
}

export function filterByBranchFail() {
  return {
    type: FILTER_BY_BRANCH_FAIL,
    payload: {},
  };
}

export function filterByBranchSuccess(data) {
  return {
    type: FILTER_BY_BRANCH_SUCCESS,
    payload: data,
  };
}

export function filterByBranchAction(query) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.filterByBranch(query);
      if (res.success) {
        dispatch(loading());
        dispatch(filterByBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterByBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterByBranchFail());
      return false;
    }
  };
}

export function createOrderForGuestAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await orderAPI.createForGuest(dataSubmit);
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
