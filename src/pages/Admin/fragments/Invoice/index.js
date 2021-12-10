/* eslint-disable react-hooks/exhaustive-deps */
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getByStatusAndBranchAction } from "../../../../redux/actions/Order/orderAction";
import InvoiceHeader from "./components/InvoiceHeader";
import TableInvoice from "./components/TableInvoice";

const InvoiceFragment = React.memo(() => {
  const dispatch = useDispatch();
  const branch = useSelector((state) => state.auth.branch);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getInvoiceByStatus = async (page, itemPerPage, status) => {
    const query = {
      page,
      itemPerPage,
      status,
      idBranch: branch._id,
    };
    console.log("log at --> invoice index --> query: ", query);
    await dispatch(getByStatusAndBranchAction(query));
  };

  useEffect(() => {
    getInvoiceByStatus(1, 16, "wait");
  }, []);

  return (
    <div>
      <InvoiceHeader />
      <div className="row container-fluid">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Chờ xác nhận" value="1" />
                <Tab label="Chờ lấy hàng" value="2" />
                <Tab label="Đang giao hàng" value="3" />
                <Tab label="Giao thành công" value="4" />
                <Tab label="Đã hủy" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <TableInvoice />
            </TabPanel>
            <TabPanel value="2">
              <TableInvoice />
            </TabPanel>
            <TabPanel value="3">
              <TableInvoice />
            </TabPanel>
            <TabPanel value="4">
              <TableInvoice />
            </TabPanel>
            <TabPanel value="5">
              <TableInvoice />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
});

export default InvoiceFragment;
