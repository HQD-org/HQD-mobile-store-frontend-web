import { LOADING, SET_SHOW_ATTR } from "./types";
export function changeLoading(loading = false) {
  return {
    type: LOADING,
    payload: loading,
  };
}

export function changeShow(show = true) {
  return {
    type: SET_SHOW_ATTR,
    payload: show,
  };
}
