import React from "react";
import { RiCoupon3Fill } from "react-icons/ri";
import { FormGroup } from "reactstrap";
import { statusCoupon } from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Coupon.Style.css";

const CouponHeader = (props) => {
  const { setStatus, status } = props;
  const onStatusFilterChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <RiCoupon3Fill className="icon-admin icon-coupon" />
            <span className="name-management">Coupon</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <form>
          <div className="row mb-3">
            <div className="col-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                name="searchTerm"
              />
            </div>
            <div className="col-2">
              <FormGroup>
                <select
                  className="form-select"
                  value={status}
                  onChange={onStatusFilterChange}
                >
                  <option value="all">Status</option>
                  {statusCoupon.map((item) => (
                    <option value={item._id} key={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(CouponHeader);
