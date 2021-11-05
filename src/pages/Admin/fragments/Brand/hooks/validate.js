import validator from "validator";
import toastNotify from "../../../../../common/toastify";

const validateAddBrand = (data) => {
  console.log("log at ==> validate.js ==> line 5==> data: ", data);
  const isBrandName = validator.isEmpty(data.name);
  if (isBrandName) {
    toastNotify("Tên thương hiệu không được để trống");
    return false;
  }

  if (data.status === "0") {
    toastNotify("Vui lòng chọn trạng thái");
    return false;
  }

  const isDesc = validator.isEmpty(data.description);
  if (isDesc) {
    toastNotify("Mục giới thiệu không được để trống");
    return false;
  }

  if (data.images.length === 0) {
    toastNotify("Hình không được bỏ trống");
    return false;
  }
  return data;
};

const validateUpdateBrand = (data) => {
  const isBrandName = validator.isEmpty(data.name);
  if (isBrandName) {
    toastNotify("Tên thương hiệu không được để trống");
    return false;
  }

  const isDesc = validator.isEmpty(data.description);
  if (isDesc) {
    toastNotify("Mục giới thiệu không được để trống");
    return false;
  }

  return data;
};

export { validateAddBrand, validateUpdateBrand };
