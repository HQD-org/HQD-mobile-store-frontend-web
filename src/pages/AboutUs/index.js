import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../../common/css/AboutUs.Style.css";
import Information from "./components/Information";
import Location from "./components/Location";
import { getAllBranchOpenAction } from "../../redux/actions/Branch/branchAction";
import { getAllBrandAction } from "../../redux/actions/Brand/brandAction";
import Partner from "./components/Partner";

const AboutUsPage = (props) => {
  useEffect(() => {
    const getAllOpen = async () => {
      await dispatch(getAllBranchOpenAction());
      await dispatch(getAllBrandAction());
    };
    getAllOpen();

    dispatch(showHeaderAndFooter(true));
  }, []);
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row mb-3 mt-3">
        <Information />
      </div>
      <div className="row mb-3 mt-3">
        <div className="col-5"></div>
        <div className="col-7">
          <hr />
        </div>
      </div>
      <div className="row mb-3 mt-3">
        <Location />
      </div>
      <div className="row mb-3 mt-3">
        <Partner />
      </div>
    </div>
  );
};
export default AboutUsPage;
