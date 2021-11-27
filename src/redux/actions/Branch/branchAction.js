import { changeLoading } from "../System/systemAction";
import {
  ADD_BRANCH_FAIL,
  ADD_BRANCH_SUCCESS,
  GET_ALL_BRANCH_FAIL,
  GET_ALL_BRANCH_SUCCESS,
  UPDATE_BRANCH_FAIL,
  UPDATE_BRANCH_SUCCESS,
  FILTER_BRANCH_FAIL,
  FILTER_BRANCH_SUCCESS,
} from "./types";
import branchAPI from "../../../apis/Branch.Api";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function addBranchFail() {
  return {
    type: ADD_BRANCH_FAIL,
    payload: {},
  };
}

export function addBranchSuccess(data) {
  return {
    type: ADD_BRANCH_SUCCESS,
    payload: data,
  };
}

export function addBranchAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await branchAPI.insert(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(addBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(addBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(addBranchFail());
      return false;
    }
  };
}

export function getAllBranchFail() {
  return {
    type: GET_ALL_BRANCH_FAIL,
    payload: {},
  };
}

export function getAllBranchSuccess(data) {
  return {
    type: GET_ALL_BRANCH_SUCCESS,
    payload: data,
  };
}

export function getAllBranchAction() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await branchAPI.getAll();
      if (res.success) {
        dispatch(loading());
        dispatch(getAllBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getAllBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getAllBranchFail());
      return false;
    }
  };
}

export function updateBranchFail() {
  return {
    type: UPDATE_BRANCH_FAIL,
    payload: {},
  };
}

export function updateBranchSuccess(data) {
  return {
    type: UPDATE_BRANCH_SUCCESS,
    payload: data,
  };
}

export function updateBranchAction(dataSubmit) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await branchAPI.update(dataSubmit);
      if (res.success) {
        dispatch(loading());
        dispatch(updateBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(updateBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(updateBranchFail());
      return false;
    }
  };
}

export function filterBranchFail() {
  return {
    type: FILTER_BRANCH_FAIL,
    payload: {},
  };
}

export function filterBranchSuccess(data) {
  return {
    type: FILTER_BRANCH_SUCCESS,
    payload: data,
  };
}

export function filterBranchAction(queryParams) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await branchAPI.filter(queryParams);
      console.log("log at ==> branchAction ==> res: ", res);
      if (res.success) {
        dispatch(loading());
        dispatch(filterBranchSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(filterBranchFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(filterBranchFail());
      return false;
    }
  };
}
