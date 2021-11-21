import React from "react";
import background from "../../common/images/background-header-1.png";
import "../../common/css/Footer.Style.css";
import imgBCT from "../../common/images/BCT.png";
import { useSelector } from "react-redux";

const AppFooter = () => {
  const show = useSelector((state) => state.system.showHeaderAndFooter);
  return show ? (
    <div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "bottom",
        }}
      >
        <div className="container" style={{ display: "flex" }}>
          <div className="col-7 footer">
            <div className="row">
              <h4 className="infor-HQD">
                HQD Mobile đã và đang không ngừng nỗ lực trở thành đối tác uy
                tín với các nhà sản xuất Kỹ thuật số hàng đầu thế giới, đồng
                thời là điểm đến tin cậy của khách hàng
              </h4>
              <br />
              <hr />
              <div className="col-4">
                <p>• Support</p>
                <p>• Warranty Policy </p>
                <p>• Privacy Policy</p>
              </div>
              <div className="col">
                <p>• Recruitment</p>
                <p>• Promotion information</p>
              </div>
            </div>
            <br />
            <br />
          </div>
          <div className="col footer" style={{ marginLeft: "50px" }}>
            <div className="row">
              <h4 className="txtContact">Contact us</h4>
              <div className="icon-mxh">
                <i className="bi bi-facebook"></i>
                <i
                  className="bi bi-instagram"
                  style={{ marginLeft: "10px" }}
                ></i>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p className="contact-mail">
                <i
                  className="bi bi-envelope-fill"
                  style={{ marginRight: "5px" }}
                ></i>
                hqdmobilecontact@gmail.com
              </p>
              <p className="contact-phone">
                <i
                  className="bi bi-telephone-fill"
                  style={{ marginRight: "5px" }}
                ></i>
                1800.0125
              </p>
              <img
                src={imgBCT}
                alt=""
                width="20%"
                style={{ marginTop: "-20px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <p>© 2021 All Rights Reserved by HQD Mobile</p>
      </div>
    </div>
  ) : (
    <> </>
  );
};

export default AppFooter;
