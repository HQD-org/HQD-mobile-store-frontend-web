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
import React, { useRef, useState, useEffect } from "react";
import { MdSettingsBackupRestore } from "react-icons/md";
import { useDispatch } from "react-redux";
import { statusCoupon } from "../../../../../common/constants/ListSelect";
import { default as AddBtn } from "../../../../../common/images/coupon.png";
import { numberWithCommas } from "../../../../../common/utils/helper";
import { upload } from "../../../../../common/utils/uploadFirebase";
import {
  addCouponAction,
  updateCouponAction,
  generateUniqueNameAction,
} from "../../../../../redux/actions/Coupon/couponAction";
import { validateAddCoupon, validateUpdateCoupon } from "../hooks/validate";

const CouponForm = (props) => {
  const { currentItem } = props;
  const dispatch = useDispatch();
  const [discountBy, setDiscountBy] = useState("percent");
  const [name, setName] = useState("");
  const [couponPrice, setCouponPrice] = useState("0");
  const [couponPercent, setCouponPercent] = useState("0");
  const [minPriceToApply, setMinPriceToApply] = useState("0");
  const [maxDiscount, setMaxDiscount] = useState("0");
  const [timeStart, setTimeStart] = useState(new Date());
  const [timeEnd, setTimeEnd] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState();
  const [description, setDescription] = useState("");
  const addCouponForm = useRef();

  const onChangeImage = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onChangeDiscountBy = (event) => {
    setDiscountBy(event.target.value);
    if (event.target.value === "amount") setMaxDiscount("0");
    setCouponPercent(0);
    setCouponPrice(0);
  };

  const onChangeValuePrice = (e) => {
    e.target.value = numberWithCommas(e.target.value.replace(/[^0-9]/g, ""));
    switch (e.target.name) {
      case "couponPrice":
        setCouponPrice(e.target.value || 0);
        break;
      case "minPriceToApply":
        setMinPriceToApply(e.target.value || 0);
        break;
      case "maxDiscount":
        setMaxDiscount(e.target.value || 0);
        break;
      default:
        break;
    }
  };

  const onChangePercent = (e) => {
    if (e.target.value > 100 || e.target.value < 0) return;
    setCouponPercent(e.target.value);
  };

  const onClickGenerateName = async () => {
    if (currentItem) return;
    const name = await dispatch(generateUniqueNameAction());
    if (name) setName(name);
  };

  const resetForm = () => {
    addCouponForm.current.reset();
    setName("");
    setCouponPrice("0");
    setCouponPercent("0");
    setMinPriceToApply("0");
    setMaxDiscount("0");
    setTimeStart(new Date());
    setTimeEnd(new Date());
    setSelectedFile();
    setDiscountBy("percent");
    setDescription("");
  };

  const addCoupon = async (e) => {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      quantity: parseInt(e.target.quantity.value),
      description: e.target.description.value,
      discountValue:
        discountBy === "percent"
          ? couponPercent
          : parseInt(couponPrice.replace(/[^0-9]/g, "")),
      discountBy,
      minPriceToApply: parseInt(minPriceToApply.replace(/[^0-9]/g, "")),
      maxDiscount: parseInt(maxDiscount.replace(/[^0-9]/g, "")),
      startedDate: timeStart,
      expiredDate: timeEnd,
      status: e.target.status.value,
      image: selectedFile,
    };
    const isValidData = validateAddCoupon(data);
    if (isValidData) {
      const imgURL = await upload(data.image, "Coupon");
      data = {
        ...data,
        image: imgURL,
        startedDate: data.startedDate.toString(),
        expiredDate: data.expiredDate.toString(),
      };
      const res = await dispatch(addCouponAction(data));
      if (res) {
        resetForm();
      }
    }
  };

  const updateCoupon = async (e) => {
    e.preventDefault();
    let data = {
      id: currentItem._id,
      quantity: parseInt(e.target.quantity.value),
      description: e.target.description.value,
      discountValue:
        discountBy === "percent"
          ? couponPercent
          : parseInt(couponPrice.replace(/[^0-9]/g, "")),
      discountBy,
      minPriceToApply: parseInt(minPriceToApply.replace(/[^0-9]/g, "")),
      maxDiscount: parseInt(maxDiscount.replace(/[^0-9]/g, "")),
      startedDate: timeStart,
      expiredDate: timeEnd,
      status: e.target.status.value,
    };
    const isValidData = validateUpdateCoupon(data);
    if (isValidData) {
      if (selectedFile) {
        const imgURL = await upload(data.image, "Coupon");
        data.image = imgURL;
      }
      data = {
        ...data,
        startedDate: data.startedDate.toString(),
        expiredDate: data.expiredDate.toString(),
      };
      await dispatch(updateCouponAction(data));
    }
  };

  useEffect(() => {
    if (currentItem) {
      setName(currentItem.name);
      setMinPriceToApply(numberWithCommas(currentItem.minPriceToApply));
      setDiscountBy(currentItem.discountBy);
      if (currentItem.discountBy === "amount") {
        setCouponPrice(numberWithCommas(currentItem.discountValue));
      } else {
        setCouponPercent(currentItem.discountValue);
        setMaxDiscount(numberWithCommas(currentItem.maxDiscount));
      }
      setTimeStart(new Date(currentItem.startedDate));
      setTimeEnd(new Date(currentItem.expiredDate));
      setDescription(currentItem.description);
    }
  }, [currentItem]);

  return (
    <div className="form-coupon">
      <div className="header-coupon">
        <img
          src={AddBtn}
          alt="coupon icon"
          style={{ width: "30px", marginRight: "5px" }}
        />
        <span className="txtAddCoupon">Coupon</span>
      </div>
      <button onClick={resetForm}>Reset Form</button>
      <form
        onSubmit={currentItem ? updateCoupon : addCoupon}
        ref={(el) => (addCouponForm.current = el)}
      >
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
              name="name"
              disabled={true}
              value={name}
            />
            <MdSettingsBackupRestore
              className="render"
              onClick={onClickGenerateName}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              onWheel={(e) => e.target.blur()}
              onFocus={(e) => e.target.select()}
              id="outlined-number"
              label="Số lượng"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              name="quantity"
              defaultValue={currentItem ? currentItem.quantity : 1}
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
              floatinglabeltext="MultiLine and FloatingLabel"
              multiline
              rows={2}
              name="description"
              value={description}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              onFocus={(e) => e.target.select()}
              inputProps={{ readOnly: discountBy === "percent" }}
              value={couponPrice}
              id="outlined-basic"
              label="Giảm theo mệnh giá"
              variant="outlined"
              onChange={onChangeValuePrice}
              type="text"
              name="couponPrice"
            />
            <div className="row">
              <div className="col-1">
                <Checkbox
                  value={"amount"}
                  style={{ padding: "0" }}
                  checked={discountBy === "amount"}
                  onChange={onChangeDiscountBy}
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
              onFocus={(e) => e.target.select()}
              inputProps={{ readOnly: discountBy === "amount" }}
              id="outlined-basic"
              label="Giảm theo %"
              value={couponPercent}
              variant="outlined"
              onChange={onChangePercent}
              type="number"
            />
            <div className="row">
              <div className="col-1">
                <Checkbox
                  value={"percent"}
                  style={{ padding: "0" }}
                  checked={discountBy === "percent"}
                  onChange={onChangeDiscountBy}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="col">
                <span> Khuyến mãi theo %</span>
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
              onFocus={(e) => e.target.select()}
              id="outlined-number"
              label="Giá trị đơn hàng tối thiểu"
              type="text"
              name="minPriceToApply"
              InputLabelProps={{
                shrink: true,
              }}
              value={minPriceToApply}
              onChange={onChangeValuePrice}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1 }}
            variant="outlined"
            className="form-control-coupon"
          >
            <TextField
              onFocus={(e) => e.target.select()}
              id="outlined-number"
              label="Giảm tối đa"
              type="text"
              name="maxDiscount"
              InputLabelProps={{
                shrink: true,
              }}
              value={maxDiscount}
              onChange={onChangeValuePrice}
            />
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
            <Select
              label="Trạng thái"
              defaultValue={currentItem ? currentItem.status : "active"}
              name="status"
            >
              {statusCoupon.map((item) => (
                <MenuItem value={item._id} key={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={onChangeImage}
        />
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
