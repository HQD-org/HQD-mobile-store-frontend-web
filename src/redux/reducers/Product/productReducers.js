/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  FILTER_PRODUCT_FAIL,
  FILTER_PRODUCT_SUCCESS,
} from "../../actions/Product/types";

const initState = {
  list: [],
  pagination: {
    page: 1,
    itemPerPage: 20,
    totalItem: 0,
  },
  updateFlag: false,
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_PRODUCT_FAIL:
      return { ...state };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_PRODUCT_FAIL:
      return { ...state };
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_PRODUCT_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case FILTER_PRODUCT_SUCCESS:
      return {
        ...state,
        list: payload.products,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
