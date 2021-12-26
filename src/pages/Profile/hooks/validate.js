import validator from "validator";
import toastNotify from "../../../common/toastify";
import { REGEX } from "../../../common/constants/Regex";

export const validateUpdateProfile = (data) => {
  const isPhone = validator.matches(data.phone, REGEX.PHONE_VN);
  if (!isPhone) {
    toastNotify("Vui lòng nhập lại số điện thoại");
    return false;
  }

  const isName = validator.matches(data.name, REGEX.UNICODE_LETTER);
  if (!isName) {
    toastNotify("Vui lòng nhập lại tên");
    return false;
  }
  const address = data.address;

  const isAddress = validator.isEmpty(address.detail);
  if (isAddress) {
    toastNotify("Vui lòng nhập địa chỉ");
    return false;
  }

  const isProvince = validator.isEmpty(address.province);
  if (isProvince) {
    toastNotify("Vui lòng chọn tỉnh");
    return false;
  }

  const isDistrict = validator.isEmpty(address.district);
  if (isDistrict) {
    toastNotify("Vui lòng chọn huyện");
    return false;
  }

  const isVillage = validator.isEmpty(address.village);
  if (isVillage) {
    toastNotify("Vui lòng chọn xã");
    return false;
  }
  return data;
};

export const validateChangePassword = (data) => {
  const isEmptyPassword = validator.isEmpty(data.oldPassword);
  if (isEmptyPassword) {
    toastNotify("Mật khẩu cũ không được bỏ trống");
    return false;
  }

  const isEmptyNewPassword = validator.isEmpty(data.newPassword);
  if (isEmptyPassword) {
    toastNotify("Mật khẩu cũ không được bỏ trống");
    return false;
  }

  const isPassword = validator.matches(data.newPassword, REGEX.PASSWORD);
  if (!isPassword) {
    toastNotify(
      "Mật khẩu phải chứa ít nhất một số và một chữ cái, có độ dài từ 8 đến 16 ký tự"
    );
    return false;
  }

  if (data.newPassword !== data.confirmPassword) {
    toastNotify("Mật khẩu không trùng khớp");
    return false;
  }
  return true;
};
