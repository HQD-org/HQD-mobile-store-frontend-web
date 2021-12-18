/* eslint-disable react-hooks/rules-of-hooks */
import { changeLoading } from "../System/systemAction";
import {
  ADD_COUPON_FAIL,
  ADD_COUPON_SUCCESS,
  GET_ALL_COUPON_FAIL,
  GET_ALL_COUPON_SUCCESS,
  UPDATE_COUPON_FAIL,
  UPDATE_COUPON_SUCCESS,
  FILTER_COUPON_FAIL,
  FILTER_COUPON_SUCCESS,
  USE_COUPON_FAIL,
  USE_COUPON_SUCCESS,
} from "./types";
import couponAPI from "../../../apis/Coupon.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addCouponFail() {
  return {
    type: ADD_COUPON_FAIL,
    payload: {},
  };
}

export function addCouponSuccess(data) {
  return {
    type: ADD_COUPON_SUCCESS,
    payload: data,
  };
}

export function addCouponAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await couponAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addCouponSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addCouponFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addCouponFail());
      return false;
    }
  };
}

export function getAllCouponFail() {
  return {
    type: GET_ALL_COUPON_FAIL,
    payload: {},
  };
}

export function getAllCouponSuccess(data) {
  return {
    type: GET_ALL_COUPON_SUCCESS,
    payload: data,
  };
}

export function getAllCouponAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await couponAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllCouponSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllCouponFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllCouponFail());
      return false;
    }
  };
}

export function updateCouponFail() {
  return {
    type: UPDATE_COUPON_FAIL,
    payload: {},
  };
}

export function updateCouponSuccess(data) {
  return {
    type: UPDATE_COUPON_SUCCESS,
    payload: data,
  };
}

export function updateCouponAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await couponAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateCouponSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateCouponFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateCouponFail());
      return false;
    }
  };
}

export function filterCouponFail() {
  return {
    type: FILTER_COUPON_FAIL,
    payload: {},
  };
}

export function filterCouponSuccess(data) {
  return {
    type: FILTER_COUPON_SUCCESS,
    payload: data,
  };
}

export function filterCouponAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await couponAPI.filter(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(filterCouponSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterCouponFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterCouponFail());
      return false;
    }
  };
}

export function useCouponFail() {
  return {
    type: USE_COUPON_FAIL,
    payload: {},
  };
}

export function useCouponSuccess(data) {
  return {
    type: USE_COUPON_SUCCESS,
    payload: data,
  };
}

export function useCouponAction(queryParams) {
  return async (dispatch) => {
    try {
      const res = await couponAPI.use(queryParams);
      if (res.success) {
        dispatch(useCouponSuccess(res.data));
        return true;
      }
      dispatch(useCouponFail());
      return false;
    } catch {
      dispatch(useCouponFail());
      return false;
    }
  };
}

export function generateUniqueNameAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await couponAPI.generateUniqueName();
      if (res.success) {
        dispatch(loading());
        return res.data;
      }
      dispatch(loading());
      return false;
    } catch {
      dispatch(loading());
      return false;
    }
  };
}
