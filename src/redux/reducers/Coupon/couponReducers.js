/* eslint-disable import/no-anonymous-default-export */
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
} from "../../actions/Coupon/types";

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
    case ADD_COUPON_FAIL:
      return { ...state };
    case ADD_COUPON_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_COUPON_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case GET_ALL_COUPON_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_COUPON_FAIL:
      return { ...state };
    case UPDATE_COUPON_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_COUPON_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case FILTER_COUPON_SUCCESS:
      return {
        ...state,
        list: payload.coupons,
        pagination: payload.pagination,
      };
    case USE_COUPON_FAIL:
    case USE_COUPON_SUCCESS:
    default:
      return state;
  }
}
