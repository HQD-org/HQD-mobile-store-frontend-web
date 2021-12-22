/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CouponHeader from "./components/CouponHeader";
import Coupons from "./components/Coupon";
import CouponForm from "./components/CouponForm";
import { filterCouponAction } from "../../../../redux/actions/Coupon/couponAction";
import { useDispatch, useSelector } from "react-redux";

const CouponFragment = () => {
  const dispatch = useDispatch();
  const updateFlag = useSelector((state) => state.coupon.updateFlag);
  const pagination = useSelector((state) => state.coupon.pagination);
  const [currentItem, setCurrentItem] = useState(undefined);
  const [status, setStatus] = useState("all");
  const filterCoupon = async (page, itemPerPage) => {
    const query = {
      page,
      itemPerPage,
    };
    if (status && status !== "all") query.status = status;
    await dispatch(filterCouponAction(query));
  };

  useEffect(() => {
    filterCoupon(1, 20);
  }, []);

  useEffect(() => {
    filterCoupon(pagination.page, pagination.itemPerPage);
  }, [updateFlag]);

  useEffect(() => {
    filterCoupon(1, pagination.itemPerPage);
  }, [status]);

  return (
    <div>
      <CouponHeader setStatus={setStatus} status={status} />
      <div className="row">
        <div className="col-8">
          <Coupons filter={filterCoupon} setCurrentItem={setCurrentItem} />
        </div>
        <div className="col-4">
          <CouponForm
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
          />
        </div>
      </div>
    </div>
  );
};

export default CouponFragment;
