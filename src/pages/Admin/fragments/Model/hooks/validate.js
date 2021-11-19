import validator from "validator";
import toastNotify from "../../../../../common/toastify";

const validateAddColor = (data) => {
  const isColorName = validator.isEmpty(data.color.name);
  if (isColorName) {
    toastNotify("Tên màu không được để trống");
    return false;
  }

  const isExistName = data.list.find((element) => {
    return element.name === data.color.name;
  });
  if (isExistName) {
    toastNotify("Màu đã tồn tại");
    return false;
  }

  const lengthImages = data.color.images.length;
  if (lengthImages <= 0 || !lengthImages) {
    toastNotify("Hình không được bỏ trống");
    return false;
  }
  return data.color;
};

const validateUpdateColor = (data) => {
  const isColorName = validator.isEmpty(data.color.name);
  if (isColorName) {
    toastNotify("Tên màu không được để trống");
    return false;
  }

  const isExistName = data.list.find((element) => {
    return element.name === data.color.name;
  });
  if (data.list[data.index].name !== data.color.name && isExistName) {
    toastNotify("Màu đã tồn tại");
    return false;
  }

  const lengthImages = data.color.images.length;
  if (lengthImages <= 0 || !lengthImages) {
    toastNotify("Hình không được bỏ trống");
    return false;
  }
  return data.color;
};

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

  const isOperation = validator.isEmpty(data.operation);
  if (isOperation) {
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

  if (data.idBrand === "0") {
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

  const isEmptyColor = data.color.length <= 0;
  if (isEmptyColor) {
    toastNotify("Vui lòng thêm màu");
    return false;
  }

  return data;
};

const validateUpdateModel = (data) => {
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

  const isOperation = validator.isEmpty(data.operation);
  if (isOperation) {
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

  const isEmptyColor = data.color.length <= 0;
  if (isEmptyColor) {
    toastNotify("Vui lòng thêm màu");
    return false;
  }

  return data;
};

export {
  validateAddColor,
  validateUpdateColor,
  validateAddModel,
  validateUpdateModel,
};
