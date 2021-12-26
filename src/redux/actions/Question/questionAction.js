import { changeLoading } from "../System/systemAction";
import {
  ADD_QUESTION_FAIL,
  ADD_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAIL,
  GET_ALL_QUESTION_SUCCESS,
  UPDATE_QUESTION_FAIL,
  UPDATE_QUESTION_SUCCESS,
  FILTER_QUESTION_FAIL,
  FILTER_QUESTION_SUCCESS,
} from "./types";
import questionAPI from "../../../apis/Question.API";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addQuestionFail() {
  return {
    type: ADD_QUESTION_FAIL,
    payload: {},
  };
}

export function addQuestionSuccess(data) {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: data,
  };
}

export function addQuestionAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await questionAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addQuestionSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addQuestionFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addQuestionFail());
      return false;
    }
  };
}

export function getAllQuestionFail() {
  return {
    type: GET_ALL_QUESTION_FAIL,
    payload: {},
  };
}

export function getAllQuestionSuccess(data) {
  return {
    type: GET_ALL_QUESTION_SUCCESS,
    payload: data,
  };
}

export function getAllQuestionAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await questionAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllQuestionSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllQuestionFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllQuestionFail());
      return false;
    }
  };
}

export function updateQuestionFail() {
  return {
    type: UPDATE_QUESTION_FAIL,
    payload: {},
  };
}

export function updateQuestionSuccess(data) {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    payload: data,
  };
}

export function updateQuestionAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await questionAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateQuestionSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateQuestionFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateQuestionFail());
      return false;
    }
  };
}

export function filterQuestionFail() {
  return {
    type: FILTER_QUESTION_FAIL,
    payload: {},
  };
}

export function filterQuestionSuccess(data) {
  return {
    type: FILTER_QUESTION_SUCCESS,
    payload: data,
  };
}

export function filterQuestionAction(queryParams, load = true) {
  return async (dispatch) => {
    try {
      dispatch(loading(load));
      const res = await questionAPI.filter(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(filterQuestionSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterQuestionFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterQuestionFail());
      return false;
    }
  };
}
