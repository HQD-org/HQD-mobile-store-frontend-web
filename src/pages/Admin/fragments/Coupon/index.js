import React from "react";
import CouponHeader from "./components/CouponHeader";
import Coupons from "./components/Coupon";
import CouponForm from "./components/CouponForm";

const CouponFragment = React.memo(() => {
  return (
    <div>
      <CouponHeader />
      <div className="row">
        <div className="col-8">
          <Coupons />
        </div>
        <div className="col-4">
          <CouponForm />
        </div>
      </div>
    </div>
  );
});

export default CouponFragment;
