/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Form, FormGroup, Input } from "reactstrap";
import SelectComponent from "../../../common/components/SelectSearch";
import { registerAction } from "../../../redux/actions/Auth/authActions";
import {
  getDistrict,
  getProvince,
  getVillage,
} from "../../../redux/actions/Location/locationAction";
import validate from "../hooks/validate";

const FormRegister = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const refForm = useRef(null);
  const defaultObj = { name: "", id: "", index: -1 };
  const [province, setProvince] = useState(defaultObj);
  const [district, setDistrict] = useState(defaultObj);
  const [village, setVillage] = useState(defaultObj);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const provinceList = useSelector((state) => state.location.provinces) || [];
  const districtList = useSelector((state) => state.location.districts) || [];
  const villageList = useSelector((state) => state.location.villages) || [];

  useEffect(() => {
    const fetchProvinceList = async () => {
      await dispatch(getProvince());
    };

    fetchProvinceList();
  }, []);

  useEffect(() => {
    if (province.id) {
      const fetchDistrictList = async () => {
        await dispatch(getDistrict(province.id));
      };
      fetchDistrictList();
      setDistrict(defaultObj);
    }
  }, [province]);

  useEffect(() => {
    if (district.id) {
      const fetchVillageList = async () => {
        await dispatch(getVillage(district.id));
      };
      fetchVillageList();
      setVillage(defaultObj);
    }
  }, [district]);

  const onSelectChange = (newValue, type) => {
    console.log(
      `log at: => RegisterForm.js => onSelectChange func => newValue:`,
      newValue
    );
    switch (type) {
      case "province":
        setProvince(newValue);
        break;
      case "district":
        setDistrict(newValue);
        break;
      case "village":
        setVillage(newValue);
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
      village: village.name,
      district: district.name,
      province: province.name,
    };
    const password = e.target.password.value;
    const isValidData = validate(address, email, name, password, phone);
    if (!isValidData) return;
    const res = await dispatch(
      registerAction({ address, email, name, password, phone })
    );
    if (res) {
      e.target.reset();
      history.push(`/verify?email=${email}`);
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
            className="form-control"
          />
          <Input
            type="text"
            name="addressDetail"
            placeholder="Address"
            className="form-control"
          />
          <div className="row">
            <div className="col">
              <FormGroup style={{ position: "relative" }}>
                <SelectComponent
                  onSelectChange={onSelectChange}
                  options={provinceList}
                  name={"province"}
                  placeholder={"Thành phố/Tỉnh"}
                />
              </FormGroup>
            </div>
            <div className="col">
              <FormGroup style={{ position: "relative" }}>
                <SelectComponent
                  onSelectChange={onSelectChange}
                  options={districtList}
                  name={"district"}
                  placeholder={"Quận/Huyện"}
                />
              </FormGroup>
            </div>
            <div className="col">
              <FormGroup style={{ position: "relative" }}>
                <SelectComponent
                  onSelectChange={onSelectChange}
                  options={villageList}
                  name={"village"}
                  placeholder={"Phường/Xã"}
                />
              </FormGroup>
            </div>
          </div>

          <Input
            type="email"
            name="email"
            placeholder="E-mail Address"
            className="form-control"
          />
          <Input
            type="number"
            name="phone"
            placeholder="Mobile number"
            className="form-control"
          />
          <div className="div-password">
            <Input
              type={isPasswordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="form-control"
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
