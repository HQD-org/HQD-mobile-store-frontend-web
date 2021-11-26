/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_USER_FAIL,
  ADD_USER_SUCCESS,
  GET_ALL_USER_FAIL,
  GET_ALL_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  FILTER_USER_FAIL,
  FILTER_USER_SUCCESS,
} from "../../actions/User/types";

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
    case ADD_USER_FAIL:
      return { ...state };
    case ADD_USER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_USER_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_USER_FAIL:
      return { ...state };
    case UPDATE_USER_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_USER_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 20, totalItem: 0 },
      };
    case FILTER_USER_SUCCESS:
      return {
        ...state,
        list: payload.users,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
