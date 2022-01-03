import React from "react";

const Information = () => {
  return (
    <div className="row mt-3 mb-3" style={{ justifyContent: "center" }}>
      <div className="col-5 txtAboutUs">
        <h1>About Us</h1>
        <div className="ngang"></div>
      </div>
      <div className="col-6 flag">
        {" "}
        Công ty Cổ phần Đầu tư HQD Mobile là nhà bán lẻ số 1 Việt Nam về doanh
        thu và lợi nhuận, với mạng lưới hơn 1000 cửa hàng trên toàn quốc. HQD
        vận hành các chuỗi bán lẻ trên hệ thống{" "}
        <i>
          <strong>hqdmobilestore.herokuapp.com</strong>
        </i>
        . Với sự uy tín và chất lượng về sản phẩm cùng với dịch vụ chăm sóc
        khách hàng luôn là sự lựa chọn đầu tiên của quý khách
      </div>
    </div>
  );
};

export default Information;
