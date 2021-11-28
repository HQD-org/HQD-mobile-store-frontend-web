import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Confirm from "./components/Confirm";
import DeliveryInfor from "./components/DeliveryInfor";
import StepZilla from "react-stepzilla";
import Complete from "./components/Complete";

const PaymentPage = (props) => {
  const { showHeaderAndFooter } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showHeaderAndFooter(true));
  });
  const steps = [
    { name: "Information", component: <DeliveryInfor /> },
    { name: "Confirm", component: <Confirm /> },
    { name: "Complete", component: <Complete /> },
  ];
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="step-progress">
          <StepZilla
            steps={steps}
            prevBtnOnLastStep={true}
            startAtStep={0}
            showSteps={true}
          />
        </div>
      </div>
    </div>
  );
};
export default PaymentPage;
