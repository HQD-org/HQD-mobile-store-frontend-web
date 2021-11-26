import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import InvoiceHeader from "./components/InvoiceHeader";
import WaitForAccepting from "./components/WaitForAccepting";
import WaitForTheGoods from "./components/WaitForTheGoods";
import Delivering from "./components/Delivering";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

const InvoiceFragment = React.memo(() => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <InvoiceHeader />
      <div className="row container-fluid">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Chờ xác nhận" value="1" />
                <Tab label="Chờ lấy hàng" value="2" />
                <Tab label="Đang giao hàng" value="3" />
                <Tab label="Giao thành công" value="4" />
                <Tab label="Đã hủy" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <WaitForAccepting />
            </TabPanel>
            <TabPanel value="2">
              <WaitForTheGoods />
            </TabPanel>
            <TabPanel value="3">
              <Delivering />
            </TabPanel>
            <TabPanel value="4">
              <Success />
            </TabPanel>
            <TabPanel value="5">
              <Cancel />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
});

export default InvoiceFragment;
