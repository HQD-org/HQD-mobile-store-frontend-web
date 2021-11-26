import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import "../css/User.Style.css";

const HeaderDashboard = (props) => {
  const { buttonLabel, type, modal, setModal, setOption } = props;
  const toggle = () => {
    setModal(!modal);
    setOption(true);
  };
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ marginTop: "50px", alignItems: "baseline" }}
      >
        <div className="col">
          <div>
            <i className="bi bi-person-fill icon-admin icon-user" />
            <span className="name-management">{type}</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>
        <div className="col-2">
          <button type="button" className="btn-addBrand" onClick={toggle}>
            {buttonLabel}
            <IoAddCircleSharp
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            <span>Add {type}</span>
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HeaderDashboard;
