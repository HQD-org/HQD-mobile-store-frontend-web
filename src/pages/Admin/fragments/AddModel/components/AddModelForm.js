import React, { useState, useEffect } from "react";
import modelImg from "../../../../../common/images/3d-modeling.png";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useDropzone } from "react-dropzone";
import "../../../../../common/css/Brand.Style.css";
import {
  img,
  thumb,
  thumbInner,
  thumbsContainer,
} from "../../../../../common/components/Thumb";

const AddModelForm = (props) => {
  const { buttonLabel, className } = props;
  const [images, setImages] = useState([]);
  const [modal, setModal] = useState(false);
  const [formColor, setFormColor] = useState([]);

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

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImages(
        acceptedFiles.map((image) =>
          Object.assign(image, {
            preview: URL.createObjectURL(image),
          })
        )
      );
    },
  });

  const thumbs = images.map((image) => (
    <div style={thumb} key={image.name}>
      <div style={thumbInner}>
        <img src={image.preview} style={img} alt="" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    },
    [images]
  );

  return (
    <div class="row" style={{ marginTop: "50px" }}>
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
        <form>
          <div className="row mb-3">
            <div className="col-5">
              <div class="mb-3">
                <label for="name-model" class="form-label">
                  Tên mẫu
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name-model"
                  required
                />
              </div>
            </div>
            <div className="col" style={{ width: "58%" }}>
              <div class="mb-3">
                <label for="screen" class="form-label">
                  Màn hình
                </label>
                <input type="text" class="form-control" id="screen" required />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" style={{ width: "33.5%" }}>
              <div class="mb-3">
                <label
                  for="operating-system"
                  class="form-label"
                  style={{ width: "190px" }}
                >
                  Hệ điều hành
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="operating-system"
                  required
                />
              </div>
            </div>
            <div className="col" style={{ width: "33%" }}>
              <div class="mb-3">
                <label for="rear-camera" class="form-label">
                  Camera sau
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="raer-camera"
                  required
                />
              </div>
            </div>
            <div className="col" style={{ width: "33%" }}>
              <div class="mb-3">
                <label for="front-camera" class="form-label">
                  Camera trước
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="front-camera"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-5">
              <div class="mb-3">
                <label for="name-model" class="form-label">
                  Thương hiệu
                </label>
                <select class="form-select">
                  <option selected disabled>
                    Choose..
                  </option>
                  <option value="1">iPhone</option>
                  <option value="2">OPPO</option>
                </select>
              </div>
            </div>
            <div className="col" style={{ width: "30%" }}>
              <div class="mb-3">
                <label for="sim" class="form-label" style={{ width: "50px" }}>
                  Sim
                </label>
                <input type="text" class="form-control" id="sim" required />
              </div>
            </div>
            <div className="col" style={{ width: "27.8%" }}>
              <div class="mb-3">
                <label for="chip" class="form-label" style={{ width: "50px" }}>
                  Chip
                </label>
                <input type="text" class="form-control" id="chip" required />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col" style={{ width: "30%" }}>
              <div class="mb-3">
                <label
                  for="menmory"
                  class="form-label"
                  style={{ width: "239px" }}
                >
                  Thẻ nhớ
                </label>
                <input type="text" class="form-control" id="memory" required />
              </div>
            </div>
            <div className="col" style={{ width: "20%" }}>
              <div class="mb-3">
                <label
                  for="battery"
                  class="form-label"
                  style={{ width: "50px" }}
                >
                  Pin
                </label>
                <input type="text" class="form-control" id="battery" required />
              </div>
            </div>
            <div className="col" style={{ width: "20%" }}>
              <div class="mb-3">
                <label
                  for="charging"
                  class="form-label"
                  style={{ width: "50px" }}
                >
                  Sạc
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="charging"
                  required
                />
              </div>
            </div>
            <div className="col" style={{ width: "29.3%" }}>
              <div class="mb-3">
                <label for="status" class="form-label">
                  Trạng thái
                </label>
                <select class="form-select">
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
          <div class="row mb-3">
            <div className="col" style={{ width: "99.2%" }}>
              <div className="mb-3">
                <label
                  for="input-description"
                  class="form-label"
                  style={{ width: "137px" }}
                >
                  Mô tả
                </label>

                <textarea
                  class="form-control"
                  id="input-description"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div class="col-5 mb-3">
              <label for="timeStart" class="form-label">
                Thời gian ra mắt
              </label>
              <input type="text" class="form-control" id="timeStart" required />
            </div>
            <div class="col-5 mb-3">
              <button className="btnColor" onClick={toggle} type="button">
                {buttonLabel}
                Thêm màu
              </button>
            </div>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalBody>
                <form>
                  <div className="container">
                    {formColor.map((item, index) => (
                      <div className="row" key={`item-${index}`}>
                        <div className="col-4">
                          <label for="ColorModel" class="form-label">
                            Màu
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="ColorInput"
                            value={item.ColorInput}
                            onChange={(e) => onChange(index, e)}
                            id="ColorModel"
                            required
                          />
                        </div>
                        <div className="col">
                          <section>
                            <label for="input-img" class="col-sm-4 form-label">
                              Hình ảnh
                            </label>
                            <div className="border-img">
                              <div {...getRootProps({ className: "dropzone" })}>
                                <input
                                  {...getInputProps()}
                                  required
                                  name="Upload"
                                  value={item.Upload}
                                />
                                <p className="txtSelectImg">
                                  Select one or "n" image for your model
                                </p>
                              </div>
                              <aside style={thumbsContainer}>{thumbs}</aside>
                            </div>
                          </section>
                        </div>
                      </div>
                    ))}
                    <div className="row">
                      <div className="col-4">
                        <button
                          className="btnColor"
                          onClick={handleAddColor}
                          style={{ width: "125px" }}
                        >
                          Thêm màu
                        </button>
                      </div>
                    </div>
                  </div>
                  <ModalFooter>
                    <Button color="primary">Submit</Button>{" "}
                    <Button color="secondary" onClick={toggle}>
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
