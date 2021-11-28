import React from "react";
import "../../../common/css/Payment.Style.css";

const DeliveryInfor = () => {
  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-5">
        <form>
          <div className="form-deliveryInfor">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Họ tên người nhận"
            />
            <input
              type="number"
              class="form-control mb-3"
              placeholder="Số điện thoại"
            />
            <input type="email" class="form-control mb-3" placeholder="Email" />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Địa chỉ nhận hàng"
            />
            <div className="row ">
              <div className="col-4 mb-3">
                <select class="form-select">
                  <option selected disabled>
                    Tỉnh/Thành phố
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-4 ">
                <select class="form-select">
                  <option selected disabled>
                    Quận/Huyện
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-4 mb-3">
                <select class="form-select">
                  <option selected disabled>
                    Phường/Xã
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <select class="form-select mb-3">
              <option selected disabled>
                Thời gian giao hàng
              </option>
              <option value="1">Giờ hành chính</option>
              <option value="2">Các ngày trong tuần</option>
            </select>

            <textarea className="form-control mb-3" placeholder="Ghi chú" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryInfor;
