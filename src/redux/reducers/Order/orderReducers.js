/* eslint-disable import/no-anonymous-default-export */
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
  GET_PROFIT_BY_YEAR_FAIL,
  GET_PROFIT_BY_YEAR_SUCCESS,
  GET_TOP_10_BEST_SELLER_PRODUCT_FAIL,
  GET_TOP_10_BEST_SELLER_PRODUCT_SUCCESS,
} from "../../actions/Order/types";

const initState = {
  list: [],
  pagination: {
    page: 1,
    itemPerPage: 16,
    totalItem: 0,
  },
  detailOrder: {},
  updateFlag: false,
  profit: [],
  top10BestSeller: [],
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case CREATE_ORDER_FAIL:
      return { ...state };
    case CREATE_ORDER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag, detailOrder: payload };
    case FILTER_BY_BRANCH_FAIL:
    case GET_BY_STATUS_AND_BRANCH_FAIL:
    case GET_BY_STATUS_AND_USER_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 16, totalItem: 0 },
      };
    case FILTER_BY_BRANCH_SUCCESS:
    case GET_BY_STATUS_AND_BRANCH_SUCCESS:
    case GET_BY_STATUS_AND_USER_SUCCESS:
      return {
        ...state,
        list: payload.orders,
        pagination: payload.pagination,
      };
    case CHANGE_STATUS_ORDER_FAIL:
      return { ...state };
    case CHANGE_STATUS_ORDER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_PROFIT_BY_YEAR_SUCCESS:
      return { ...state, profit: payload };
    case GET_TOP_10_BEST_SELLER_PRODUCT_SUCCESS:
      return { ...state, top10BestSeller: payload };
    case GET_TOP_10_BEST_SELLER_PRODUCT_FAIL:
    case GET_PROFIT_BY_YEAR_FAIL:
    case REMOVE_ORDER_FAIL:
      return {
        ...state,
      };
    case REMOVE_ORDER_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
