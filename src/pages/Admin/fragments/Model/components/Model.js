import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import modelImg from "../../../../../common/images/3d-modeling.png";

const Model = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

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
        <Modal isOpen={modal} toggle={toggle} className={className}>
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
              <div className="row mb-3">
                <div className="col-5">
                  <div className="mb-3">
                    <label
                      for="name-model"
                      className="form-label"
                      style={{ width: "223px" }}
                    >
                      Tên mẫu
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name-model"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "58%" }}>
                  <div className="mb-3">
                    <label for="screen" className="form-label">
                      Màn hình
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="screen"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col" style={{ width: "33.5%" }}>
                  <div className="mb-3">
                    <label
                      for="operating-system"
                      className="form-label"
                      style={{ width: "288px" }}
                    >
                      Hệ điều hành
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="operating-system"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "33%" }}>
                  <div className="mb-3">
                    <label for="rear-camera" className="form-label">
                      Camera sau
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="raer-camera"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "33%" }}>
                  <div className="mb-3">
                    <label for="front-camera" className="form-label">
                      Camera trước
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="front-camera"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5">
                  <div className="mb-3">
                    <label
                      for="name-model"
                      className="form-label"
                      style={{ width: "236px" }}
                    >
                      Thương hiệu
                    </label>
                    <select className="form-select">
                      <option selected disabled>
                        Choose..
                      </option>
                      <option value="1">iPhone</option>
                      <option value="2">OPPO</option>
                    </select>
                  </div>
                </div>
                <div className="col" style={{ width: "30%" }}>
                  <div className="mb-3">
                    <label
                      for="sim"
                      className="form-label"
                      style={{ width: "50px" }}
                    >
                      Sim
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sim"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "27.8%" }}>
                  <div className="mb-3">
                    <label
                      for="chip"
                      className="form-label"
                      style={{ width: "50px" }}
                    >
                      Chip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="chip"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col" style={{ width: "30%" }}>
                  <div className="mb-3">
                    <label
                      for="menmory"
                      className="form-label"
                      style={{ width: "343px" }}
                    >
                      Thẻ nhớ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="memory"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "20%" }}>
                  <div className="mb-3">
                    <label
                      for="battery"
                      className="form-label"
                      style={{ width: "50px" }}
                    >
                      Pin
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="battery"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "20%" }}>
                  <div className="mb-3">
                    <label
                      for="charging"
                      className="form-label"
                      style={{ width: "50px" }}
                    >
                      Sạc
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="charging"
                      required
                    />
                  </div>
                </div>
                <div className="col" style={{ width: "29.3%" }}>
                  <div className="mb-3">
                    <label for="status" className="form-label">
                      Trạng thái
                    </label>
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
              <div className="row mb-3">
                <div className="col" style={{ width: "99.2%" }}>
                  <div className="mb-3">
                    <label
                      for="input-description"
                      className="form-label"
                      style={{ width: "153px" }}
                    >
                      Mô tả
                    </label>

                    <textarea
                      className="form-control"
                      id="input-description"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-5 mb-3">
                  <label
                    for="timeStart"
                    className="form-label"
                    style={{ width: "227px" }}
                  >
                    Thời gian ra mắt
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="timeStart"
                    required
                  />
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
