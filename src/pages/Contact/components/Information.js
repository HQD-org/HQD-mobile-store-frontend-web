import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const Information = () => {
  return (
    <div>
      <div className="row">
        <div className="col-6 link-contact-home">
          <h4>
            <a href="/" style={{ textDecoration: "none", color: "white" }}>
              <HomeIcon style={{ marginTop: "-5px" }} /> HOME
            </a>
          </h4>
        </div>
        <div className="col-6 link-contact-product">
          <h4>
            <a
              href="/product"
              style={{ textDecoration: "none", color: "white" }}
            >
              <PhoneAndroidIcon style={{ marginTop: "-5px" }} /> PRODUCT
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Information;
