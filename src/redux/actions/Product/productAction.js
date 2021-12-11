import { changeLoading } from "../System/systemAction";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAIL,
  FILTER_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_FAIL,
  FIND_PRODUCT_BY_ID_SUCCESS,
  GET_BY_BRAND_FAIL,
  GET_BY_BRAND_SUCCESS,
} from "./types";
import productAPI from "../../../apis/Product.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addProductFail() {
  return {
    type: ADD_PRODUCT_FAIL,
    payload: {},
  };
}

export function addProductSuccess(data) {
  return {
    type: ADD_PRODUCT_SUCCESS,
    payload: data,
  };
}

export function addProductAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await productAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addProductSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addProductFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addProductFail());
      return false;
    }
  };
}

export function getAllProductFail() {
  return {
    type: GET_ALL_PRODUCT_FAIL,
    payload: {},
  };
}

export function getAllProductSuccess(data) {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: data,
  };
}

export function getAllProductAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await productAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllProductSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllProductFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllProductFail());
      return false;
    }
  };
}

export function updateProductFail() {
  return {
    type: UPDATE_PRODUCT_FAIL,
    payload: {},
  };
}

export function updateProductSuccess(data) {
  return {
    type: UPDATE_PRODUCT_SUCCESS,
    payload: data,
  };
}

export function updateProductAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await productAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateProductSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateProductFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateProductFail());
      return false;
    }
  };
}

export function filterProductFail() {
  return {
    type: FILTER_PRODUCT_FAIL,
    payload: {},
  };
}

export function filterProductSuccess(data) {
  return {
    type: FILTER_PRODUCT_SUCCESS,
    payload: data,
  };
}

export function filterProductAction(queryParams, load = true) {
  return async (dispatch) => {
    try {
      dispatch(loading(load));
      const res = await productAPI.filter(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(filterProductSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterProductFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterProductFail());
      return false;
    }
  };
}

export function findProductByIdFail() {
  return {
    type: FIND_PRODUCT_BY_ID_FAIL,
    payload: {},
  };
}

export function findProductByIdSuccess(data) {
  return {
    type: FIND_PRODUCT_BY_ID_SUCCESS,
    payload: data,
  };
}

export function findProductByIdAction(id) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await productAPI.findById(id);
      if (res.success) {
        dispatch(loading());
        dispatch(findProductByIdSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(findProductByIdFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(findProductByIdFail());
      return false;
    }
  };
}

export function updateQuantityAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await productAPI.updateQuantity(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateProductSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateProductFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateProductFail());
      return false;
    }
  };
}

export function getProductByBrandFail() {
  return {
    type: GET_BY_BRAND_FAIL,
    payload: {},
  };
}

export function getProductByBrandSuccess(data) {
  return {
    type: GET_BY_BRAND_SUCCESS,
    payload: data,
  };
}

export function getProductByBrandAction(queryParams, load = true) {
  return async (dispatch) => {
    try {
      dispatch(loading(load));
      const res = await productAPI.getGroupByBrand(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(getProductByBrandSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getProductByBrandFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getProductByBrandFail());
      return false;
    }
  };
}
