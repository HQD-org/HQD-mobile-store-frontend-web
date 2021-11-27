/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_BRANCH_FAIL,
  ADD_BRANCH_SUCCESS,
  GET_ALL_BRANCH_FAIL,
  GET_ALL_BRANCH_SUCCESS,
  UPDATE_BRANCH_FAIL,
  UPDATE_BRANCH_SUCCESS,
  FILTER_BRANCH_FAIL,
  FILTER_BRANCH_SUCCESS,
} from "../../actions/Branch/types";

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
    case ADD_BRANCH_FAIL:
      return { ...state };
    case ADD_BRANCH_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_BRANCH_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case GET_ALL_BRANCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_BRANCH_FAIL:
      return { ...state };
    case UPDATE_BRANCH_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_BRANCH_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case FILTER_BRANCH_SUCCESS:
      return {
        ...state,
        list: payload.branches,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
