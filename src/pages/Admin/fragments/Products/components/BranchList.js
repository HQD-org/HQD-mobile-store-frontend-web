import React from "react";
import { Modal, ModalBody, ModalHeader, FormGroup } from "reactstrap";
import { HiLocationMarker } from "react-icons/hi";

const BranchList = (props) => {
  const { className, toggle } = props;
  let { modal } = props;
  const onToggle = () => {
    toggle(false);
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}>
        <HiLocationMarker style={{ fontSize: "30px" }} />
        Chi nhánh có hàng
      </ModalHeader>
      <ModalBody>
        <div className="row mb-3">
          <div className="col-6">
            <FormGroup>
              <select className="form-select">
                <option selected disabled>
                  Tỉnh/Thành phố
                </option>
                <option value="1">HCM</option>
                <option value="2">LD</option>
              </select>
            </FormGroup>
          </div>
          <div className="col-6">
            <FormGroup>
              <select className="form-select">
                <option selected disabled>
                  Quận/Huyện
                </option>
                <option value="1">Q1</option>
                <option value="2">Q2</option>
              </select>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <ul>
            <li>
              <span>
                1 Võ Văn Ngân, phường gì đó không nhớ, thành phố Thủ Đức (Tên
                cửa hàng)
              </span>
              <p style={{ color: "#2f8ed1" }}>Còn 2 sản phẩm</p>
            </li>
            <li>
              <span>
                2 Võ Văn Ngân, phường gì đó không nhớ, thành phố Thủ Đức (Tên
                cửa hàng)
              </span>
              <p style={{ color: "#2f8ed1" }}>Còn 5 sản phẩm</p>
            </li>
          </ul>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default BranchList;
