/* eslint-disable react-hooks/exhaustive-deps */
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { FormControl } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { statusBranch } from "../../../../../common/constants/ListSelect";
import { default as AddBtn } from "../../../../../common/images/add-button-3.png";
import {
  addBranchAction,
  updateBranchAction,
} from "../../../../../redux/actions/Branch/branchAction";
import { getAllProvince } from "../../../../../redux/actions/Location/locationAction";
import { getAllManagerBranchAction } from "../../../../../redux/actions/User/userAction";
import validate from "../hooks/validate";

const BranchEditor = (props) => {
  const { option, branch, setModal, modal } = props;
  const dispatch = useDispatch();
  const [province, setProvince] = useState(-1);
  const [district, setDistrict] = useState(-1);
  const [village, setVillage] = useState(-1);
  const [timeOpen, setTimeOpen] = useState(new Date());
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);
  const [manager, setManager] = useState("1");
  const [listManager, setListManager] = useState([]);
  const provinceList = useSelector((state) => state.location.provinces);
  const managerList = useSelector((state) => state.user.list);

  const fetchManagerList = async () => {
    await dispatch(getAllManagerBranchAction());
  };

  const onToggle = () => {
    setModal(!modal);
    setProvince(-1);
    setDistrict(-1);
    setVillage(-1);
    fetchManagerList();
  };

  const addBranch = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      idManager: e.target.manager.value,
      address: {
        detail: e.target.detail.value,
        village: village === -1 ? "" : villageList[village].name_with_type,
        district: district === -1 ? "" : districtList[district].name_with_type,
        province: province === -1 ? "" : provinceList[province].name_with_type,
      },
      status: e.target.status.value,
      grandOpeningDate: timeOpen,
    };
    const isValidData = validate(data);
    if (!isValidData) return;
    const res = await dispatch(addBranchAction(isValidData));
    if (res) onToggle();
  };

  const updateBranch = async (e) => {
    e.preventDefault();
    const data = {
      id: branch._id,
      name: e.target.name.value,
      idManager: e.target.manager.value,
      address: {
        detail: e.target.detail.value,
        village: village === -1 ? "" : villageList[village].name_with_type,
        district: district === -1 ? "" : districtList[district].name_with_type,
        province: province === -1 ? "" : provinceList[province].name_with_type,
      },
      status: e.target.status.value,
      grandOpeningDate: timeOpen,
    };
    const isValidData = validate(data);
    if (!isValidData) return;
    const res = await dispatch(updateBranchAction(isValidData));
    if (res) onToggle();
  };

  const optionLocationList = (options) => {
    return options.map((value, index) => {
      return (
        <MenuItem value={index} key={value.code}>
          {value.name_with_type}
        </MenuItem>
      );
    });
  };

  const onChangeSelectOption = (e, type) => {
    switch (type) {
      case "province":
        setProvince(e.target.value);
        break;
      case "district":
        setDistrict(e.target.value);
        break;
      case "village":
        setVillage(e.target.value);
        break;
      case "manager":
        setManager(e.target.value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const fetchProvinceList = async () => {
      await dispatch(getAllProvince());
    };
    fetchManagerList();
    fetchProvinceList();
  }, []);

  useEffect(() => {
    if (!modal) setManager("1");
    if (!option && modal) {
      setProvince(
        provinceList.findIndex(
          (item) => item.name_with_type === branch.address.province
        )
      );
    }
  }, [modal]);

  useEffect(() => {
    if (managerList.length >= 0) {
      setListManager(managerList);
    }
  }, [managerList]);

  useEffect(() => {
    setDistrict(-1);
    const index = parseInt(province);
    if (index >= 0) {
      const districtJSON = provinceList[index]["quan-huyen"];
      const getDistrictList = async () => {
        return await Promise.all(
          Object.keys(districtJSON).map((key) => districtJSON[key])
        );
      };
      getDistrictList().then((data) => {
        setDistrictList(data);
      });
    }
  }, [province]);

  useEffect(() => {
    setVillage(-1);
    const index = parseInt(district);
    if (index >= 0) {
      const villageJSON = districtList[index]["xa-phuong"];
      const getVillageList = async () => {
        return await Promise.all(
          Object.keys(villageJSON).map((key) => villageJSON[key])
        );
      };
      getVillageList().then((data) => {
        setVillageList(data);
      });
    }
  }, [district]);

  useEffect(() => {
    if (!option && districtList.length > 0) {
      const districtIndex = districtList.findIndex(
        (item) => item.name_with_type === branch.address.district
      );
      if (districtIndex === -1) return;
      setDistrict(districtIndex);
    }
  }, [districtList]);

  useEffect(() => {
    if (!option && villageList.length > 0) {
      const villageIndex = villageList.findIndex(
        (item) => item.name_with_type === branch.address.village
      );
      if (villageIndex === -1) return;
      setVillage(villageIndex);
    }
  }, [villageList]);

  useEffect(() => {
    if (managerList.length > 0) {
      setListManager(managerList);
    }
  }, [managerList]);

  useEffect(() => {
    if (!option && branch) {
      setListManager((prev) => [
        ...prev,
        { _id: branch.manager._id, username: branch.manager.username },
      ]);
      setManager(branch.manager._id);
      setTimeOpen(branch.grandOpeningDate);
    }
  }, [branch]);

  return (
    <Modal isOpen={modal} toggle={onToggle} className="modal-branch">
      <ModalHeader className="close-x" toggle={onToggle}>
        <img
          src={AddBtn}
          alt="add icon"
          style={{ width: "30px", marginRight: "5px" }}
        />
        {option ? "Add Branch" : "Update Branch"}
      </ModalHeader>
      <ModalBody>
        <form onSubmit={option ? addBranch : updateBranch}>
          <div>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Tên chi nhánh"
                variant="outlined"
                name="name"
                defaultValue={option ? "" : branch.name}
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Địa chỉ"
                variant="outlined"
                name="detail"
                defaultValue={option ? "" : branch.address.detail}
              />
            </FormControl>
            <div className="row">
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Thành phố/Tỉnh</InputLabel>
                  <Select
                    label="Thành phố/Tỉnh"
                    onChange={(e) => onChangeSelectOption(e, "province")}
                    value={province}
                  >
                    <MenuItem value={-1}> Thành phố/Tỉnh </MenuItem>
                    {optionLocationList(provinceList)}
                  </Select>
                </FormControl>
              </div>
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Quận/Huyện</InputLabel>
                  <Select
                    label="Quận/Huyện"
                    onChange={(e) => onChangeSelectOption(e, "district")}
                    value={district}
                  >
                    <MenuItem value={-1}> Quận/Huyện </MenuItem>
                    {optionLocationList(districtList)}
                  </Select>
                </FormControl>
              </div>
              <div className="col-4">
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel>Phường/Xã</InputLabel>
                  <Select
                    label="Phường/Xã"
                    onChange={(e) => onChangeSelectOption(e, "village")}
                    value={village}
                  >
                    <MenuItem value={-1}> Phường/Xã </MenuItem>
                    {optionLocationList(villageList)}
                  </Select>
                </FormControl>
              </div>
            </div>

            <FormControl fullWidth sx={{ m: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Thời gian khai trương"
                  value={timeOpen}
                  name="timeOpen"
                  onChange={(newValue) => setTimeOpen(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>Quản trị viên</InputLabel>
              <Select
                label="Quản trị viên"
                name="manager"
                value={manager}
                onChange={(e) => onChangeSelectOption(e, "manager")}
              >
                <MenuItem value="1">Quản trị viên</MenuItem>
                {listManager.map((value) => {
                  return (
                    <MenuItem value={value._id} key={value._id}>
                      {value.username}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel>Trạng thái</InputLabel>
              <Select
                label="Trạng thái"
                name="status"
                defaultValue={option ? 1 : branch.status}
              >
                <MenuItem value="1">Trạng thái</MenuItem>
                {statusBranch.map((value, index) => {
                  return (
                    <MenuItem value={value._id} key={"status " + index}>
                      {value.name}
                    </MenuItem>
                  );
                })}
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
