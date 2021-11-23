/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import BasicInfor from "./components/BasicInfor";
import Description from "./components/Description";
import Information from "./components/Information";
import Secifications from "./components/Specifications";
import AnotherProduct from "./components/AnotherProduct";

const DetailPage = (props) => {
  const { showHeaderAndFooter } = props;
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="row mb-2">
            <div className="col heart">
              <div>
                <FaHeart
                  style={{ cursor: "pointer" }}
                  color={`${like ? "red" : "#cecece"}`}
                  onClick={() => setLike(!like)}
                />
              </div>
            </div>
          </div>

          <hr />
          <BasicInfor />
          <div className="row mt-3">
            <div className="col-6">
              <Information />
              <Description />
            </div>
            <div className="col-6">
              <Secifications />
            </div>
          </div>

          <div className="row mt-3">
            <hr />
            <h5>Một số sản phẩm cùng hãng</h5>
            <AnotherProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
