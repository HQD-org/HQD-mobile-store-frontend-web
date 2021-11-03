import { changeLoading } from "../System/systemAction";
import {
  ADD_BRAND_FAIL,
  ADD_BRAND_SUCCESS,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  UPDATE_BRAND_SUCCESS,
  FILTER_BRAND_FAIL,
  FILTER_BRAND_SUCCESS,
} from "./types";
import brandAPI from "../../../apis/Brand.Api";
const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addBrandFail() {
  return {
    type: ADD_BRAND_FAIL,
    payload: {},
  };
}

export function addBrandSuccess(data) {
  return {
    type: ADD_BRAND_SUCCESS,
    payload: data,
  };
}

export function addBrandAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await brandAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addBrandSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addBrandFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addBrandFail());
      return false;
    }
  };
}

export function getAllBrandFail() {
  return {
    type: GET_ALL_BRAND_FAIL,
    payload: {},
  };
}

export function getAllBrandSuccess(data) {
  return {
    type: GET_ALL_BRAND_SUCCESS,
    payload: data,
  };
}

export function getAllBrandAction(page, itemPerPage) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await brandAPI.getAll(page, itemPerPage);
      if (res.success) {
        dispatch(loading());
        dispatch(getAllBrandSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllBrandFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllBrandFail());
      return false;
    }
  };
}

export function updateBrandFail() {
  return {
    type: UPDATE_BRAND_FAIL,
    payload: {},
  };
}

export function updateBrandSuccess(data) {
  return {
    type: UPDATE_BRAND_SUCCESS,
    payload: data,
  };
}

export function updateBrandAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await brandAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateBrandSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateBrandFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateBrandFail());
      return false;
    }
  };
}

export function filterBrandFail() {
  return {
    type: FILTER_BRAND_FAIL,
    payload: {},
  };
}

export function filterBrandSuccess(data) {
  return {
    type: FILTER_BRAND_SUCCESS,
    payload: data,
  };
}

export function filterBrandAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await brandAPI.filter(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(filterBrandSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterBrandFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterBrandFail());
      return false;
    }
  };
}
