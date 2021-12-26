import { GET_PROVINCE_FAIL, GET_PROVINCE_SUCCESS } from "./types";
import { location } from "../../../common/constants/location";

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

export function getAllProvince() {
  return async (dispatch) => {
    try {
      const res = await Object.keys(location).map((key) => {
        return location[key];
      });
      dispatch(getProvinceSuccess(res));
      return true;
    } catch {
      dispatch(getProvinceFail());
      return false;
    }
  };
}
