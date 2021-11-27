const osList = [
  { _id: "android", name: "Android" },
  { _id: "ios", name: "IOS" },
];

const statusBrand = [
  {
    _id: "active",
    name: "Hoạt động",
  },
  {
    _id: "stop selling",
    name: "Ngưng kinh doanh",
  },
];
const statusModel = [...statusBrand, { _id: "out of stock", name: "Hết hàng" }];

const timeDebutList = [
  { _id: "2018", name: "2018" },
  { _id: "2019", name: "2019" },
  { _id: "2020", name: "2020" },
  { _id: "2021", name: "2021" },
  // { _id: "2022", name: "2022" },
];

const statusBranch = [
  {
    _id: "open",
    name: "Mở cửa",
  },
  {
    _id: "close",
    name: "Đóng cửa",
  },
];

export { osList, statusBranch, statusBrand, statusModel, timeDebutList };
