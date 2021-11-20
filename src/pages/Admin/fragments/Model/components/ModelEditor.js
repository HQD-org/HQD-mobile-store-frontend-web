/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import Input from "../../../../../common/components/Input";
import SelectInput from "../../../../../common/components/SelectInput";
import Textarea from "../../../../../common/components/Textarea";
import { statusModel } from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Brand.Style.css";
import modelImg from "../../../../../common/images/3d-modeling.png";
import {
  addModelAction,
  updateModelAction,
} from "../../../../../redux/actions/Model/modelAction";
import { validateAddModel, validateUpdateModel } from "../hooks/validate";
import ColorEditor from "./ColorEditor";
import ColorModelSection from "./ColorModelSection";

const ModelEditor = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className, model, option, toggleEditor, modalEditor } =
    props;
  const brands = useSelector((state) => state.brand.list);
  const [modal, setModal] = useState(false);
  const [colors, setColors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isAddColor, setIsAddColor] = useState(true);

  const onToggleEditor = () => {
    toggleEditor();
    setColors([]);
  };

  const onToggle = (index) => {
    if (index || index === 0) {
      console.log("log at ==> Model Editor ==> line 28 ==> index: ", index);
      setIsAddColor(false);
      setCurrentIndex(index);
    }
    setModal(!modal);
  };

  useEffect(() => {
    console.log("log at ==> ModelEditor ==> init option: ", option);
    if (!option) {
      const colorList = model.color.map((ele) => {
        return {
          name: ele.name,
          images: ele.images,
        };
      });
      setColors(colorList);
    }
  }, [model]);

  useEffect(() => {
    if (!modal) {
      setIsAddColor(true);
      setCurrentIndex(null);
    }
  }, [modal]);

  useEffect(() => {
    console.log("log at ==> Model Editor ==> line 32 ==> formColor: ", colors);
  }, [colors]);

  const addModel = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      screen: e.target.screen.value,
      operation: e.target.os.value,
      rearCamera: e.target.rearCamera.value,
      frontCamera: e.target.frontCamera.value,
      idBrand: e.target.brand.value,
      sim: e.target.sim.value,
      chip: e.target.chip.value,
      memoryStick: e.target.memoryStick.value,
      battery: e.target.battery.value,
      charger: e.target.charger.value,
      status: e.target.status.value,
      description: e.target.description.value,
      timeDebut: e.target.timeDebut.value,
      color: colors,
    };
    const isValidData = validateAddModel(data);
    if (!isValidData) return;
    const res = await dispatch(addModelAction(isValidData));
    console.log("log at ==> AddModelForm.js ==> line 57 ==> res: ", res);
    if (res) {
      onToggleEditor();
      return;
    }
  };

  const updateModel = async (e) => {
    e.preventDefault();
    const data = {
      id: model._id,
      name: e.target.name.value,
      screen: e.target.screen.value,
      operation: e.target.os.value,
      rearCamera: e.target.rearCamera.value,
      frontCamera: e.target.frontCamera.value,
      idBrand: e.target.brand.value,
      sim: e.target.sim.value,
      chip: e.target.chip.value,
      memoryStick: e.target.memoryStick.value,
      battery: e.target.battery.value,
      charger: e.target.charger.value,
      status: e.target.status.value,
      description: e.target.description.value,
      timeDebut: e.target.timeDebut.value,
      color: colors,
    };
    const isValidData = validateUpdateModel(data);
    if (!isValidData) return;
    const res = await dispatch(updateModelAction(isValidData));
    console.log("log at ==> modelEditor.js ==> line 57 ==> res: ", res);
    if (res) {
      onToggleEditor();
      return;
    }
  };

  return (
    <>
      <Modal
        isOpen={modalEditor}
        toggle={onToggleEditor}
        className="modal-model"
      >
        <ModalHeader className="close-x" toggle={onToggleEditor}>
          <img
            src={modelImg}
            alt=""
            width="5%"
            style={{ marginRight: "5px" }}
          />
          {option ? "Add Model" : "Update Model"}
        </ModalHeader>
        <ModalBody>
          <form onSubmit={option ? addModel : updateModel}>
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
                  defaultValue={option ? "" : model.name}
                />
                <Input
                  id="screen"
                  name="screen"
                  label={"Màn hình"}
                  classLabel={"col-3"}
                  classInput={"col-7 mb-3"}
                  classParent={"row"}
                  defaultValue={option ? "" : model.screen}
                />
                <SelectInput
                  id="brand"
                  name="brand"
                  defaultValue={option ? 0 : model.brand}
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
                  defaultValue={option ? "" : model.description}
                />
                <Input
                  id="timeDebut"
                  name="timeDebut"
                  label={"Thời gian ra mắt"}
                  classLabel={"col-3"}
                  classInput={"col-7 mb-3"}
                  classParent={"row"}
                  defaultValue={option ? "" : model.timeDebut}
                />
                <SelectInput
                  id="status"
                  name="status"
                  label={"Trạng thái"}
                  defaultValue={option ? 0 : model.status}
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
                    defaultValue={option ? "" : model.operation}
                  />
                  <Input
                    id="front-camera"
                    name="frontCamera"
                    label={"Camera trước"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.frontCamera}
                  />
                  <Input
                    id="rear-camera"
                    name="rearCamera"
                    label={"Camera sau"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.rearCamera}
                  />
                  <Input
                    id="memoryStick"
                    name="memoryStick"
                    label={"Thẻ nhớ"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.memoryStick}
                  />
                  <Input
                    id="battery"
                    name="battery"
                    label={"Pin"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.battery}
                  />
                  <Input
                    id="charger"
                    name="charger"
                    label={"Sạc"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.charger}
                  />
                  <Input
                    id="sim"
                    name="sim"
                    label={"Sim"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.sim}
                  />
                  <Input
                    id="chip"
                    name="chip"
                    label={"Chip"}
                    classLabel={"col-4"}
                    classInput={"col-7 mb-3"}
                    classParent={"row"}
                    defaultValue={option ? "" : model.chip}
                  />
                </div>
                <div className="row infor-right-bottom">
                  <button
                    className="btnColor"
                    onClick={() => onToggle(false)}
                    type="button"
                  >
                    {buttonLabel}
                    Thêm màu
                  </button>
                </div>
              </div>
            </div>
            <div className="row mb-3" style={{ marginTop: "100px" }}>
              <ColorModelSection colors={colors} toggle={onToggle} />
              <hr style={{ color: "#cfcfcf" }} />
              <div className="col-12" style={{ textAlign: "center" }}>
                <button type="submit" className="btnAddModel">
                  SAVE
                </button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>

      <ColorEditor
        modal={modal}
        toggle={onToggle}
        className={className}
        setColors={setColors}
        colorList={colors}
        currentIndex={currentIndex}
        option={isAddColor}
      />
    </>
  );
};

export default ModelEditor;
