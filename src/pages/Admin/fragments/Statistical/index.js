/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBranchAction } from "../../../../redux/actions/Branch/branchAction";
import {
  getProfitByYearAction,
  getTop10BestSellerProductAction,
} from "../../../../redux/actions/Order/orderAction";
import StatisticalProduct from "./components/Product";
import Profit from "./components/Profit";
import StatisticalHeader from "./components/StatisticalHeader";

const StatisticalFragment = () => {
  const dispatch = useDispatch();
  const listBranch = useSelector((state) => state.branch.list);
  const role = useSelector((state) => state.auth.role);
  const branch = useSelector((state) => state.auth.branch);
  const [btnChart, setBtnChart] = useState(true);
  const [idBranch, setIdBranch] = useState("61a23e0527b5b90016616975");
  const [year, setYear] = useState(2021);

  const getProfitByYear = async () => {
    const query = { year };
    if (idBranch && idBranch !== "all") query.idBranch = idBranch;
    await dispatch(getProfitByYearAction(query));
  };

  const getTop10BestSellerProduct = async () => {
    const query = { year };
    if (idBranch && idBranch !== "all") query.idBranch = idBranch;
    await dispatch(getTop10BestSellerProductAction(query));
  };

  const onChangeIdBranch = (e) => {
    setIdBranch(e.target.value);
  };

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  useEffect(() => {
    if (btnChart) {
      getProfitByYear();
      return;
    }
    getTop10BestSellerProduct();
  }, [idBranch, year]);

  useEffect(() => {
    if (role === "admin") {
      if (btnChart) {
        getProfitByYear();
      } else {
        getTop10BestSellerProduct();
      }
      const getAllBranch = async () => {
        await dispatch(getAllBranchAction());
      };
      getAllBranch();
      return;
    }
    if (branch && role === "manager branch") {
      setIdBranch(branch._id);
    }
  }, [branch, role]);

  useEffect(() => {
    if (btnChart) {
      getProfitByYear();
      return;
    }
    getTop10BestSellerProduct();
  }, [btnChart]);

  return (
    <div>
      <div className="row">
        <StatisticalHeader />
        <div className="row">
          <div className="row mb-3" style={{ justifyContent: "end" }}>
            {role === "admin" ? (
              <div className="col-3">
                <select
                  value={idBranch}
                  className="form-select"
                  onChange={onChangeIdBranch}
                >
                  <option value={"all"}>Tất cả</option>
                  {listBranch.map((branch) => (
                    <option value={branch._id} key={branch._id}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <></>
            )}
            <div className="col-2">
              <select
                value={year}
                className="form-select"
                onChange={onChangeYear}
              >
                <option value={2020}>{2020}</option>
                <option value={2021}>{2021}</option>1
              </select>
            </div>
            <div className="col-1">
              <button
                type="button"
                className="statistical-profit"
                onClick={() => setBtnChart(true)}
              >
                Profit
              </button>
            </div>
            <div className="col-2">
              <button
                type="button"
                className="statistical-product"
                onClick={() => setBtnChart(false)}
              >
                Product
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          {btnChart ? <Profit /> : <StatisticalProduct />}
        </div>
      </div>
    </div>
  );
};

export default StatisticalFragment;
