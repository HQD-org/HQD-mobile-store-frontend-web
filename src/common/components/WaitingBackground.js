/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "../css/Loading.Style.css";
import { changeShow } from "../../redux/actions/System/systemAction";
import { useDispatch } from "react-redux";
const WaitingBackground = (props) => {
  const dispatch = useDispatch();
  const show =
    (show = true) =>
    (dispatch) => {
      dispatch(changeShow(show));
    };
  useEffect(() => {
    dispatch(show(false));
  }, []);
  const { SpecificComponent, doneGetAuth, ...remain } = props;
  return doneGetAuth ? (
    <SpecificComponent showHeaderAndFooter={show} {...remain} />
  ) : (
    <div
      style={{ backgroundColor: "#DCDCDC", width: "100%", height: "100vh" }}
    ></div>
  );
};

export default WaitingBackground;
