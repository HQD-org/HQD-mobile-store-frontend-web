/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm";
import Information from "./components/Information";
import bg from "../../common/images/bg-contact.png";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import logoHQD from "../../common/images/logoHQD.png";

const ContactPage = (props) => {
  const dispatch = useDispatch();
  const { showHeaderAndFooter } = props;

  useEffect(() => {
    dispatch(showHeaderAndFooter(false));
  }, []);

  return (
    <div>
      <div className="container-fluid bg-header"></div>
      <div
        className="container contact-bg"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="row mt-3 mb-3"
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <div className="col-6 ">
            <div className="div-contact">
              <img
                src={logoHQD}
                alt=""
                width="50px"
                height="50px"
                style={{ marginTop: "16px" }}
              />
              <p>Let's Contact Us</p>
            </div>
            <div className="info">
              <p>
                <LocationOnIcon />1 Võ Văn Ngân, thành phố Thủ Đức
              </p>
              <p>
                <EmailIcon /> hqdmobilestorecontact@gmail.com
              </p>
              <p>
                <CallIcon /> 1800.0125
              </p>
            </div>
          </div>
          <div className="col-6" style={{ paddingRight: "0px" }}>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container">
        <Information />
      </div>
    </div>
  );
};
export default ContactPage;
