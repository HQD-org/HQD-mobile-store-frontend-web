const osList = [
  { _id: "android", name: "Android" },
  { _id: "ios", name: "IOS" },
];

const ramList = [
  { _id: "2GB", name: "2 GB" },
  { _id: "3GB", name: "3 GB" },
  { _id: "4GB", name: "4 GB" },
  { _id: "6GB", name: "6 GB" },
  { _id: "8GB", name: "8 GB" },
  { _id: "12GB", name: "12 GB" },
];

const capacityList = [
  { _id: "8GB", name: "8GB" },
  { _id: "16GB", name: "16GB" },
  { _id: "32GB", name: "32GB" },
  { _id: "64GB", name: "64GB" },
  { _id: "128GB", name: "128GB" },
  { _id: "256GB", name: "256GB" },
  { _id: "512GB", name: "512GB" },
];

const priceList = [
  { _id: "0-1999999", name: "Dưới 2 triệu" },
  { _id: "2000000-5000000", name: "Từ 2 - 5 triệu" },
  { _id: "5000000-10000000", name: "Từ 5 - 10 triệu" },
  { _id: "10000000-20000000", name: "Từ 10 - 20 triệu" },
  { _id: "20000001-1000000000", name: "Trên 20 triệu" },
];

const statusProduct = [
  {
    _id: "active",
    name: "Hoạt động",
  },
  {
    _id: "out of stock",
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
  priceList,
};
