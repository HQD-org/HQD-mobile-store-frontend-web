/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "../../../common/css/Payment.Style.css";
import { validateStep1 } from "../hooks/validate";
import toastNotify from "../../../common/toastify";

const DeliveryInfo = (props) => {
  const { setShowStep2, setDataStep1, dataStep1, showStep1 } = props;
  const firstInitRef = useRef("");
  const [province, setProvince] = useState(-1);
  const [district, setDistrict] = useState(-1);
  const [village, setVillage] = useState(-1);
  const [districtList, setDistrictList] = useState([]);
  const [villageList, setVillageList] = useState([]);

  const authInfo = useSelector((state) => state.auth.user);
  const provinceList = useSelector((state) => state.location.provinces);
  const listBranch = useSelector((state) => state.branch.list);
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (!showStep1) return;
    if (authInfo.user)
      setDataStep1({
        ...dataStep1,
        name: authInfo.user.name,
        phone: authInfo.user.phone,
        email: authInfo.user.email,
        address: authInfo.user.address || {
          detail: "",
          province: "",
          district: "",
          village: "",
        },
      });
  }, [authInfo]);

  useEffect(() => {
    if (!showStep1) return;
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
    if (!showStep1) return;
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
    if (!showStep1) return;
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
    if (!showStep1) return;
    if (
      authInfo.user &&
      !firstInitRef.current &&
      provinceList.length > 0 &&
      authInfo.user.address
    ) {
      const provinceIndex = provinceList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.province
      );
      setProvince(provinceIndex);
    }
  }, [provinceList]);

  useEffect(() => {
    if (!showStep1) return;
    if (
      authInfo.user &&
      !firstInitRef.current &&
      districtList.length > 0 &&
      authInfo.user.address
    ) {
      const districtIndex = districtList.findIndex(
        (item) => item.name_with_type === authInfo.user.address.district
      );
      setDistrict(districtIndex);
    }
  }, [districtList]);

  useEffect(() => {
    if (!showStep1) return;
    if (
      authInfo.user &&
      !firstInitRef.current &&
      villageList.length > 0 &&
      authInfo.user.address
    ) {
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
        if (e.target.value === "online" && !isLogin) {
          toastNotify("Vui l??ng ????ng nh???p ????? th???c hi???n thanh to??n qua Paypal");
        } else {
          setDataStep1({ ...dataStep1, [e.target.name]: e.target.value });
        }
        break;
      case "timeDelivery":
      case "receiveType":
        if (e.target.value === "at home") {
          setDataStep1({
            ...dataStep1,
            idBranch: "1",
            [e.target.name]: e.target.value,
          });
          break;
        }
        setDataStep1({ ...dataStep1, [e.target.name]: e.target.value });
        break;
      case "message":
      case "idBranch":
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
            placeholder="H??? t??n ng?????i nh???n"
            onChange={onChangeState}
            value={dataStep1.name}
          />
          <input
            type="phone"
            name="phone"
            className="form-control mb-3"
            placeholder="S??? ??i???n tho???i"
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

          <p>H??nh th???c nh???n h??ng</p>
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
                T???i nh??
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
                T???i c???a h??ng
              </label>
            </div>
          </div>
          {dataStep1.receiveType === "at store" ? (
            <select
              value={dataStep1.idBranch}
              name="idBranch"
              className="form-select mb-3"
              onChange={onChangeState}
            >
              <option value="1">Ch???n chi nh??nh ?????t h??ng</option>
              {listBranch.map((branch) => {
                const address = branch.address;
                return (
                  <option value={branch._id} key={branch._id}>
                    {address.detail +
                      ", " +
                      address.village +
                      ", " +
                      address.district +
                      ", " +
                      address.province}
                  </option>
                );
              })}
            </select>
          ) : (
            <>
              <input
                type="text"
                name="detail"
                className="form-control mb-3"
                placeholder="?????a ch??? nh???n h??ng"
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
                      T???nh/Th??nh ph???
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
                      Qu???n/Huy???n
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
                      Ph?????ng/X??
                    </option>
                    {villageList.map((village, index) => (
                      <option key={village.code} value={index}>
                        {village.name_with_type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <p>Th???i gian giao h??ng</p>
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
                    C??c ng??y trong tu???n
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
                    Gi??? h??nh ch??nh
                  </label>
                </div>
              </div>
            </>
          )}

          <p>Ph????ng th???c thanh to??n</p>
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
                Thanh to??n khi nh???n h??ng
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
                Thanh to??n b???ng Paypal
              </label>
            </div>
          </div>

          <textarea
            name="message"
            className="form-control mb-3 mt-3"
            placeholder="Ghi ch??"
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
