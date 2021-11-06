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

export { statusBrand, statusModel };
