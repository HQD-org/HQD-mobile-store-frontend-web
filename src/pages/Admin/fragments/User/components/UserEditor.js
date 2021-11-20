import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { default as AddBtn } from "../../../../../common/images/add-button-2.png";
import {
  TextField,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const UserEditor = (props) => {
  const [values, setValues] = useState({
    fullname: "",
    password: "",
    email: "",
    phone: "",
    showPassword: false,
  });

  const { className, toggle } = props;
  let { modal } = props;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const onToggle = () => {
    toggle(false);
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}>
        <img
          src={AddBtn}
          alt=""
          style={{ width: "30px", marginRight: "5px" }}
        />
        Add User
      </ModalHeader>
      <ModalBody>
        <form>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.fullname}
                label="Fullname"
                onChange={handleChange("fullname")}
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.email}
                label="Email"
                onChange={handleChange("email")}
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                id="outlined-basic"
                value={values.phone}
                type="number"
                label="Mobile phone"
                onChange={handleChange("phone")}
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>

          <ModalFooter>
            <Button type="submit" color="primary">
              Submit
            </Button>{" "}
            <Button type="button" color="secondary" onClick={onToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default UserEditor;
