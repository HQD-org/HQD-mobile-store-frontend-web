import { changeLoading } from "../System/systemAction";
import {
  ADD_MODEL_FAIL,
  ADD_MODEL_SUCCESS,
  GET_ALL_MODEL_FAIL,
  GET_ALL_MODEL_SUCCESS,
  UPDATE_MODEL_FAIL,
  UPDATE_MODEL_SUCCESS,
  FILTER_MODEL_FAIL,
  FILTER_MODEL_SUCCESS,
} from "./types";
import modelAPI from "../../../apis/Model.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addModelFail() {
  return {
    type: ADD_MODEL_FAIL,
    payload: {},
  };
}

export function addModelSuccess(data) {
  return {
    type: ADD_MODEL_SUCCESS,
    payload: data,
  };
}

export function addModelAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await modelAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addModelSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addModelFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addModelFail());
      return false;
    }
  };
}

export function getAllModelFail() {
  return {
    type: GET_ALL_MODEL_FAIL,
    payload: {},
  };
}

export function getAllModelSuccess(data) {
  return {
    type: GET_ALL_MODEL_SUCCESS,
    payload: data,
  };
}

export function getAllModelAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await modelAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllModelSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllModelFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllModelFail());
      return false;
    }
  };
}

export function updateModelFail() {
  return {
    type: UPDATE_MODEL_FAIL,
    payload: {},
  };
}

export function updateModelSuccess(data) {
  return {
    type: UPDATE_MODEL_SUCCESS,
    payload: data,
  };
}

export function updateModelAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await modelAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateModelSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateModelFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateModelFail());
      return false;
    }
  };
}

export function filterModelFail() {
  return {
    type: FILTER_MODEL_FAIL,
    payload: {},
  };
}

export function filterModelSuccess(data) {
  return {
    type: FILTER_MODEL_SUCCESS,
    payload: data,
  };
}

export function filterModelAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await modelAPI.filter(queryParams);
      if (res.success) {
        dispatch(loading());
        dispatch(filterModelSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterModelFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterModelFail());
      return false;
    }
  };
}
