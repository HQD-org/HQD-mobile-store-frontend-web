/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_MODEL_FAIL,
  ADD_MODEL_SUCCESS,
  GET_ALL_MODEL_FAIL,
  GET_ALL_MODEL_SUCCESS,
  UPDATE_MODEL_FAIL,
  UPDATE_MODEL_SUCCESS,
  FILTER_MODEL_FAIL,
  FILTER_MODEL_SUCCESS,
} from "../../actions/Model/types";

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
    case ADD_MODEL_FAIL:
      return { ...state };
    case ADD_MODEL_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_MODEL_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 8, totalItem: 0 },
      };
    case GET_ALL_MODEL_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_MODEL_FAIL:
      return { ...state };
    case UPDATE_MODEL_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_MODEL_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 8, totalItem: 0 },
      };
    case FILTER_MODEL_SUCCESS:
      return {
        ...state,
        list: payload.models,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
