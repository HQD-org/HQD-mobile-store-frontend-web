import React, { useState } from "react";
import "../../../../../common/css/User.Style.css";
import { IoAddCircleSharp } from "react-icons/io5";
import UserEditor from "./UserEditor";

const UserHeader = (props) => {
  const { buttonLabel } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="bi bi-person-fill icon-admin icon-user" />
            <span className="name-management">Users</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
        <div className="col-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            name="search"
          />
        </div>
        <div className="col-2">
          <button type="button" className="btn-addBrand" onClick={toggle}>
            {buttonLabel}
            <IoAddCircleSharp
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            <span>Add User</span>
          </button>
        </div>
        <UserEditor
          modal={modal}
          toggle={toggle}
          option={true}
          brand={undefined}
        />
      </div>
      <hr />
    </div>
  );
};

export default React.memo(UserHeader);
