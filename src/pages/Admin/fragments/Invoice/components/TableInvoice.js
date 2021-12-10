import React from "react";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../../../common/utils/helper";

const TableInvoice = (props) => {
  const { setModal, modal, type } = props;
  const invoices = useSelector((state) => state.order.list);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <table className="table-invoice">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã đơn</th>
          <th>Họ tên</th>
          <th>Số điện thoại</th>
          <th>Tổng tiền</th>
          <th>Ngày tạo đơn</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((item, index) => {
          const receiveInfo = item.receiveInfo;
          return (
            <tr onClick={toggle} key={item._id}>
              <td>{index + 1}</td>
              <td>{item._id}</td>
              <td>{receiveInfo.receiver}</td>
              <td>{receiveInfo.phone}</td>
              <td>{numberWithCommas(item.totalPrice)} ₫</td>
              <td>{item.createdAt}</td>
              <td style={{ textAlign: "center" }}>
                {item.status === "cancel" || item.status === "delivered" ? (
                  <> </>
                ) : (
                  <button type="submit" className="btnAccept">
                    Accept
                  </button>
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                {item.status === "wait" ? (
                  <button type="submit" className="btnCancel">
                    Cancel
                  </button>
                ) : (
                  <></>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableInvoice;
