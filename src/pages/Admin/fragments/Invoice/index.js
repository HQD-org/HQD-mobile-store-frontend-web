/* eslint-disable react-hooks/exhaustive-deps */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByStatusAndBranchAction } from "../../../../redux/actions/Order/orderAction";
import InvoiceHeader from "./components/InvoiceHeader";
import InvoiceInformation from "./components/InvoiceInformation";
import TableInvoice from "./components/TableInvoice";

const InvoiceFragment = React.memo(() => {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.auth.branch);
  const firstInitRef = useRef(null);
  const [status, setStatus] = useState("wait");
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(-1);
  const pagination = useSelector((state) => state.order.pagination);

  const statusList = [
    {
      value: "wait",
      next: "confirmed",
    },
    {
      value: "confirmed",
      next: "delivering",
    },
    {
      value: "delivering",
      next: "delivered",
    },
    {
      value: "delivered",
      next: "",
    },
    {
      value: "cancel",
      next: "",
    },
  ];

  const getInvoiceByStatus = async (page, itemPerPage) => {
    const query = {
      page,
      itemPerPage,
      status,
      idBranch: branch._id,
    };
    await dispatch(getByStatusAndBranchAction(query));
  };

  const handleChange = (event, newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    getInvoiceByStatus(1, 16);
  }, []);

  useEffect(() => {
    if (!firstInitRef.current) {
      firstInitRef.current = true;
      return;
    }
    getInvoiceByStatus(pagination.page, pagination.itemPerPage);
  }, [status]);

  return (
    <>
      <InvoiceHeader />
      <div className="row container-fluid">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={status}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Chờ xác nhận" value="wait" />
                <Tab label="Chờ lấy hàng" value="confirmed" />
                <Tab label="Đang giao hàng" value="delivering" />
                <Tab label="Giao thành công" value="delivered" />
                <Tab label="Đã hủy" value="cancel" />
              </TabList>
            </Box>
            {statusList.map((item) => (
              <TabPanel value={item.value}>
                <TableInvoice
                  setCurrentItem={setCurrentItem}
                  setModal={setModal}
                  nextStatus={item.next}
                  getInvoiceByStatus={getInvoiceByStatus}
                />
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </div>

      <InvoiceInformation
        setModal={setModal}
        modal={modal}
        currentItem={currentItem}
      />
    </>
  );
});

export default InvoiceFragment;
