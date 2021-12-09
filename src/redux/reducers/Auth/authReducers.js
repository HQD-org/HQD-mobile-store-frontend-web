/* eslint-disable import/no-anonymous-default-export */
import {
  GET_AUTH_FAIL,
  GET_AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  // REGISTER_FAIL,
  // REGISTER_SUCCESS,
  // VERIFY_FAIL,
  // VERIFY_SUCCESS,
} from "../../actions/Auth/types";

const initState = {
  user: {},
  isLogin: false,
  role: "guest",
  branch: {},
};
export default function (state = initState, action) {
  switch (action.type) {
    case GET_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
        role: action.payload.role,
        branch: action.payload.idBranch,
      };
    case GET_AUTH_FAIL:
      return { ...state, user: {}, isLogin: false, role: "guest" };
    case LOGIN_FAIL:
      return { ...state, user: {}, isLogin: false, role: "guest" };
    case LOGIN_SUCCESS:
      return { ...state, isLogin: true, role: action.payload.role };
    case LOGOUT:
      return { ...state, user: {}, isLogin: false, role: "guest" };
    default:
      return state;
  }
}
