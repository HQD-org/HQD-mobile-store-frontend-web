import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { default as AddBtn } from "../../../../../common/images/coupon.png";

const CouponForm = () => {
  const [checkedPrice, setCheckedPrice] = useState(true);
  const [checkedPercent, setCheckedPercent] = useState(true);
  const [choosePrice, setChoosePrice] = useState(false);
  const [choosePercent, setChoosePercent] = useState(false);
  const [couponPrice, setCouponPrice] = useState("");
  const [couponPercent, setCouponPercent] = useState("");
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const handleValueCouponPrice = (event) => {
    setCouponPrice(event.target.value);
  };
  const handleValueCouponPercent = (event) => {
    setCouponPercent(event.target.value);
  };

  const handleChoosePrice = (event) => {
    setCheckedPrice(event.target.checked);
    setChoosePrice(!choosePrice);
    setCouponPrice("");
    console.log(choosePrice);
    console.log(checkedPrice);
  };
  const handleChoosePercent = (event) => {
    setCheckedPercent(event.target.checked);
    setChoosePercent(!choosePercent);
    setCouponPercent("");
    console.log(choosePercent);
    console.log(checkedPercent);
  };
  return (
    <div className="form-coupon">
      <div className="header-coupon">
        <img
          src={AddBtn}
          alt=""
          style={{ width: "30px", marginRight: "5px" }}
        />
        <span className="txtAddCoupon">Coupon</span>
      </div>

      <form>
        <div>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              id="outlined-basic"
              label="Tên mã khuyến mãi"
              variant="outlined"
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              id="outlined-number"
              label="Số lượng"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Mô tả"
              floatingLabelText="MultiLine and FloatingLabel"
              multiline
              rows={2}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              inputProps={{ readOnly: choosePrice }}
              value={couponPrice}
              id="outlined-basic"
              label="Giảm theo mệnh giá"
              variant="outlined"
              onChange={handleValueCouponPrice}
            />
            <div className="row">
              <div className="col-1">
                <Checkbox
                  style={{ padding: "0" }}
                  checked={checkedPrice}
                  onChange={handleChoosePrice}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="col">
                <span> Khuyến mãi theo mệnh giá</span>
              </div>
            </div>
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              inputProps={{ readOnly: choosePercent }}
              id="outlined-basic"
              label="Giảm theo %"
              value={couponPercent}
              variant="outlined"
              onChange={handleValueCouponPercent}
            />
            <div className="row">
              <div className="col-1">
                <Checkbox
                  style={{ padding: "0" }}
                  checked={checkedPercent}
                  onChange={handleChoosePercent}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="col">
                <span> Khuyến mãi theo %</span>
              </div>
            </div>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} className="form-control-coupon">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Thời gian bắt đầu"
                value={timeStart}
                onChange={(newValue) => setTimeStart(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} className="form-control-coupon">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Thời gian kết thúc"
                value={timeEnd}
                onChange={(newValue) => setTimeEnd(newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} className="form-control-coupon">
            <InputLabel>Trạng thái</InputLabel>
            <Select label="Trạng thái">
              <MenuItem value="1">Khả dụng</MenuItem>
              <MenuItem value="2">Không khả dụng</MenuItem>
              <MenuItem value="3">Hế mã</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div style={{ display: "flex", justifyContent: "end" }}>
          <button type="submit" className="btnAddCoupon">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default CouponForm;
