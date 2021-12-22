/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";
import OrderList from "./components/OrderList";
import "../../common/css/Bill.Style.css";
import img from "../../common/images/bill.png";
import Pagination from "../../common/components/Pagination";
import { getByStatusAndUserAction } from "../../redux/actions/Order/orderAction";
import InvoiceInformation from "../../common/components/InvoiceInformation";

const BillPage = (props) => {
  const dispatch = useDispatch();
  const { showHeaderAndFooter } = props;
  const [currentItem, setCurrentItem] = useState(-1);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState("wait");
  const pagination = useSelector((state) => state.order.pagination);

  const filterOrder = async (page, itemPerPage) => {
    await dispatch(getByStatusAndUserAction({ status, page, itemPerPage }));
  };

  const onPageChange = (page) => {
    filterOrder(page, pagination.itemPerPage);
  };

  const onItemPerPageChange = (itemPerPage) => {
    filterOrder(1, itemPerPage);
  };

  useEffect(() => {
    filterOrder(1, 16);
    dispatch(showHeaderAndFooter(true));
  }, []);

  useEffect(() => {
    filterOrder(pagination.page, pagination.itemPerPage);
  }, [status]);

  return (
    <div className="container">
      <div className="row mt-3 mb-3" style={{ alignItems: "center" }}>
        <div className="col-8">
          <div className="row mt-3 mb-3">
            <Filter setStatus={setStatus} status={status} />
          </div>
          <div className="row mt-3 mb-3">
            <OrderList
              filterOrder={filterOrder}
              setModal={setModal}
              setCurrentItem={setCurrentItem}
            />
          </div>
        </div>
        <div className="col-4">
          <img src={img} alt="background" width="100%" />
        </div>
      </div>
      <Pagination
        pagination={pagination}
        onPageChange={onPageChange}
        onItemPerPageChange={onItemPerPageChange}
      />

      <InvoiceInformation
        setModal={setModal}
        modal={modal}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </div>
  );
};
export default BillPage;
