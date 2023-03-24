import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas, formatDate } from "../../../common/utils/helper";
import { removeOrderAction } from "../../../redux/actions/Order/orderAction";
import paypalAPI from "../../../apis/Paypal.Api.js";

const OrderList = (props) => {
  const { filterOrder, setModal, setCurrentItem } = props;
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.order.pagination);
  const invoices = useSelector((state) => state.order.list);
  const toggle = (index) => {
    setModal(true);
    setCurrentItem(index);
  };

  const cancelOrder = async (id, index) => {
    const res = await dispatch(removeOrderAction({ idOrder: id }));
    if (res) {
      // paypalAPI.refund({
      //   idPayment: invoices[index].idPayment,
      //   transaction: invoices[index].totalPrice,
      // });
      filterOrder(pagination.page, pagination.itemPerPage);
    }
  };
  return (
    <div>
      <table className="table-invoice">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã đơn</th>
            <th>Họ tên người nhận</th>
            <th>Số điện thoại</th>
            <th>Tổng tiền</th>
            <th>Ngày tạo đơn</th>
            <th>Action</th>
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
    </div>
  );
};

export default OrderList;
