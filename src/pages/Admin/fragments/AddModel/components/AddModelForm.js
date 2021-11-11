/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import InputImage from "../../../../../common/components/InputImage";
import SelectCustom from "../../../../../common/components/SelectCustom";
import { statusModel } from "../../../../../common/constants/ListSelect";
import "../../../../../common/css/Brand.Style.css";
import modelImg from "../../../../../common/images/3d-modeling.png";
import { getAllBrandAction } from "../../../../../redux/actions/Brand/brandAction";
import { validateAddModel } from "../hooks/validate";

const AddModelForm = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className } = props;
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [formColor, setFormColor] = useState([]);
  const brands = useSelector((state) => state.brand.list);
  useEffect(() => {
    dispatch(getAllBrandAction(1, 1000));
  }, []);
  const toggle = () => setModal(!modal);
  const handleAddColor = (e) => {
    e.preventDefault();
    const inputColor = {
      ColorInput: "",
      Upload: "",
    };
    setFormColor((prev) => [...prev, inputColor]);
  };

  const onChange = (index, event) => {
    event.preventDefault();

    setFormColor((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }
        return {
          ...item,
          [event.target.name]: event.target.value,
        };
      });
    });
  };

  const addColor = (e) => {
    e.preventDefault();
    console.log("log at ==> AddModelForm.js ==> line 52 ==> images: ", images);
  };

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
          <div className="row">
            <div className="col-3">
              <label htmlFor="name-model" className="form-label">
                Tên mẫu
              </label>
            </div>
            <div className="col-7 mb-3">
              <input
                autoFocus
                type="text"
                name="name"
                className="form-control"
                id="name-model"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="screen" className="form-label">
                Màn hình
              </label>
            </div>
            <div className="col-7 mb-3">
              <input
                type="text"
                name="screen"
                className="form-control"
                id="screen"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 mb-3">
              <label htmlFor="name-model" className="form-label">
                Thương hiệu
              </label>
            </div>
            <div className="col-7">
              <SelectCustom defaultValue={0} name="brand" list={brands} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="input-description" className="form-label">
                Mô tả
              </label>
            </div>
            <div className="col-7 mb-3">
              <textarea
                className="form-control"
                id="input-description"
                rows="4"
                name="description"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="timeDebut" className="form-label">
                Thời gian ra mắt
              </label>
            </div>
            <div className="col-7 mb-3">
              <input
                type="text"
                name="timeDebut"
                className="form-control"
                id="timeDebut"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label htmlFor="status" className="form-label">
                Trạng thái
              </label>
            </div>
            <div className="col-7 mb-3">
              <SelectCustom defaultValue={0} name="status" list={statusModel} />
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="row infor-right-top">
            {" "}
            <div className="row">
              <div className="col-4">
                <label htmlFor="operating-system" className="form-label">
                  Hệ điều hành
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="os"
                  className="form-control"
                  id="operating-system"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="front-camera" className="form-label">
                  Camera trước
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="frontCamera"
                  className="form-control"
                  id="front-camera"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="rear-camera" className="form-label">
                  Camera sau
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="rearCamera"
                  className="form-control"
                  id="rear-camera"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="memoryStick" className="form-label">
                  Thẻ nhớ
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="memoryStick"
                  className="form-control"
                  id="memoryStick"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="battery" className="form-label">
                  Pin
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="battery"
                  className="form-control"
                  id="battery"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="charger" className="form-label">
                  Sạc
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="charger"
                  className="form-control"
                  id="charger"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="sim" className="form-label">
                  Sim
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="sim"
                  className="form-control"
                  id="sim"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <label htmlFor="chip" className="form-label">
                  Chip
                </label>
              </div>
              <div className="col-7 mb-3">
                <input
                  type="text"
                  name="chip"
                  className="form-control"
                  id="chip"
                />
              </div>
            </div>
          </div>

          <div className="row infor-right-bottom">
            <button className="btnColor" onClick={toggle} type="button">
              {buttonLabel}
              Thêm màu
            </button>
            <div>
              {/* {formColor.map((item, index) => (
                <div className="row" key={`item-${index}`}></div>
              ))} */}
            </div>
          </div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalBody>
              <form onSubmit={addColor}>
                <div className="container">
                  <div className="row">
                    {/* {formColor.map((item, index) => (
                <div className="row" key={`item-${index}`}>*/}
                    <div className="col-4">
                      <label htmlFor="ColorModel" className="form-label">
                        Màu
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="ColorInput"
                        // value={item.ColorInput}
                        // onChange={(e) => onChange(index, e)}
                        id="ColorModel"
                      />
                    </div>
                    <div className="col">
                      <InputImage
                        images={images}
                        setImages={setImages}
                        multiple={true}
                      />
                    </div>
                  </div>
                  {/* ))} */}
                </div>
                <ModalFooter>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>{" "}
                  <Button type="button" color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ModalFooter>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </div>
      <div className="row mb-3" style={{ marginTop: "100px" }}>
        <hr style={{ color: "#cfcfcf" }} />
        <div className="col-12" style={{ textAlign: "center" }}>
          <button type="submit" className="btnAddModel">
            SAVE
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddModelForm;
