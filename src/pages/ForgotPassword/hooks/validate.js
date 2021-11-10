import validator from "validator";
import toastNotify from "../../../common/toastify";

const validate = (username) => {
  const isEmail = validator.isEmail(username);
  if (!isEmail) {
    toastNotify("Email không hợp lệ");
    return false;
  }

  return {
    username,
  };
};

export default validate;
