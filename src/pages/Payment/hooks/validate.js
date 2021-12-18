import validator from "validator";
import toastNotify from "../../../common/toastify";

const validateStep1 = (data) => {
  const isEmptyName = validator.isEmpty(data.name);
  if (isEmptyName) {
    toastNotify("Tên người nhận không được bỏ trống");
    return false;
  }

  const isEmail = validator.isEmail(data.email);
  if (!isEmail) {
    toastNotify("Email không hợp lệ");
    return false;
  }

  const isEmptyPhone = validator.isEmpty(data.phone);
  if (isEmptyPhone) {
    toastNotify("Số điện thoại không được bỏ trống");
    return false;
  }

  const address = data.address;
  const isEmptyDetail = validator.isEmpty(address.detail);
  if (isEmptyDetail) {
    toastNotify("Địa chỉ không được bỏ trống");
    return false;
  }

  const isEmptyProvince = validator.isEmpty(address.province);
  if (isEmptyProvince) {
    toastNotify("Tỉnh/Thành phố không được bỏ trống");
    return false;
  }

  const isEmptyDistrict = validator.isEmpty(address.district);
  if (isEmptyDistrict) {
    toastNotify("Quận/Huyện không được bỏ trống");
    return false;
  }

  const isEmptyVillage = validator.isEmpty(address.village);
  if (isEmptyVillage) {
    toastNotify("Xã/Phường không được bỏ trống");
    return false;
  }

  return data;
};

export { validateStep1 };
