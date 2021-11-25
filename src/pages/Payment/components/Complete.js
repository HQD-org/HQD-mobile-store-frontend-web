import React from "react";
import complete from "../../../common/images/complete.png";
import { Link } from "react-router-dom";

const Complete = () => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-5">
        <form>
          <div className="form-deliveryInfor">
            <div style={{ textAlign: "center" }}>
              <button className="paymentNow">THANH TOÁN NGAY</button>
            </div>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <Link to="/Cart" style={{ textDecoration: "none" }}>
                <p className="btncancel">Cancel</p>
              </Link>
            </div>

            <img src={complete} alt="" width="100%"></img>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Complete;
