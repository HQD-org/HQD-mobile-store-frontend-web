import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  numberWithCommas,
  formatDate,
} from "../../../../../common/utils/helper";
import { changeStatusOrderAction } from "../../../../../redux/actions/Order/orderAction";
import paypalAPI from "../../../../../apis/Paypal.Api.js";

const TableInvoice = (props) => {
  const dispatch = useDispatch();
  const { setModal, nextStatus, getInvoiceByStatus, setCurrentItem } = props;
  const invoices = useSelector((state) => state.order.list);
  const pagination = useSelector((state) => state.order.pagination);
  const toggle = (index) => {
    setModal(true);
    setCurrentItem(index);
  };

  const changeStatusOrder = async (id) => {
    const res = await dispatch(
      changeStatusOrderAction({ idOrder: id, status: nextStatus })
    );
    if (res) getInvoiceByStatus(pagination.page, pagination.itemPerPage);
  };

  const cancelOrder = async (id, index) => {
    const res = await dispatch(
      changeStatusOrderAction({ idOrder: id, status: "cancel" })
    );
    if (res) {
      if (invoices[index].receiveInfo.status === "online") {
        paypalAPI.refund({
          saleId: invoices[index].saleId,
          totalPrice: invoices[index].totalPrice,
        });
      }
      getInvoiceByStatus(pagination.page, pagination.itemPerPage);
    }
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
            <tr key={item._id}>
              <td onClick={() => toggle(index)}>{index + 1}</td>
              <td onClick={() => toggle(index)}>{item._id}</td>
              <td onClick={() => toggle(index)}>{receiveInfo.receiver}</td>
              <td onClick={() => toggle(index)}>{receiveInfo.phone}</td>
              <td onClick={() => toggle(index)}>
                {numberWithCommas(item.totalPrice)} ₫
              </td>
              <td onClick={() => toggle(index)}>
                {formatDate(item.createdAt)}
              </td>
              <td style={{ textAlign: "center" }}>
                {item.status === "cancel" || item.status === "delivered" ? (
                  <> </>
                ) : (
                  <button
                    onClick={() => changeStatusOrder(item._id)}
                    className="btnAccept"
                  >
                    Accept
                  </button>
                )}
              </td>
              <td style={{ textAlign: "center" }}>
                {item.status === "wait" ? (
                  <button
                    onClick={() => cancelOrder(item._id, index)}
                    className="btnCancel"
                  >
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
