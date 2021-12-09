import { changeLoading } from "../System/systemAction";
import {
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_SUCCESS,
  REMOVE_CART_FAIL,
  REMOVE_CART_SUCCESS,
} from "./types";
import cartAPI from "../../../apis/Cart.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addToCartFail() {
  return {
    type: ADD_CART_FAIL,
    payload: {},
  };
}

export function addToCartSuccess(data) {
  return {
    type: ADD_CART_SUCCESS,
    payload: data,
  };
}

export function addToCartAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await cartAPI.addToCart(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addToCartSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addToCartFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addToCartFail());
      return false;
    }
  };
}

export function getCartFail() {
  return {
    type: GET_CART_FAIL,
    payload: {},
  };
}

export function getCartSuccess(data) {
  return {
    type: GET_CART_SUCCESS,
    payload: data,
  };
}

export function getCartAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await cartAPI.getCart();
      if (res.success) {
        dispatch(loading());
        dispatch(getCartSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getCartFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getCartFail());
      return false;
    }
  };
}

export function updateCartFail() {
  return {
    type: UPDATE_CART_FAIL,
    payload: {},
  };
}

export function updateCartSuccess(data) {
  return {
    type: UPDATE_CART_SUCCESS,
    payload: data,
  };
}

export function updateCartAction(dataSubmit) {
  return async (dispatch) => {
    try {
      const res = await cartAPI.update(dataSubmit);
      if (res.success) {
        dispatch(updateCartSuccess(res.data));
        return true;
      }
      dispatch(updateCartFail());
      return false;
    } catch {
      dispatch(updateCartFail());
      return false;
    }
  };
}

export function removeCartFail() {
  return {
    type: REMOVE_CART_FAIL,
    payload: {},
  };
}

export function removeCartSuccess(data) {
  return {
    type: REMOVE_CART_SUCCESS,
    payload: data,
  };
}

export function removeCartAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await cartAPI.remove(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(removeCartSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(removeCartFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(removeCartFail());
      return false;
    }
  };
}
