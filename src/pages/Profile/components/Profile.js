/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../../../common/css/Profile.Style.css";
import imgXinh from "../../../common/images/changeinfo.png";
import ChangePassword from "./ChangePassword";
import { useSelector, useDispatch } from "react-redux";
import { getAllProvince } from "../../../redux/actions/Location/locationAction";
import { updateProfileAction } from "../../../redux/actions/User/userAction";
import { validateUpdateProfile } from "../hooks/validate";

const Profile = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [detail, setDetail] = useState("");
  const [province, setProvince] = useState(-1);
  const [district, setDistrict] = useState(-1);
  const [village, setVillage] = useState(-1);
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);
  const provinceList = useSelector((state) => state.location.provinces);
  const authInfo = useSelector((state) => state.auth.user);

  const toggle = () => {
    setModal(!modal);
  };

  const onChangeState = (e) => {
    switch (e.target.name) {
      case "province":
        setProvince(e.target.value);
        break;
      case "district":
        setDistrict(e.target.value);
        break;
      case "village":
        setVillage(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "detail":
        setDetail(e.target.value);
        break;
      default:
        break;
    }
  };

  const updateProfile = async () => {
    const data = {
      address: {
        province: provinceList[province].name_with_type,
        district: districtList[district].name_with_type,
        village: villageList[village].name_with_type,
        detail,
      },
      name,
      phone,
    };
    const isValidData = validateUpdateProfile(data);
    if (!isValidData) return;
    await dispatch(updateProfileAction(data));
  };

  useEffect(() => {
    dispatch(getAllProvince());
  }, []);

  useEffect(() => {
    if (authInfo.user) {
      setName(authInfo.user.name);
      setPhone(authInfo.user.phone);
      setEmail(authInfo.user.email);
      if (authInfo.user.address) {
        setDetail(authInfo.user.address.detail);
      }
    }
  }, [authInfo]);

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
    if (authInfo.user && provinceList.length > 0 && authInfo.user.address) {
      const provinceIndex = provinceList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.province
      );
      setProvince(provinceIndex);
    }
  }, [provinceList]);

  useEffect(() => {
    if (authInfo.user && districtList.length > 0 && authInfo.user.address) {
      const districtIndex = districtList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.district
      );
      setDistrict(districtIndex);
    }
  }, [districtList]);

  useEffect(() => {
    if (authInfo.user && villageList.length > 0 && authInfo.user.address) {
      const villageIndex = villageList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.village
      );
      setVillage(villageIndex);
    }
  }, [villageList]);

  return (
    <div
      className="row"
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <div className="col-4">
        <img src={imgXinh} alt="" width="100%" />
      </div>
      <div className="col-6">
        <br />
        <form>
          <div className="form-Infor">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Tên"
              value={name}
              onChange={onChangeState}
              name="name"
            />
            <input
              onWheel={(e) => e.target.blur()}
              type="number"
              name="phone"
              className="form-control mb-3"
              placeholder="Số điện thoại"
              value={phone}
              onChange={onChangeState}
            />
            <input
              readOnly
              type="email"
              className="form-control mb-3"
              defaultValue={email}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Đường, số nhà"
              value={detail}
              onChange={onChangeState}
              name="detail"
            />
            <div className="row ">
              <div className="col-4 mb-3">
                <select
                  name="province"
                  className="form-select"
                  onChange={onChangeState}
                  value={province}
                >
                  <option disabled value={-1}>
                    Tỉnh/Thành phố
                  </option>
                  {provinceList.map((province, index) => (
                    <option key={province.code} value={index}>
                      {province.name_with_type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 ">
                <select
                  name="district"
                  className="form-select"
                  onChange={onChangeState}
                  value={district}
                >
                  <option disabled value={-1}>
                    Quận/Huyện
                  </option>
                  {districtList.map((district, index) => (
                    <option key={district.code} value={index}>
                      {district.name_with_type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 mb-3">
                <select
                  name="village"
                  className="form-select"
                  onChange={onChangeState}
                  value={village}
                >
                  <option disabled value={-1}>
                    Phường/Xã
                  </option>
                  {villageList.map((village, index) => (
                    <option key={village.code} value={index}>
                      {village.name_with_type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row" style={{ textAlign: "end" }}>
              <div className="col">
                <button
                  type="button"
                  className="btnSaveInfor"
                  onClick={updateProfile}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btnChangePass"
                  onClick={toggle}
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <ChangePassword modal={modal} toggle={toggle} />
    </div>
  );
};

export default Profile;
