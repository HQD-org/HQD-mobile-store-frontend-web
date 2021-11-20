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
import CurrencyInput from "react-currency-input-field";

const ProductEditorForMain = (props) => {
  const { className, toggle } = props;
  let { modal } = props;
  const onToggle = () => {
    toggle(false);
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}></ModalHeader>
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
              <Input type="select" name="select" className="form-select">
                <option>Cam</option>
                <option>Nâu</option>
                <option>Đen</option>
              </Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Giá</p>
            </div>
            <div className="col-8">
              <InputGroup>
                <CurrencyInput
                  decimalSeparator=","
                  groupSeparator="."
                  id="price"
                  className="form-control"
                  name="price"
                  maxLength={1000000000000}
                  placeholder="4.999.999"
                  onValueChange={(value, name) => console.log(value, name)}
                />
                <InputGroupText>VNĐ</InputGroupText>
              </InputGroup>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>RAM</p>
            </div>
            <div className="col-8">
              <Input type="select" name="select" className="form-select">
                <option>1 GB</option>
                <option>2 GB</option>
                <option>3 GB</option>
              </Input>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-3">
              <p>Dung lượng</p>
            </div>
            <div className="col-8">
              <Input type="select" name="select" className="form-select">
                <option>16 GB</option>
                <option>64 GB</option>
                <option>252 GB</option>
              </Input>
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

export default ProductEditorForMain;
