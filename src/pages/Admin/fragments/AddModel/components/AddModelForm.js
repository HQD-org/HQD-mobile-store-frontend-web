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
  const brands = useSelector((state) => state.brands.list);
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
    <div className="row" style={{ marginTop: "50px" }}>
      <div className="col-sm-12 body-form">
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
        <hr style={{ color: "#cfcfcf" }} />
        <form onSubmit={addModel}>
          <div className="row mb-3">
            <div className="col-5">
              <div className="mb-3">
                <label htmlFor="name-model" className="form-label">
                  Tên mẫu
                </label>
                <input
                  autoFocus
                  type="text"
                  name="name"
                  className="form-control"
                  id="name-model"
                />
              </div>
            </div>
            <div className="col" style={{ width: "58%" }}>
              <div className="mb-3">
                <label htmlFor="screen" className="form-label">
                  Màn hình
                </label>
                <input
                  type="text"
                  name="screen"
                  className="form-control"
                  id="screen"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" style={{ width: "33.5%" }}>
              <div className="mb-3">
                <label
                  htmlFor="operating-system"
                  className="form-label"
                  style={{ width: "190px" }}
                >
                  Hệ điều hành
                </label>
                <input
                  type="text"
                  name="os"
                  className="form-control"
                  id="operating-system"
                />
              </div>
            </div>
            <div className="col" style={{ width: "33%" }}>
              <div className="mb-3">
                <label htmlFor="rear-camera" className="form-label">
                  Camera sau
                </label>
                <input
                  type="text"
                  name="rearCamera"
                  className="form-control"
                  id="rear-camera"
                />
              </div>
            </div>
            <div className="col" style={{ width: "33%" }}>
              <div className="mb-3">
                <label htmlFor="front-camera" className="form-label">
                  Camera trước
                </label>
                <input
                  type="text"
                  name="frontCamera"
                  className="form-control"
                  id="front-camera"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <div className="mb-3">
                <label htmlFor="name-model" className="form-label">
                  Thương hiệu
                </label>
                <SelectCustom defaultValue={0} name="brand" list={brands} />
              </div>
            </div>
            <div className="col" style={{ width: "30%" }}>
              <div className="mb-3">
                <label
                  htmlFor="sim"
                  className="form-label"
                  style={{ width: "50px" }}
                >
                  Sim
                </label>
                <input
                  type="text"
                  name="sim"
                  className="form-control"
                  id="sim"
                />
              </div>
            </div>
            <div className="col" style={{ width: "27.8%" }}>
              <div className="mb-3">
                <label
                  htmlFor="chip"
                  className="form-label"
                  style={{ width: "50px" }}
                >
                  Chip
                </label>
                <input
                  type="text"
                  name="chip"
                  className="form-control"
                  id="chip"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" style={{ width: "30%" }}>
              <div className="mb-3">
                <label
                  htmlFor="memoryStick"
                  className="form-label"
                  style={{ width: "239px" }}
                >
                  Thẻ nhớ
                </label>
                <input
                  type="text"
                  name="memoryStick"
                  className="form-control"
                  id="memoryStick"
                />
              </div>
            </div>
            <div className="col" style={{ width: "20%" }}>
              <div className="mb-3">
                <label
                  htmlFor="battery"
                  className="form-label"
                  style={{ width: "50px" }}
                >
                  Pin
                </label>
                <input
                  type="text"
                  name="battery"
                  className="form-control"
                  id="battery"
                />
              </div>
            </div>
            <div className="col" style={{ width: "20%" }}>
              <div className="mb-3">
                <label
                  htmlFor="charger"
                  className="form-label"
                  style={{ width: "50px" }}
                >
                  Sạc
                </label>
                <input
                  type="text"
                  name="charger"
                  className="form-control"
                  id="charger"
                />
              </div>
            </div>
            <div className="col" style={{ width: "29.3%" }}>
              <div className="mb-3">
                <label htmlFor="status" className="form-label">
                  Trạng thái
                </label>
                <SelectCustom
                  defaultValue={0}
                  name="status"
                  list={statusModel}
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" style={{ width: "99.2%" }}>
              <div className="mb-3">
                <label
                  htmlFor="input-description"
                  className="form-label"
                  style={{ width: "137px" }}
                >
                  Mô tả
                </label>

                <textarea
                  className="form-control"
                  id="input-description"
                  rows="4"
                  name="description"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5 mb-3">
              <label htmlFor="timeDebut" className="form-label">
                Thời gian ra mắt
              </label>
              <input
                type="text"
                name="timeDebut"
                className="form-control"
                id="timeDebut"
              />
            </div>
            <div className="col-5 mb-3">
              <button className="btnColor" onClick={toggle} type="button">
                {buttonLabel}
                Thêm màu
              </button>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalBody>
                <form onSubmit={addColor}>
                  <div className="container">
                    {/* {formColor.map((item, index) => ( */}
                    {/* <div className="row" key={`item-${index}`}> */}
                    <div className="row">
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

          <div className="row mb-3" style={{ marginTop: "100px" }}>
            <hr style={{ color: "#cfcfcf" }} />
            <div className="col-12" style={{ textAlign: "center" }}>
              <button type="submit" className="btnAddModel">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModelForm;
