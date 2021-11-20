/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../../common/components/Input";
import SelectInput from "../../../../../common/components/SelectInput";
import Textarea from "../../../../../common/components/Textarea";
import { statusModel } from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Brand.Style.css";
import modelImg from "../../../../../common/images/3d-modeling.png";
import { getAllBrandAction } from "../../../../../redux/actions/Brand/brandAction";
import { validateAddModel } from "../hooks/validate";
import ColorEditor from "./ColorEditor";
import ColorModelSection from "./ColorModelSection";

const AddModelForm = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);
  const [colors, setColors] = useState([]);
  const [currentColor, setCurrentColor] = useState(null);
  const brands = useSelector((state) => state.brand.list);

  const toggle = (index) => {
    if (index || index === 0) setCurrentColor(colors[index]);
    if (modal) setCurrentColor(null);
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getAllBrandAction(1, 1000));
  }, []);

  useEffect(() => {
    console.log("log at ==> AddModelForm ==> line 32 ==> formColor: ", colors);
  }, [colors]);

  const addModel = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      screen: e.target.screen.value,
      os: e.target.os.value,
      rearCamera: e.target.rearCamera.value,
      frontCamera: e.target.frontCamera.value,
      brand: e.target.brand.value,
      sim: e.target.sim.value,
      chip: e.target.chip.value,
      memoryStick: e.target.memoryStick.value,
      battery: e.target.battery.value,
      charger: e.target.charger.value,
      status: e.target.status.value,
      description: e.target.description.value,
      timeDebut: e.target.timeDebut.value,
    };
    const isValidData = validateAddModel(data);
    if (!isValidData) return;
    //hanlde image and add model api
    console.log(
      "log at ==> AddModelForm.js ==> line 57 ==> status: ",
      isValidData
    );
  };

  return (
    <>
      <form onSubmit={addModel}>
        <div className="row">
          <hr style={{ color: "#cfcfcf" }} />
          <p style={{ display: "flex", alignItems: "center" }}>
            <img
              src={modelImg}
              alt=""
              width="5%"
              style={{ marginRight: "5px" }}
            />
            <strong style={{ color: "#3fa5ef", fontSize: "25px" }}>
              New Model
            </strong>
          </p>
        </div>
        <div className="row">
          <div className="col-7 infor-left">
            <Input
              id="name-model"
              name="name"
              autoFocus={true}
              label={"Tên mẫu"}
              classLabel={"col-3"}
              classInput={"col-7 mb-3"}
              classParent={"row"}
            />
            <Input
              id="screen"
              name="screen"
              label={"Màn hình"}
              classLabel={"col-3"}
              classInput={"col-7 mb-3"}
              classParent={"row"}
            />
            <SelectInput
              id="brand"
              name="brand"
              defaultValue={0}
              list={brands}
              label={"Thương hiệu"}
              classLabel={"col-3 mb-3"}
              classInput={"col-7"}
              classParent={"row"}
            />
            <Textarea
              id="input-description"
              rows={4}
              name="description"
              classLabel={"col-3"}
              label={"Mô tả"}
              classTextarea={"col-7 mb-3"}
              classParent={"row"}
            />
            <Input
              id="timeDebut"
              name="timeDebut"
              label={"Thời gian ra mắt"}
              classLabel={"col-3"}
              classInput={"col-7 mb-3"}
              classParent={"row"}
            />
            <SelectInput
              id="status"
              name="status"
              label={"Trạng thái"}
              defaultValue={0}
              list={statusModel}
              classLabel={"col-3 mb-3"}
              classInput={"col-7"}
              classParent={"row"}
            />
          </div>
          <div className="col ">
            <div className="row infor-right-top">
              <Input
                id="operating-system"
                name="os"
                label={"Hệ điều hành"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="front-camera"
                name="frontCamera"
                label={"Camera trước"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="rear-camera"
                name="rearCamera"
                label={"Camera sau"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="memoryStick"
                name="memoryStick"
                label={"Thẻ nhớ"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="battery"
                name="battery"
                label={"Pin"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="charger"
                name="charger"
                label={"Sạc"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="sim"
                name="sim"
                label={"Sim"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
              <Input
                id="chip"
                name="chip"
                label={"Chip"}
                classLabel={"col-4"}
                classInput={"col-7 mb-3"}
                classParent={"row"}
              />
            </div>
            <div className="row infor-right-bottom">
              <button className="btnColor" onClick={toggle} type="button">
                {buttonLabel}
                Thêm màu
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3" style={{ marginTop: "100px" }}>
          <ColorModelSection colors={colors} toggle={toggle} />
          <hr style={{ color: "#cfcfcf" }} />
          <div className="col-12" style={{ textAlign: "center" }}>
            <button type="submit" className="btnAddModel">
              SAVE
            </button>
          </div>
        </div>
      </form>

      <ColorEditor
        modal={modal}
        toggle={toggle}
        className={className}
        setColors={setColors}
        color={currentColor}
        option={true}
      />
    </>
  );
};

export default AddModelForm;
