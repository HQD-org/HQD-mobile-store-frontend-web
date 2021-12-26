/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Form, FormGroup, Input } from "reactstrap";
import { registerAction } from "../../../redux/actions/Auth/authActions";
import { getAllProvince } from "../../../redux/actions/Location/locationAction";
import validate from "../hooks/validate";

const FormRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const refForm = useRef(null);
  const [province, setProvince] = useState(-1);
  const [district, setDistrict] = useState(-1);
  const [village, setVillage] = useState(-1);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);
  const provinceList = useSelector((state) => state.location.provinces);

  useEffect(() => {
    dispatch(getAllProvince());
  }, []);

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
      default:
        break;
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = {
      detail: e.target.addressDetail.value,
      village: villageList[village].name_with_type,
      district: districtList[district].name_with_type,
      province: provinceList[province].name_with_type,
    };
    const password = e.target.password.value;
    const isValidData = validate(address, email, name, password, phone);
    if (!isValidData) return;
    const res = await dispatch(
      registerAction({ address, email, name, password, phone })
    );
    if (res) {
      e.target.reset();
      history.push(`/verify?email=${email}&type=active`);
      return;
    }
  };

  return (
    <div>
      <div className="row" style={{ justifyContent: "center" }}>
        <Form style={{ maxWidth: "88%" }} onSubmit={register} ref={refForm}>
          <Input
            type="text"
            name="fullName"
            placeholder="Fullname"
            className="form-control mt-4"
          />
          <Input
            type="text"
            name="addressDetail"
            placeholder="Address"
            className="form-control mt-4"
          />
          <div className="row">
            <div className="col" style={{ width: "36.7%" }}>
              <FormGroup style={{ position: "relative" }}>
                <select
                  name="province"
                  className="form-select mt-4"
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
              </FormGroup>
            </div>
            <div className="col" style={{ width: "33%" }}>
              <FormGroup style={{ position: "relative" }}>
                <select
                  name="district"
                  className="form-select mt-4"
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
              </FormGroup>
            </div>
            <div className="col">
              <FormGroup style={{ position: "relative" }}>
                <select
                  name="village"
                  className="form-select mt-4"
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
              </FormGroup>
            </div>
          </div>

          <Input
            type="email"
            name="email"
            placeholder="E-mail Address"
            className="form-control mt-4"
          />
          <Input
            type="number"
            name="phone"
            placeholder="Mobile number"
            className="form-control mt-4"
          />
          <div className="div-password">
            <Input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="form-control mt-4"
            />
            <i
              className={`bi ${
                isPasswordShown ? "bi-eye-fill" : "bi-eye-slash-fill"
              }  password-icon`}
              onClick={() => setIsPasswordShown(!isPasswordShown)}
            ></i>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <button className="btnSubmit" type="submit">
              REGISTER
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormRegister;
