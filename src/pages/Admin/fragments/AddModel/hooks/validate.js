import validator from "validator";
import toastNotify from "../../../../../common/toastify";

const validateAddModel = (data) => {
  console.log("log at ==> validate.js ==> line 5==> data: ", data);
  const isModelName = validator.isEmpty(data.name);
  if (isModelName) {
    toastNotify("Tên model không được để trống");
    return false;
  }

  const isScreen = validator.isEmpty(data.screen);
  if (isScreen) {
    toastNotify("Màn hình không được để trống");
    return false;
  }

  const isOs = validator.isEmpty(data.os);
  if (isOs) {
    toastNotify("Hệ điều hành không được để trống");
    return false;
  }

  const isRearCamera = validator.isEmpty(data.rearCamera);
  if (isRearCamera) {
    toastNotify("Camera sau không được để trống");
    return false;
  }

  const isFrontCamera = validator.isEmpty(data.frontCamera);
  if (isFrontCamera) {
    toastNotify("Camera trước không được để trống");
    return false;
  }

  if (data.brand === "0") {
    toastNotify("Vui lòng chọn thương hiệu");
    return false;
  }

  const isSim = validator.isEmpty(data.sim);
  if (isSim) {
    toastNotify("Sim không được để trống");
    return false;
  }

  const isChip = validator.isEmpty(data.chip);
  if (isChip) {
    toastNotify("Chip không được để trống");
    return false;
  }

  const isMemoryStick = validator.isEmpty(data.memoryStick);
  if (isMemoryStick) {
    toastNotify("Memory Stick không được để trống");
    return false;
  }

  const isBattery = validator.isEmpty(data.battery);
  if (isBattery) {
    toastNotify("Pin không được để trống");
    return false;
  }

  const isCharger = validator.isEmpty(data.charger);
  if (isCharger) {
    toastNotify("Charger không được để trống");
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

  const isTimeDebut = validator.isEmpty(data.timeDebut);
  if (isTimeDebut) {
    toastNotify("Thời gian bắt đầu không được để trống");
    return false;
  }

  //   if (data.images.length === 0) {
  //     toastNotify("Hình không được bỏ trống");
  //     return false;
  //   }
  return data;
};

const validateUpdateModel = (data) => {
  const isModelName = validator.isEmpty(data.name);
  if (isModelName) {
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

export { validateAddModel, validateUpdateModel };
