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
  MERGE_CART_FAIL,
  MERGE_CART_SUCCESS,
} from "./types";
import cartAPI from "../../../apis/Cart.Api";
import Cookie from "js-cookie";
import toastNotify from "../../../common/toastify";

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

export function addToCartGuestAction(dataSubmit) {
  return async (dispatch) => {
    try {
      const cart = Cookie.get("cart");
      dataSubmit.quantity = 1;
      if (cart) {
        const cartArray = JSON.parse(cart);
        const index = cartArray.findIndex(
          (c) =>
            c.idProduct === dataSubmit.idProduct && c.color === dataSubmit.color
        );
        if (index === -1) {
          cartArray.push(dataSubmit);
          Cookie.set("cart", JSON.stringify(cartArray));
          dispatch(addToCartSuccess({ data: cartArray }));
          toastNotify("Thêm sản phẩm vào giỏ hàng thành công");
          return true;
        }
        cartArray[index] = {
          ...dataSubmit,
          quantity: cartArray[index].quantity + 1,
        };
        Cookie.set("cart", JSON.stringify(cartArray));
        dispatch(addToCartSuccess({ data: cartArray }));
        toastNotify("Thêm sản phẩm vào giỏ hàng thành công");
        return true;
      }
      Cookie.set("cart", JSON.stringify([dataSubmit]));
      dispatch(addToCartSuccess({ data: "" }));
      toastNotify("Thêm sản phẩm vào giỏ hàng thành công");
      return true;
    } catch {
      dispatch(addToCartFail());
      toastNotify("Thêm sản phẩm vào giỏ hàng thất bại");
      return false;
    }
  };
}

export function updateCartGuestAction(dataSubmit) {
  return async (dispatch) => {
    try {
      const res = await cartAPI.updateGuest(dataSubmit);
      if (res.success) {
        const cart = Cookie.get("cart");
        const cartArray = JSON.parse(cart);
        const index = cartArray.findIndex(
          (c) =>
            c.idProduct === dataSubmit.idProduct && c.color === dataSubmit.color
        );
        cartArray[index] = {
          ...cartArray[index],
          quantity: dataSubmit.quantity,
        };
        console.log("log at => cảt action ==> cartArray:", cartArray);
        Cookie.set("cart", JSON.stringify(cartArray));
        dispatch(updateCartSuccess({ products: cartArray }));
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

export function mergeCartFail() {
  return {
    type: MERGE_CART_FAIL,
    payload: {},
  };
}

export function mergeCartSuccess(data) {
  return {
    type: MERGE_CART_SUCCESS,
    payload: data,
  };
}

export function mergeCartAction(dataSubmit) {
  return async (dispatch) => {
    try {
      const res = await cartAPI.merge(dataSubmit);
      if (res.success) {
        dispatch(mergeCartSuccess(res.data));
        return true;
      }
      dispatch(mergeCartFail());
      return false;
    } catch {
      dispatch(mergeCartFail());
      return false;
    }
  };
}

export function removeCartGuestAction(idProduct) {
  return async (dispatch) => {
    try {
      const cart = Cookie.get("cart");
      if (!cart) {
        dispatch(removeCartFail());
        toastNotify("Xoá sản phẩm khỏi giỏ hàng thất bại");
        return false;
      }
      const cartJson = JSON.parse(cart);
      const removeIndex = cartJson.findIndex((i) => i.idProduct === idProduct);
      if (removeIndex === -1) {
        dispatch(removeCartFail());
        toastNotify("Xoá sản phẩm khỏi giỏ hàng thất bại");
        return false;
      }
      cartJson.splice(removeIndex, 1);
      Cookie.set("cart", JSON.stringify(cartJson));
      dispatch(removeCartSuccess({ products: cartJson }));
      toastNotify("Xoá sản phẩm khỏi giỏ hàng thành công");
      return true;
    } catch {
      toastNotify("Xoá sản phẩm khỏi giỏ hàng thất bại");
      dispatch(removeCartFail());
      return false;
    }
  };
}

export function getCartGuestAction() {
  return async (dispatch) => {
    try {
      const cart = Cookie.get("cart");
      if (cart) {
        dispatch(getCartSuccess({ products: JSON.parse(cart) }));
        return true;
      }
      dispatch(getCartFail());
      return false;
    } catch {
      dispatch(getCartFail());
      return false;
    }
  };
}
