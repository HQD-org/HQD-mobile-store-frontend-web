import React, { useState } from "react";
import InvoiceInformation from "./InvoiceInformation";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { FcViewDetails } from "react-icons/fc";

const Cancel = () => {
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
        </tr>
        <tr onClick={toggle}>
          <td>1</td>
          <td>DH1116</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
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

export default Cancel;
