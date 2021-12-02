import React, { useState } from "react";
import "../../../common/css/Profile.Style.css";
import imgXinh from "../../../common/images/changeinfo.png";
import ChangePassword from "./ChangePassword";

const Profile = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div
      className="row"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="col-4">
        <img src={imgXinh} alt="" width="100%" />
      </div>
      <div className="col-6">
        <br />
        <form>
          <div className="form-Infor">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Chỗ này update tên nè"
            />
            <input
              type="number"
              class="form-control mb-3"
              placeholder="Chỗ này update Số điện thoại nè"
            />
            <input
              readOnly
              type="email"
              class="form-control mb-3"
              placeholder="Email không được update nè"
            />
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Địa chỉ update ở đây nha"
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
            <div className="row" style={{ textAlign: "end" }}>
              <div className="col">
                <button type="button" className="btnSaveInfor">
                  Save
                </button>
                <button
                  type="button"
                  className="btnChangePass"
                  onClick={toggle}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ChangePassword modal={modal} toggle={toggle} />
    </div>
  );
};

export default Profile;
