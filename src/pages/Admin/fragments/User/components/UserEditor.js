import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { default as AddBtn } from "../../../../../common/images/add-button-2.png";
import {
  addUserAction,
  updateUserAction,
} from "../../../../../redux/actions/User/userAction";
import { validateAddUser, validateUpdateUser } from "../hooks/validate";

const UserEditor = (props) => {
  const { className, option, user, setModal } = props;
  let { modal } = props;
  const dispatch = useDispatch();
  const onToggle = () => {
    setModal(!modal);
  };

  const addUser = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value,
      phone: e.target.phone.value,
    };
    const isValidData = validateAddUser(data);
    if (!isValidData) return;
    const res = await dispatch(addUserAction(isValidData));
    if (res) onToggle();
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const data = {
      idUser: user.idUser._id,
      name: e.target.name.value,
      role: e.target.role.value,
      phone: e.target.phone.value,
    };
    const isValidData = validateUpdateUser(data);
    if (!isValidData) return;
    const res = await dispatch(updateUserAction(isValidData));
    if (res) onToggle();
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}>
        <img
          src={AddBtn}
          alt=""
          style={{ width: "30px", marginRight: "5px" }}
        />
        {option ? "Add User" : "Update User"}
      </ModalHeader>
      <ModalBody>
        <form onSubmit={option ? addUser : updateUser}>
          <div>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                defaultValue={option ? "" : user.idUser.name}
                label="FullName"
                variant="outlined"
                name="name"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                defaultValue={option ? "" : user.idUser.email}
                label="Email"
                variant="outlined"
                name="email"
                type="email"
                disabled={!option}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <TextField
                defaultValue={option ? "" : user.idUser.phone}
                type="number"
                label="Mobile phone"
                variant="outlined"
                name="phone"
              />
            </FormControl>
            {option ? (
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="password"
                  defaultValue={option ? "" : "non accessible"}
                  label="Password"
                  name="password"
                />
              </FormControl>
            ) : (
              <> </>
            )}
            <FormLabel component="legend">Role</FormLabel>
            <RadioGroup
              row
              aria-label="role"
              name="role"
              defaultValue={option ? "user" : user.role}
            >
              <FormControlLabel value="user" control={<Radio />} label="User" />
              <FormControlLabel
                value="manager branch"
                control={<Radio />}
                label="Manager Branch"
              />
              <FormControlLabel
                value="admin"
                control={<Radio />}
                label="Admin"
              />
            </RadioGroup>
          </div>

          <ModalFooter>
            <Button type="submit" color="primary">
              Submit
            </Button>
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
