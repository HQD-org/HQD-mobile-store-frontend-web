import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import React, { useEffect, useState } from "react";
import { BsBox } from "react-icons/bs";
import { FcApproval, FcClock, FcTwoSmartphones } from "react-icons/fc";
import { MdSecurity, MdSync } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getAllCouponAction } from "../../../redux/actions/Coupon/couponAction";
import { formatDate, numberWithCommas } from "../../../common/utils/helper";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Information = () => {
  const [value, setValue] = useState("1");
  const product = useSelector((state) => state.product.productDetail);
  const list = useSelector((state) => state.coupon.list);
  const [brand, setBrand] = useState({});
  const [model, setModel] = useState({});
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    const getAllCoupon = async () => {
      await dispatch(getAllCouponAction(false));
    };

    getAllCoupon();
  }, []);
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
              <Tab label="Khuyến mãi" value="3" />
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
          <TabPanel value="3">
            {list.map((c) => {
              return c.status === "active" ? (
                <div>
                  <p>
                    <CheckCircleIcon style={{ color: "#3FA5EF" }} />{" "}
                    {c.description} từ ngày
                    <span style={{ color: "red" }}>
                      {" "}
                      {formatDate(c.startedDate)}{" "}
                      <span style={{ color: "black" }}>đến ngày</span>{" "}
                      {formatDate(c.expiredDate)}{" "}
                      <p>
                        Mã khuyến mãi:{" "}
                        <span style={{ color: "#3FA5EF" }}>
                          {c.name} (Giảm tối đa{" "}
                          {numberWithCommas(c.maxDiscount)}₫ với đơn hàng tối
                          thiểu {numberWithCommas(c.minPriceToApply)}₫){" "}
                        </span>
                      </p>
                    </span>
                  </p>
                </div>
              ) : (
                <></>
              );
            })}
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Information;
