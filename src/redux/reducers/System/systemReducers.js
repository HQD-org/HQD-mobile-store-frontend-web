/* eslint-disable import/no-anonymous-default-export */
import { LOADING, SET_SHOW_ATTR } from "../../actions/System/types";

const initState = {
  loading: false,
  showHeaderAndFooter: false,
};
export default function (state = initState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SHOW_ATTR:
      return { ...state, showHeaderAndFooter: action.payload };
    default:
      return state;
  }
}
