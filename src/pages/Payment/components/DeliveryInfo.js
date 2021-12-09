/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../../../common/css/Payment.Style.css";
import { validateStep1 } from "../hooks/validate";

const DeliveryInfo = (props) => {
  const { setShowStep2, setDataStep1, dataStep1 } = props;
  const firstInitRef = useRef("");
  const [province, setProvince] = useState(-1);
  const [district, setDistrict] = useState(-1);
  const [village, setVillage] = useState(-1);
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);

  const authInfo = useSelector((state) => state.auth.user);
  const provinceList = useSelector((state) => state.location.provinces);

  useEffect(() => {
    if (authInfo.user)
      setDataStep1({
        ...dataStep1,
        name: authInfo.user.name,
        phone: authInfo.user.phone,
        email: authInfo.user.email,
        address: authInfo.user.address,
      });
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
      setDataStep1({
        ...dataStep1,
        address: {
          ...dataStep1.address,
          province: provinceList[index].name_with_type,
          district: "",
          village: "",
        },
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
      setDataStep1({
        ...dataStep1,
        address: {
          ...dataStep1.address,
          district: districtList[index].name_with_type,
          village: "",
        },
      });
    }
  }, [district]);

  useEffect(() => {
    const index = parseInt(district);
    if (index >= 0) {
      setDataStep1({
        ...dataStep1,
        address: {
          ...dataStep1.address,
          village: villageList[index].name_with_type,
        },
      });
    }
  }, [village]);

  useEffect(() => {
    if (authInfo.user && !firstInitRef.current && provinceList.length > 0) {
      const provinceIndex = provinceList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.province
      );
      setProvince(provinceIndex);
    }
  }, [provinceList]);

  useEffect(() => {
    if (authInfo.user && !firstInitRef.current && districtList.length > 0) {
      const districtIndex = districtList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.district
      );
      setDistrict(districtIndex);
    }
  }, [districtList]);

  useEffect(() => {
    if (authInfo.user && !firstInitRef.current && villageList.length > 0) {
      const villageIndex = villageList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.village
      );
      setVillage(villageIndex);
      firstInitRef.current = true;
    }
  }, [villageList]);

  const onChangeState = (e) => {
    switch (e.target.name) {
      case "name":
      case "phone":
      case "email":
      case "paymentType":
      case "timeDelivery":
      case "receiveType":
      case "message":
        setDataStep1({ ...dataStep1, [e.target.name]: e.target.value });
        break;
      case "detail":
        setDataStep1({
          ...dataStep1,
          address: { ...dataStep1.address, detail: e.target.value },
        });
        break;
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

  const nextStep = () => {
    const isValidData = validateStep1(dataStep1);
    if (isValidData) {
      setShowStep2(true);
      setDataStep1(isValidData);
    }
  };

  return (
    <div className="row mb-3 mt-3" style={{ justifyContent: "center" }}>
      <div className="col-6">
        <div className="form-deliveryInfor">
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Họ tên người nhận"
            onChange={onChangeState}
            value={dataStep1.name}
          />
          <input
            type="number"
            name="phone"
            className="form-control mb-3"
            placeholder="Số điện thoại"
            onChange={onChangeState}
            value={dataStep1.phone}
          />
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            onChange={onChangeState}
            value={dataStep1.email}
          />

          <p>Hình thức nhận hàng</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="receiveType"
                id="receive-type2"
                onChange={onChangeState}
                value="at home"
                checked={dataStep1.receiveType === "at home"}
              />
              <label className="form-check-label" htmlFor="receive-type2">
                Tại nhà
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="receiveType"
                id="receive-type1"
                value="at store"
                onChange={onChangeState}
                checked={dataStep1.receiveType === "at store"}
              />
              <label className="form-check-label" htmlFor="receive-type1">
                Tại cửa hàng
              </label>
            </div>
          </div>

          <input
            type="text"
            name="detail"
            className="form-control mb-3"
            placeholder="Địa chỉ nhận hàng"
            onChange={onChangeState}
            value={dataStep1.address.detail}
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

          <p>Thời gian giao hàng</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="timeDelivery"
                id="time-delivery1"
                value="all day"
                onChange={onChangeState}
                checked={dataStep1.timeDelivery === "all day"}
              />
              <label className="form-check-label" htmlFor="time-delivery1">
                Các ngày trong tuần
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="timeDelivery"
                id="time-delivery2"
                value="office day"
                onChange={onChangeState}
                checked={dataStep1.timeDelivery === "office day"}
              />
              <label className="form-check-label" htmlFor="time-delivery2">
                Giờ hành chính
              </label>
            </div>
          </div>

          <p>Phương thức thanh toán</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentType"
                id="payment-methods1"
                value="cod"
                onChange={onChangeState}
                checked={dataStep1.paymentType === "cod"}
              />
              <label className="form-check-label" htmlFor="payment-methods1">
                Thanh toán khi nhận hàng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentType"
                id="payment-methods2"
                onChange={onChangeState}
                value="online"
                checked={dataStep1.paymentType === "online"}
              />
              <label className="form-check-label" htmlFor="payment-methods2">
                Thanh toán bằng Paypal
              </label>
            </div>
          </div>

          <textarea
            name="message"
            className="form-control mb-3 mt-3"
            placeholder="Ghi chú"
            value={dataStep1.message}
            onChange={onChangeState}
          />
        </div>
        <button className="btnNext" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default DeliveryInfo;
