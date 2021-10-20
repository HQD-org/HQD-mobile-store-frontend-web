import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Upload from "../components/Upload";
import AddBtn from "../../../common/images/add-button.png";

const AddBrands = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
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
                <select class="form-select" aria-label="Default select example">
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
  );
};

export default AddBrands;
