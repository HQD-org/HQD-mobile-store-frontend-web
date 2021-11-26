import validator from "validator";
import toastNotify from "../../../../../common/toastify";
import { REGEX } from "../../../../../common/constants/Regex";

const validateAddUser = (data) => {
  const isEmptyName = validator.isEmpty(data.name);
  if (isEmptyName) {
    toastNotify("Tên không được để trống");
    return false;
  }

  const isEmail = validator.isEmail(data.email);
  if (!isEmail) {
    toastNotify("Email không hợp lệ");
    return false;
  }

  const isEmptyPhone = validator.isEmpty(data.phone);
  if (isEmptyPhone) {
    toastNotify("Số điện thoại không được để trống");
    return false;
  }

  const isEmptyPassword = validator.isEmpty(data.password);
  if (isEmptyPassword) {
    toastNotify("Mật khẩu không được để trống");
    return false;
  }

  const isPassword = validator.matches(data.password, REGEX.PASSWORD);
  if (!isPassword) {
    toastNotify(
      "Mật khẩu phải chứa ít nhất một số và một chữ cái, có độ dài từ 8 đến 16 ký tự"
    );
    return false;
  }

  return data;
};

const validateUpdateUser = (data) => {
  const isEmptyName = validator.isEmpty(data.name);
  if (isEmptyName) {
    toastNotify("Tên không được để trống");
    return false;
  }

  const isEmptyPhone = validator.isEmpty(data.phone);
  if (isEmptyPhone) {
    toastNotify("Số điện thoại không được để trống");
    return false;
  }

  return data;
};

export { validateAddUser, validateUpdateUser };
