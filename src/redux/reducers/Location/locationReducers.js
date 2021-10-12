/* eslint-disable import/no-anonymous-default-export */
import {
  GET_DISTRICT_FAIL,
  GET_DISTRICT_SUCCESS,
  GET_PROVINCE_FAIL,
  GET_PROVINCE_SUCCESS,
  GET_VILLAGE_FAIL,
  GET_VILLAGE_SUCCESS,
} from "../../actions/Location/types";

const initState = {
  provinces: [],
  districts: [],
  villages: [],
};
export default function (state = initState, action) {
  switch (action.type) {
    case GET_PROVINCE_SUCCESS:
      return {
        ...state,
        provinces: action.payload,
        districts: [],
        villages: [],
      };
    case GET_DISTRICT_SUCCESS:
      return { ...state, districts: action.payload, villages: [] };
    case GET_VILLAGE_SUCCESS:
      return { ...state, villages: action.payload };
    case GET_PROVINCE_FAIL:
    case GET_DISTRICT_FAIL:
    case GET_VILLAGE_FAIL:
    default:
      return state;
  }
}
