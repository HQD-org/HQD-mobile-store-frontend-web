/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_QUESTION_FAIL,
  ADD_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAIL,
  GET_ALL_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
  UPDATE_QUESTION_SUCCESS,
  FILTER_QUESTION_FAIL,
  FILTER_QUESTION_SUCCESS,
} from "../../actions/Question/types";

const initState = {
  list: [],
  pagination: {
    page: 1,
    itemPerPage: 5,
    totalItem: 0,
  },
  updateFlag: false,
};
export default function (state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case ADD_QUESTION_FAIL:
      return { ...state };
    case ADD_QUESTION_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case GET_ALL_QUESTION_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 5, totalItem: 0 },
      };
    case GET_ALL_QUESTION_SUCCESS:
      return {
        ...state,
        list: action.payload,
      };
    case UPDATE_QUESTION_FAIL:
      return { ...state };
    case UPDATE_QUESTION_SUCCESS:
      return { ...state, updateFlag: !state.updateFlag };
    case FILTER_QUESTION_FAIL:
      return {
        ...state,
        list: [],
        pagination: { page: 1, itemPerPage: 5, totalItem: 0 },
      };
    case FILTER_QUESTION_SUCCESS:
      return {
        ...state,
        list: payload.questions,
        pagination: payload.pagination,
      };
    default:
      return state;
  }
}
