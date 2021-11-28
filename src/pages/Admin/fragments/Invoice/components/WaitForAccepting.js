import React, { useState } from "react";
import InvoiceInformation from "./InvoiceInformation";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { FcViewDetails } from "react-icons/fc";

const WaitForAccepting = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <table className="table-invoice">
        <tr>
          <th>STT</th>
          <th>Mã đơn</th>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Tổng tiền</th>
          <th>Ngày tạo đơn</th>
          <th></th>
        </tr>
        <tr onClick={toggle}>
          {" "}
          <td>1</td>
          <td>DH111</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td style={{ textAlign: "center" }}>
            <button type="submit" className="btnAccept">
              Accept
            </button>
          </td>
        </tr>
        <tr onClick={toggle}>
          {" "}
          <td>2</td>
          <td>DH112</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td style={{ textAlign: "center" }}>
            <button type="submit" className="btnAccept">
              Accept
            </button>
          </td>
        </tr>
        <tr onClick={toggle}>
          {" "}
          <td>3</td>
          <td>DH113</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td style={{ textAlign: "center" }}>
            <button type="submit" className="btnAccept">
              Accept
            </button>
          </td>
        </tr>
      </table>

      <Modal isOpen={modal} toggle={toggle} className="modal-invoice">
        <ModalHeader className="close-x" toggle={toggle}>
          <FcViewDetails fontSize="30px" />
          Đơn hàng
        </ModalHeader>
        <ModalBody>
          <InvoiceInformation />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default WaitForAccepting;
