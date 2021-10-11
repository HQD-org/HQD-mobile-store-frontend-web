import { css } from "@emotion/react";
import React from "react";
import ReactLoading from "react-loading";
import { useSelector } from "react-redux";
import "../css/Loading.Style.css";

const override = css`
  display: block;
`;
const Loading = () => {
  const isLoading = useSelector((state) => state.system.loading);
  return isLoading ? (
    <div id={`loading`}>
      <div className="wave">
        <ReactLoading
          type={"spinningBubbles"}
          css={override}
          color={"#3fa5ef"}
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Loading;
