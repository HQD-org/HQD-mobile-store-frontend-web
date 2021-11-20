/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import Input from "../../../../../common/components/Input";
import InputImage from "../../../../../common/components/InputImage";
import SelectInput from "../../../../../common/components/SelectInput";
import Textarea from "../../../../../common/components/Textarea";
import { statusBrand } from "../../../../../common/constants/ListSelect";
import { default as AddBtn } from "../../../../../common/images/add-button.png";
import { uploadImagesToFirebase } from "../../../../../common/utils/uploadFirebase";
import {
  addBrandAction,
  updateBrandAction,
} from "../../../../../redux/actions/Brand/brandAction";
import { validateAddBrand, validateUpdateBrand } from "../hooks/validate";

const BrandEditor = (props) => {
  const { className, toggle, option, brand } = props;
  let { modal } = props;
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!option && modal) {
      setImages([{ preview: brand.image }]);
    }
  }, [modal]);

  const onToggle = () => {
    setImages([]);
    toggle(false);
  };

  const addBrand = async (e) => {
    e.preventDefault();
    const name = e.target.brandName.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const isValidData = validateAddBrand({
      name,
      status,
      images,
      description,
    });
    if (!isValidData) return;
    const url = await dispatch(uploadImagesToFirebase(images, "Brand"));
    if (url) {
      const res = await dispatch(
        addBrandAction({ name, image: url, status, description })
      );
      if (res) onToggle();
    }
  };

  const updateBrand = async (e) => {
    e.preventDefault();
    const name = e.target.brandName.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const isValidData = validateUpdateBrand({
      name,
      description,
    });
    const id = brand._id;
    if (!isValidData) return;
    if (images[0].preview !== brand.image) {
      const url = await dispatch(uploadImagesToFirebase(images, "Brand"));
      if (url) {
        const res = await dispatch(
          updateBrandAction({ id, name, image: url, status, description })
        );
        if (res) onToggle();
      }
    } else {
      const res = await dispatch(
        updateBrandAction({ id, name, status, description })
      );
      if (res) onToggle();
    }
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
      <ModalHeader className="close-x" toggle={onToggle}>
        <img
          src={AddBtn}
          alt={option ? "add icon" : "update icon"}
          style={{ width: "30px", marginRight: "5px" }}
        />
        {option ? "Add Brand" : "Update Brand"}
      </ModalHeader>
      <ModalBody>
        <form onSubmit={option ? addBrand : updateBrand}>
          <div className="container">
            <Input
              classParent="row mb-3"
              classLabel="col-sm-4 col-form-label"
              classInput="col-sm-8"
              label={"Tên thương hiệu"}
              name={"brandName"}
              id={"input-name"}
              defaultValue={option ? "" : brand.name}
            />
            <SelectInput
              id="status"
              name="status"
              label={"Trạng thái"}
              defaultValue={option ? 0 : brand.status}
              list={statusBrand}
              classLabel={"col-sm-4 col-form-label"}
              classInput={"col-sm-8"}
              classParent={"row mb-3"}
            />
            <Textarea
              id="description"
              rows={4}
              name="description"
              resize={"vertical"}
              classLabel={"col-sm-4 form-label"}
              label={"Giới thiệu"}
              classTextarea={"col-12"}
              classParent={"row mb-3"}
              defaultValue={option ? "" : brand.description}
            />
            <InputImage
              images={images}
              setImages={setImages}
              multiple={false}
            />
          </div>
          <ModalFooter>
            <Button type="submit" color="primary">
              Submit
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

export default BrandEditor;
