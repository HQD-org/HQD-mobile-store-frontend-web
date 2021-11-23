import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FcViewDetails } from "react-icons/fc";

const ProductEditorForSub = (props) => {
  const { className, toggle } = props;
  let { modal } = props;
  const onToggle = () => {
    toggle(false);
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}>
        <FcViewDetails style={{ fontSize: "30px" }} />
        Chi tiết sản phẩm
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="row mb-2">
            <div className="col-3">
              <p>Tên Model</p>
            </div>
            <div className="col-8">
              <Input readOnly placeholder="Oppo A31" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Thương hiệu</p>
            </div>
            <div className="col-8">
              <Input readOnly placeholder="OPPO" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Thương hiệu</p>
            </div>
            <div className="col-8">
              <Input placeholder="Cam" readOnly></Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Giá</p>
            </div>
            <div className="col-8">
              <InputGroup>
                <Input placeholder="4.999.999" readOnly />
                <InputGroupText>VNĐ</InputGroupText>
              </InputGroup>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>RAM</p>
            </div>
            <div className="col-8">
              <Input placeholder="4 GB" readOnly></Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Dung lượng</p>
            </div>
            <div className="col-8">
              <Input placeholder="32 GB" readOnly></Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Chi nhánh</p>
            </div>
            <div className="col-8">
              <Input placeholder="4 GB" readOnly></Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Số lượng</p>
            </div>
            <div className="col-8">
              <Input type="number" />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Trạng thái</p>
            </div>
            <div className="col-8">
              <Input type="select" name="select" className="form-select">
                <option>Còn hàng</option>
                <option>Hết hàng</option>
                <option>Ngưng kinh doanh</option>
              </Input>
            </div>
          </div>
          <ModalFooter>
            <Button type="submit" color="primary">
              Save
            </Button>{" "}
            <Button type="button" color="secondary" onClick={onToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ProductEditorForSub;
