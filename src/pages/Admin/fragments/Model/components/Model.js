import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import modelImg from "../../../../../common/images/3d-modeling.png";

const Model = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="container-fluid">
      {" "}
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
                <i class="bi bi-x-circle-fill"></i>
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
                <i class="bi bi-x-circle-fill"></i>
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
                <i class="bi bi-x-circle-fill"></i>
              </td>
            </tr>
            <tr onClick={toggle}>
              {" "}
              {buttonLabel}
              <td>4</td>
              <td>Oppo A31</td>
              <td>OPPO</td>
              <td>Android</td>
              <td>2020</td>
              <td>Hoạt động</td>
              <td>
                <i class="bi bi-x-circle-fill"></i>
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
                  <div class="mb-3">
                    <label
                      for="name-model"
                      class="form-label"
                      style={{ width: "223px" }}
                    >
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
                    <input
                      type="text"
                      class="form-control"
                      id="screen"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col" style={{ width: "33.5%" }}>
                  <div class="mb-3">
                    <label
                      for="operating-system"
                      class="form-label"
                      style={{ width: "288px" }}
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
                    <label
                      for="name-model"
                      class="form-label"
                      style={{ width: "236px" }}
                    >
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
                    <label
                      for="sim"
                      class="form-label"
                      style={{ width: "50px" }}
                    >
                      Sim
                    </label>
                    <input type="text" class="form-control" id="sim" required />
                  </div>
                </div>
                <div className="col" style={{ width: "27.8%" }}>
                  <div class="mb-3">
                    <label
                      for="chip"
                      class="form-label"
                      style={{ width: "50px" }}
                    >
                      Chip
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="chip"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col" style={{ width: "30%" }}>
                  <div class="mb-3">
                    <label
                      for="menmory"
                      class="form-label"
                      style={{ width: "343px" }}
                    >
                      Thẻ nhớ
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="memory"
                      required
                    />
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
                    <input
                      type="text"
                      class="form-control"
                      id="battery"
                      required
                    />
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
                      style={{ width: "153px" }}
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
                  <label
                    for="timeStart"
                    class="form-label"
                    style={{ width: "227px" }}
                  >
                    Thời gian ra mắt
                  </label>
                  <input
                    type="text"
                    class="form-control"
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
