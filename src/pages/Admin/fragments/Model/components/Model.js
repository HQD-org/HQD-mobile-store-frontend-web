import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import modelImg from "../../../../../common/images/3d-modeling.png";
import InputImage from "../../../../../common/components/InputImage";

const Model = (props) => {
  const { buttonLabel, className } = props;
  const [formColor, setFormColor] = useState([]);
  const [images, setImages] = useState([]);
  const [modalColor, setModalColor] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleColor = () => setModalColor(!modalColor);
  const toggle = () => setModal(!modal);
  return (
    <div className="container-fluid">
      <div className="row">
        <table className="table table-striped" style={{ marginTop: "30px" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên Model</th>
              <th>Thương hiệu</th>
              <th>Hệ điều hành</th>
              <th>Thời gian ra mắt</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>1</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>2</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>3</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {buttonLabel}
              <td>4</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i className="bi bi-x-circle-fill"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} className="modal-model">
          <ModalHeader className="close-x" toggle={toggle}>
            <img
              src={modelImg}
              alt=""
              width="5%"
              style={{ marginRight: "5px" }}
            />
            Update Model
          </ModalHeader>
          <ModalBody>
            <form>
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
                      <select className="form-select">
                        <option selected disabled>
                          Choose..
                        </option>
                        <option value="1">iPhone</option>
                        <option value="2">OPPO</option>
                      </select>
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
                      <select className="form-select">
                        <option selected disabled>
                          Choose..
                        </option>
                        <option value="1">Hoạt động</option>
                        <option value="2">Ngừng kinh doanh</option>
                        <option value="3">Hết hàng</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col ">
                  <div className="row infor-right-top">
                    {" "}
                    <div className="row">
                      <div className="col-4">
                        <label
                          htmlFor="operating-system"
                          className="form-label"
                        >
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
                    <button
                      className="btnColor"
                      onClick={toggleColor}
                      type="button"
                    >
                      {buttonLabel}
                      Thêm màu
                    </button>
                    <div>
                      {/* {formColor.map((item, index) => (
                <div className="row" key={`item-${index}`}></div>
              ))} */}
                    </div>
                  </div>
                  <Modal
                    isOpen={modalColor}
                    toggle={toggleColor}
                    className={className}
                  >
                    <ModalBody>
                      <form>
                        <div className="container">
                          <div className="row">
                            {/* {formColor.map((item, index) => (*/}
                            {/*<div className="row" key={`item-${index}`}>*/}
                            <div className="col-4">
                              <label
                                htmlFor="ColorModel"
                                className="form-label"
                              >
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
                          <Button
                            type="button"
                            color="secondary"
                            onClick={toggleColor}
                          >
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
                  <button type="button" className="btndanger">
                    DELETE
                  </button>
                </div>
              </div>
            </form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Model;
