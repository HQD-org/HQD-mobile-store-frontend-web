const generateString = (length, containNaN) => {
  let result = "";
  let characters = "0123456789";
  if (containNaN) {
    characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    result = "0";
  }
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const translateStatusToVietnamese = (status) => {
  switch (status.toLowerCase()) {
    case "active":
      return "Hoạt động";
    case "block":
      return "Khóa";
    case "cancel":
      return "Hủy";
    case "close":
      return "Đóng cửa";
    case "done":
      return "Hoàn tất";
    case "expired":
      return "Hết hạng";
    case "open":
      return "Mở cửa";
    case "out of stock":
      return "Hết hàng";
    case "stop selling":
      return "Ngưng kinh doanh";
    case "paid":
      return "Đã thanh toán";
    case "refund":
      return "Hoàn tiền";
    case "unpaid":
      return "Chưa thanh toán";
    case "wait":
      return "Chờ xử lý";
    default:
      return "Tất cả";
  }
};

export { generateString, translateStatusToVietnamese };
