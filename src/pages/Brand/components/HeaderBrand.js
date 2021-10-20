import React, { useState } from "react";
import "../../../common/css/Brand.Style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Upload from "../components/Upload";
import AddBtn from "../../../common/images/add-button.png";
import { FormGroup, Input } from "reactstrap";

const HeaderBrand = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className="row" style={{ marginTop: "50px", alignItems: "baseline" }}>
      <div className="col">
        <div style={{ display: "inline-flex" }}>
          <i class="fab fa-react icon-admin icon-brandHeader"></i>
          <span className="name-management">Brand</span>
        </div>

        <p className="choosenHQD"> Choosing HQD mobile is a good ideal</p>
      </div>

      <div className="col-6">
        {" "}
        <form className="form-filter-brand">
          <div className="col-4">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-3">
            {" "}
            <FormGroup>
              <Input type="select" name="select" id="filter-status">
                <option selected disabled>
                  Filter by Status
                </option>
                <option>Tất cả</option>
                <option>Hoạt động</option>
                <option>Ngưng kinh doanh</option>
              </Input>
            </FormGroup>
          </div>
          <div className="col-4">
            <button type="button" className="btn-addBrand">
              <span>Search</span>
            </button>
          </div>
        </form>
      </div>

      <div className="col-2">
        <button type="button" className="btn-addBrand" onClick={toggle}>
          {buttonLabel}
          <i class="bi bi-plus-square-fill icon-brand"></i>
          <span>Add Brand</span>
        </button>
      </div>

      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="close-x" toggle={toggle}>
          <img
            src={AddBtn}
            alt=""
            style={{ width: "30px", marginRight: "5px" }}
          />
          Add Brand
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
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default HeaderBrand;
