import React, { useState } from "react";
import "../../../common/css/Brand.Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoiPhone from "../../../common/images/iPhone-logo.jpg";
import logoOppo from "../../../common/images/oppo-logo.jpg";
import Upload from "../components/Upload";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UpdateBtn from "../../../common/images/add-button.png";
import logoSamsung from "../../../common/images/samsung-logo.png";

const Brands = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div class="row row-cols-1 row-cols-md-4 g-4" style={{ marginTop: "15px" }}>
      <div class="col">
        <div class="card h-100 card-brand" onClick={toggle}>
          {buttonLabel}
          <div className="logo-brand">
            <img src={logoSamsung} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">SAMSUNG</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Hoạt động</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand" onClick={toggle}>
          {buttonLabel}
          <div className="logo-brand">
            <img src={logoiPhone} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">iPhone</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Hoạt động</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand" onClick={toggle}>
          {buttonLabel}
          <div className="logo-brand">
            <img src={logoOppo} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">OPPO</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Ngưng kinh doanh</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand" onClick={toggle}>
          {buttonLabel}
          <div className="logo-brand">
            <img src={logoOppo} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">OPPO</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Ngưng kinh doanh</small>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 card-brand" onClick={toggle}>
          {buttonLabel}
          <div className="logo-brand">
            <img src={logoOppo} class="card-img-top img-logo" alt="..." />
          </div>

          <div class="card-body">
            <h5 class="card-title">OPPO</h5>
            <p class="card-text">Giới thiệu sương sương về thương hiệu này</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Ngưng kinh doanh</small>
          </div>
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="close-x" toggle={toggle}>
          <img
            src={UpdateBtn}
            alt=""
            style={{ width: "30px", marginRight: "5px" }}
          />
          Update Brand
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="container">
              <div class="row mb-3">
                <label for="input-name" class="col-sm-4 col-form-label">
                  Tên thương hiệu
                </label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" id="input-name" />
                </div>
              </div>
              <div class="row mb-3">
                <label for="input-name" class="col-sm-4 col-form-label">
                  Trạng thái
                </label>
                <div className="col-sm-8">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      Choose..
                    </option>
                    <option value="1">Hoạt động</option>
                    <option value="2">Ngưng kinh doanh</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <label for="input-introduce" class="col-sm-4 form-label">
                  Giới thiệu
                </label>
                <div className="col-12">
                  <textarea
                    class="form-control"
                    id="input-introduce"
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <Upload />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Submit</Button>{" "}
          <Button color="danger">Delete</Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Brands;
