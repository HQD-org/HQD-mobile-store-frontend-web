import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FcTwoSmartphones, FcClock, FcApproval, FcGlobe } from "react-icons/fc";
import { MdSecurity, MdSync } from "react-icons/md";
import { BsBox } from "react-icons/bs";

const Information = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="row mt-3">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Giới thiệu" value="1" />
              <Tab label="Chính sách" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <p>
              <FcTwoSmartphones /> Thương hiệu: OPPO
            </p>
            <p>
              <FcClock /> Thời gian ra mắt: 2020
            </p>
            <p>
              <FcApproval /> Hàng chính hãng - Bảo hành 12 tháng
            </p>
            <p>
              <FcGlobe /> Xuất xứ: Trung Quốc
            </p>
          </TabPanel>
          <TabPanel value="2">
            <p>
              <MdSecurity /> Bảo hành chính hãng 1 năm
            </p>
            <p>
              <BsBox /> Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp
              microUSB, Củ sạc rời đầu Type A
            </p>
            <p>
              <MdSync /> 1 đổi 1 trong 30 ngày đối với sản phẩm lỗi
            </p>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Information;
