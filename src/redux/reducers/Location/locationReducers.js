/* eslint-disable import/no-anonymous-default-export */
import {
  GET_PROVINCE_FAIL,
  GET_PROVINCE_SUCCESS,
} from "../../actions/Location/types";

const initState = {
  provinces: [],
};
export default function (state = initState, action) {
  switch (action.type) {
    case GET_PROVINCE_SUCCESS:
      return {
        ...state,
        provinces: action.payload,
      };
    case GET_PROVINCE_FAIL:
    default:
      return state;
  }
}
