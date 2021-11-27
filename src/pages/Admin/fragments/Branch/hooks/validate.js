import validator from "validator";
import toastNotify from "../../../../../common/toastify";

const validate = (data) => {
  const isEmptyName = validator.isEmpty(data.name);
  if (isEmptyName) {
    toastNotify("Tên không được để trống");
    return false;
  }

  const address = data.address;
  const idEmptyDetail = validator.isEmpty(address.detail);
  if (idEmptyDetail) {
    toastNotify("Địa chỉ không được để trống");
    return false;
  }

  const idEmptyProvince = validator.isEmpty(address.province);
  if (idEmptyProvince) {
    toastNotify("Tỉnh/Thành phố không được để trống");
    return false;
  }

  const isEmptyDistrict = validator.isEmpty(address.district);
  if (isEmptyDistrict) {
    toastNotify("Quận/huyện không được để trống");
    return false;
  }

  const isEmptyVillage = validator.isEmpty(address.village);
  if (isEmptyVillage) {
    toastNotify("Xã/phường không được để trống");
    return false;
  }

  if (data.idManager === "1") {
    toastNotify("Quản lý không được để trống");
    return false;
  }

  if (data.status === "1") {
    toastNotify("Trạng thái không được để trống");
    return false;
  }

  return data;
};

export default validate;
