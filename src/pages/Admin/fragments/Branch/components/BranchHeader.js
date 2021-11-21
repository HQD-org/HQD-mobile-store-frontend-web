import React, { useState } from "react";
import "../../../../../common/css/Branch.Style.css";
import { IoAddCircleOutline } from "react-icons/io5";
import BranchEditor from "./BranchEditor";

const BranchHeader = (props) => {
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
            <span className="name-management">Branchs</span>
          </div>
          <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
        </div>

        <div className="col-2">
          <button type="button" className="btn-addBrand" onClick={toggle}>
            {buttonLabel}
            <IoAddCircleOutline
              style={{ fontSize: "20px", marginRight: "5px" }}
            />

            <span>Add Branch</span>
          </button>
        </div>
        <BranchEditor
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

export default BranchHeader;
