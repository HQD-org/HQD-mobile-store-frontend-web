import validator from "validator";
import toastNotify from "../../../common/toastify";
import { REGEX } from "../../../common/utils/Regex";

const validate = (address, email, name, password, phone, confirmPassword) => {
  const isEmail = validator.isEmail(email);
  if (!isEmail) {
    toastNotify("Email không hợp lệ");
    return false;
  }
  const isEmptyPassword = validator.isEmpty(password);
  if (isEmptyPassword) {
    toastNotify("Mật khẩu không được bỏ trống");
    return false;
  }

  const isPassword = validator.matches(password, REGEX.PASSWORD);
  if (!isPassword) {
    toastNotify(
      "Mật khẩu phải chứa ít nhất một số và một chữ cái, có độ dài từ 8 đến 16 ký tự"
    );
    return false;
  }

  if (password !== confirmPassword) {
    toastNotify("Mật khẩu không khớp với nhau");
    return false;
  }

  const isPhone = validator.matches(phone, REGEX.PHONE_VN);
  if (!isPhone) {
    toastNotify("Vui lòng nhập lại số điện thoại");
    return false;
  }

  const isName = validator.matches(name, REGEX.UNICODE_LETTER);
  if (!isName) {
    toastNotify("Vui lòng nhập lại tên");
    return false;
  }

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
  return {
    address,
    email,
    name,
    password,
    phone,
  };
};

export default validate;
