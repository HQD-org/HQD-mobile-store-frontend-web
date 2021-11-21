/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_BRAND_FAIL,
  ADD_BRAND_SUCCESS,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_SUCCESS,
  UPDATE_BRAND_FAIL,
  UPDATE_BRAND_SUCCESS,
  FILTER_BRAND_FAIL,
  FILTER_BRAND_SUCCESS,
} from "../../actions/Brand/types";

const initState = {
  list: [],
  pagination: {
    page: 1,
    itemPerPage: 8,
    totalItem: 0,
  },
  updateFlag: false,
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_BRAND_FAIL:
      return { ...state };
    case ADD_BRAND_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_BRAND_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 8, totalItem: 0 },
      };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_BRAND_FAIL:
      return { ...state };
    case UPDATE_BRAND_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_BRAND_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 8, totalItem: 0 },
      };
    case FILTER_BRAND_SUCCESS:
      return {
        ...state,
        list: payload.brands,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
