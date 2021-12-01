import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useState, useEffect } from "react";
import { BsBox } from "react-icons/bs";
import { FcApproval, FcClock, FcGlobe, FcTwoSmartphones } from "react-icons/fc";
import { MdSecurity, MdSync } from "react-icons/md";
import { useSelector } from "react-redux";

const Information = () => {
  const [value, setValue] = useState("1");
  const product = useSelector((state) => state.product.productDetail);
  const [brand, setBrand] = useState({});
  const [model, setModel] = useState({});
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (product.brand) setBrand(product.brand);
    if (product.model) setModel(product.model);
  }, [product]);
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
              <FcTwoSmartphones /> Thương hiệu: {brand.name}
            </p>
            <p>
              <FcClock /> Thời gian ra mắt: {model.timeDebut}
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
