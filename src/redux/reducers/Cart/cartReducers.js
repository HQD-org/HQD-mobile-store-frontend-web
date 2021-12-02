/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_CART_FAIL,
  ADD_CART_SUCCESS,
  GET_CART_FAIL,
  GET_CART_SUCCESS,
  UPDATE_CART_FAIL,
  UPDATE_CART_SUCCESS,
  REMOVE_CART_FAIL,
  REMOVE_CART_SUCCESS,
} from "../../actions/Cart/types";

const initState = {
  items: [],
  dataProduct: [],
  updateFlag: false,
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_CART_FAIL:
      return { ...state };
    case ADD_CART_SUCCESS:
      return { ...state, items: payload.products };
    case GET_CART_FAIL:
      return {
        ...state,
        items: [],
        dataProduct: [],
      };
    case GET_CART_SUCCESS:
      return {
        ...state,
        items: payload.products,
        dataProduct: payload.dataProduct,
      };
    case UPDATE_CART_FAIL:
      return { ...state };
    case UPDATE_CART_SUCCESS:
      return { ...state, items: payload.products };
    case REMOVE_CART_FAIL:
      return {
        ...state,
      };
    case REMOVE_CART_SUCCESS:
      return {
        ...state,
        items: payload.products,
      };
    default:
      return state;
  }
}
