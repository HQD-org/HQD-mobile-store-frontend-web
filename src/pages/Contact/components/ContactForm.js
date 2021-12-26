import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@mui/icons-material/Send";
import "../../../common/css/Contact.Style.css";
import { FormControl, Button } from "@material-ui/core";
import emailjs from "emailjs-com";
import toastNotify from "../../../common/toastify";

const ContactForm = () => {
  const [values, setValue] = useState({
    fullName: "",
    email: "",
    sdt: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const handleChange = (e) => {
    setValue((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xt8mo7t",
        "template_n8l8lls",
        values,
        "user_ZmPJ09VlYiQSQV0QsH8pN"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValue({
            fullName: "",
            email: "",
            sdt: "",
            message: "",
          });
          toastNotify("Gửi mail thành công");
          setStatus("SUCCESS!");
        },
        (error) => {
          console.log("FAILED!", error);
        }
      );
  };
  useEffect(() => {
    if (status === "SUCCESS!") {
      setTimeout(() => {
        setStatus("");
      }, 1000);
    }
  }, [status]);

  return (
    <div>
      <div className="form-contact">
        {" "}
        <form onSubmit={handleSend}>
          <FormControl fullWidth className="form-input">
            <TextField
              id="input-with-icon-grid"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth className="form-input">
            <TextField
              id="input-with-icon-grid"
              label="Email"
              name="email"
              value={values.email}
              type="email"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth className="form-input">
            <TextField
              id="input-with-icon-grid"
              label="Mobile phone"
              type="number"
              value={values.sdt}
              name="sdt"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth className="form-input">
            <TextField
              id="input-with-icon-grid"
              label="Your message"
              value={values.message}
              multiline
              rows={3}
              name="message"
              onChange={handleChange}
              required
            />
          </FormControl>
          <FormControl fullWidth>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              SEND
            </Button>
          </FormControl>
        </form>
        <FormControl fullWidth>{status && alert()}</FormControl>
      </div>
    </div>
  );
};

const alert = () => {
  return (
    <div className="contact-alert">
      <p className="txtSuccess">
        Thank you for your contact. Your message was sent
      </p>
    </div>
  );
};

export default ContactForm;
