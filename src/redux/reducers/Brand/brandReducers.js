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
  totalBrand: 0,
};
export default function (state = initState, action) {
  switch (action.type) {
    case ADD_BRAND_FAIL:
      return { ...state };
    case ADD_BRAND_SUCCESS:
      state.list.push(action.payload);
      return { ...state };
    case GET_ALL_BRAND_FAIL:
      return { ...state, list: [], totalBrand: 0 };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        list: action.payload.brands,
        totalBrand: action.payload.totalBrand,
      };
    case UPDATE_BRAND_FAIL:
      return { ...state };
    case UPDATE_BRAND_SUCCESS:
      // update new brand in list
      return { ...state };
    case FILTER_BRAND_FAIL:
      return { ...state, list: [], totalBrand: 0 };
    case FILTER_BRAND_SUCCESS:
      console.log(
        "log at ==> brandReducers.js ==> line 42 ==> payload: ",
        action.payload
      );
      return {
        ...state,
        list: action.payload.brands,
        totalBrand: action.payload.totalBrand,
      };
    default:
      return state;
  }
}
