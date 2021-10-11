import locationAPI from "../../../apis/Location.Api";
import {
  GET_DISTRICT_FAIL,
  GET_DISTRICT_SUCCESS,
  GET_PROVINCE_FAIL,
  GET_PROVINCE_SUCCESS,
  GET_VILLAGE_FAIL,
  GET_VILLAGE_SUCCESS,
} from "./types";
import { changeLoading } from "../System/systemAction";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

export function getProvinceSuccess(data) {
  return {
    type: GET_PROVINCE_SUCCESS,
    payload: data,
  };
}

export function getProvinceFail() {
  return {
    type: GET_PROVINCE_FAIL,
    payload: {},
  };
}

export function getProvince() {
  return async (dispatch) => {
    try {
      dispatch(loading());
      const res = await locationAPI.getProvince();
      if (res.success) {
        dispatch(loading());

        dispatch(getProvinceSuccess(res.data));
        return true;
      }
      dispatch(loading(true));
      dispatch(getProvinceFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getProvinceFail());
      return false;
    }
  };
}

export function getDistrictSuccess(data) {
  return {
    type: GET_DISTRICT_SUCCESS,
    payload: data,
  };
}

export function getDistrictFail() {
  return {
    type: GET_DISTRICT_FAIL,
    payload: {},
  };
}

export function getDistrict(idProvince) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await locationAPI.getDistrict(idProvince);
      if (res.success) {
        dispatch(loading());
        dispatch(getDistrictSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getDistrictFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getDistrictFail());
      return false;
    }
  };
}

export function getVillageSuccess(data) {
  return {
    type: GET_VILLAGE_SUCCESS,
    payload: data,
  };
}

export function getVillageFail() {
  return {
    type: GET_VILLAGE_FAIL,
    payload: {},
  };
}

export function getVillage(idDistrict) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      const res = await locationAPI.getVillage(idDistrict);
      if (res.success) {
        dispatch(loading());
        dispatch(getVillageSuccess(res.data));
        return true;
      }
      dispatch(loading());
      dispatch(getVillageFail());
      return false;
    } catch {
      dispatch(loading());
      dispatch(getVillageFail());
      return false;
    }
  };
}
