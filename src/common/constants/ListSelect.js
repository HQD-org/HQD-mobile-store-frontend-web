const osList = [
  { _id: "android", name: "Android" },
  { _id: "ios", name: "IOS" },
];

const ramList = [
  { _id: "2 GB", name: "2 GB" },
  { _id: "3 GB", name: "3 GB" },
  { _id: "4 GB", name: "4 GB" },
  { _id: "6 GB", name: "6 GB" },
  { _id: "8 GB", name: "8 GB" },
  { _id: "12 GB", name: "12 GB" },
];

const capacityList = [
  { _id: "8 GB", name: "8 GB" },
  { _id: "16 GB", name: "16 GB" },
  { _id: "32 GB", name: "32 GB" },
  { _id: "64 GB", name: "64 GB" },
  { _id: "128 GB", name: "128 GB" },
  { _id: "256 GB", name: "256 GB" },
  { _id: "512 GB", name: "512 GB" },
];

const statusProduct = [
  {
    _id: "active",
    name: "Hoạt động",
  },
  {
    _id: "active",
    name: "Hết hàng",
  },
  {
    _id: "stop selling",
    name: "Ngưng kinh doanh",
  },
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

export {
  capacityList,
  ramList,
  osList,
  statusBranch,
  statusBrand,
  statusModel,
  statusProduct,
  timeDebutList,
};
