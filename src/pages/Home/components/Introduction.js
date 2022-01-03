import React from "react";
import "../../../common/css/Home.Style.css";
import imgIntro from "../../../common/images/home-intro.jpg";
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div className="row" style={{ textAlign: "center" }}>
        <i className="bi bi-flower1"></i>
      </div>
      <div className="row">
        <div className="col-5">
          <hr />
        </div>
        <div className="col-2" style={{ textAlign: "center" }}>
          <button className="intro-header">Introduction</button>
        </div>
        <div className="col-5">
          <hr />
        </div>
      </div>

      <div className="row" style={{ marginTop: "20px", alignItems: "center" }}>
        <div className="col-6">
          <div className="row">
            <div>
              <h1 className="txt-hqdmoblie-intro">HQD Mobile</h1>
            </div>

            <p className="txtIntro">
              Công ty Cổ phần Đầu tư HQD Mobile là nhà bán lẻ số 1 Việt Nam về
              doanh thu và lợi nhuận, với mạng lưới hơn 1000 cửa hàng trên toàn
              quốc. HQD vận hành các chuỗi bán lẻ trên hệ thống
              hqdmobilestore.herokuapp.com. Với sự uy tín và chất lượng về sản
              phẩm cùng với dịch vụ chăm sóc khách hàng luôn là sự lựa chọn đầu
              tiên của quý khách
            </p>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to="/about-us" alt="">
                <button className="btnMoreInfor">More Information</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 img-intro">
          <img src={imgIntro} alt="" width="100%"></img>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
