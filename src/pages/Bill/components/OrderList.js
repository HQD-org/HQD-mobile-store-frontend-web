import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { FcViewDetails } from "react-icons/fc";
import BillInformation from "./BillInformation";

const OrderList = () => {
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
          <th>Họ tên người nhận</th>
          <th>Số điện thoại</th>
          <th>Tổng tiền</th>
          <th>Ngày tạo đơn</th>
          <th>Trạng thái</th>
        </tr>
        <tr onClick={toggle}>
          <td>1</td>
          <td>DH111</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td>Chờ xác nhận</td>
        </tr>
        <tr onClick={toggle}>
          <td>2</td>
          <td>DH112</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td>Chờ xác nhận</td>
        </tr>
        <tr onClick={toggle}>
          <td>3</td>
          <td>DH113</td>
          <td>Alfreds Futterkiste</td>
          <td>0123456789</td>
          <td>7.989.999₫</td>
          <td>21/11/2021</td>
          <td>Chờ xác nhận</td>
        </tr>
      </table>

      <Modal isOpen={modal} toggle={toggle} className="modal-invoice">
        <ModalHeader className="close-x" toggle={toggle}>
          <FcViewDetails fontSize="30px" />
          Đơn hàng
        </ModalHeader>
        <ModalBody>
          <BillInformation />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default OrderList;
