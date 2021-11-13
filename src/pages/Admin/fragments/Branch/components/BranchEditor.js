import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { default as AddBtn } from "../../../../../common/images/add-button-3.png";
import { FormControl } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const BranchEditor = (props) => {
  const [value, setValue] = useState(new Date());

  const { className, toggle } = props;
  let { modal } = props;

  const onToggle = () => {
    toggle(false);
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className="modal-branch">
      <ModalHeader className="close-x" toggle={onToggle}>
        <img
          src={AddBtn}
          alt=""
          style={{ width: "30px", marginRight: "5px" }}
        />
        Add Branch
      </ModalHeader>
      <ModalBody>
        <form>
          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Tên chi nhánh"
                variant="outlined"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Địa chỉ"
                variant="outlined"
              />
            </FormControl>
            <div className="row">
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Thành phố/Tỉnh</InputLabel>
                  <Select label="Thành phố/Tỉnh">
                    <MenuItem value="1">HCM</MenuItem>
                    <MenuItem value="2">LD</MenuItem>
                    <MenuItem value="3">HN</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Quận/Huyện</InputLabel>
                  <Select label="Quận/Huyện">
                    <MenuItem value="1">HCM</MenuItem>
                    <MenuItem value="2">LD</MenuItem>
                    <MenuItem value="3">HN</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Phường/Xã</InputLabel>
                  <Select label="Phường/Xã">
                    <MenuItem value="1">HCM</MenuItem>
                    <MenuItem value="2">LD</MenuItem>
                    <MenuItem value="3">HN</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <FormControl fullWidth sx={{ m: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Thời gian khai trương"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>Quản trị viên</InputLabel>
              <Select label="Quản trị viên">
                <MenuItem value="1">Id/Tên</MenuItem>
              </Select>
            </FormControl>
          </div>
          <hr />
          <div className="row" style={{ textAlign: "center" }}>
            <div>
              <button className="btnSave-branch" type="submit">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default BranchEditor;
