import validator from "validator";
import toastNotify from "../../../../../common/toastify";

export const validateAddCoupon = (data) => {
  const isEmptyName = validator.isEmpty(data.name);
  if (isEmptyName) {
    toastNotify("Tên khuyến mãi không được để trống");
    return false;
  }

  if (data.quantity <= 0) {
    toastNotify("Số lượng phải lớn hơn 0");
    return false;
  }

  const isEmptyDescription = validator.isEmpty(data.description);
  if (isEmptyDescription) {
    toastNotify("Mô tả không được để trống");
    return false;
  }

  const isNotPositiveDiscountValue = data.discountValue <= 0;
  if (isNotPositiveDiscountValue) {
    toastNotify("Giá hoặc phầm trăm khuyến mãi phải lớn hơn 0");
    return false;
  }

  if (data.minPriceToApply < 0) {
    toastNotify("Giá trị đơn hàng tối thiểu phải lớn hơn hoặc bằng 0");
    return false;
  }

  if (data.maxDiscount <= 0 && data.discountBy === "percent") {
    toastNotify("Giảm tối đa phải lớn hơn 0");
    return false;
  }

  const startedDate = data.startedDate.getTime();
  const expiredDate = data.expiredDate.getTime();
  const dateNow = new Date().getTime() - 1000 * 60 * 60 * 24;
  if (startedDate < dateNow) {
    toastNotify("Ngày bắt đầu không được nhỏ hơn ngày hiện tại");
    return false;
  }

  if (startedDate >= expiredDate) {
    toastNotify("Ngày kết thúc không được nhỏ hơn ngày bắt đầu");
    return false;
  }

  if (!data.image) {
    toastNotify("Hình không được bỏ trống");
    return false;
  }

  return data;
};

export const validateUpdateCoupon = (data) => {
  if (data.quantity <= 0) {
    toastNotify("Số lượng phải lớn hơn 0");
    return false;
  }

  const isEmptyDescription = validator.isEmpty(data.description);
  if (isEmptyDescription) {
    toastNotify("Mô tả không được để trống");
    return false;
  }

  const isNotPositiveDiscountValue = data.discountValue <= 0;
  if (isNotPositiveDiscountValue) {
    toastNotify("Giá hoặc phầm trăm khuyến mãi phải lớn hơn 0");
    return false;
  }

  if (data.minPriceToApply < 0) {
    toastNotify("Giá trị đơn hàng tối thiểu phải lớn hơn hoặc bằng 0");
    return false;
  }

  if (data.maxDiscount <= 0 && data.discountBy === "percent") {
    toastNotify("Giảm tối đa phải lớn hơn 0");
    return false;
  }

  const startedDate = data.startedDate.getTime();
  const expiredDate = data.expiredDate.getTime();
  const dateNow = new Date().getTime() - 1000 * 60 * 60 * 24;
  if (startedDate < dateNow) {
    toastNotify("Ngày bắt đầu không được nhỏ hơn ngày hiện tại");
    return false;
  }

  if (startedDate >= expiredDate) {
    toastNotify("Ngày kết thúc không được nhỏ hơn ngày bắt đầu");
    return false;
  }

  return data;
};
