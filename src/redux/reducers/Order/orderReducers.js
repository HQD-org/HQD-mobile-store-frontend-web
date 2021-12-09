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
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case CREATE_ORDER_FAIL:
      return { ...state };
    case CREATE_ORDER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag, detailOrder: payload };
    case GET_BY_STATUS_AND_USER_FAIL:
      return {
        ...state,
      };
    case GET_BY_STATUS_AND_USER_SUCCESS:
      return {
        ...state,
        detailOrder: payload,
      };
    case CHANGE_STATUS_ORDER_FAIL:
      return { ...state };
    case CHANGE_STATUS_ORDER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
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
