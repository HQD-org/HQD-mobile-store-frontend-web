/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Input from "../../../../../common/components/Input";
import InputImage from "../../../../../common/components/InputImage";
import "../../../../../common/css/Brand.Style.css";
import toastNotify from "../../../../../common/toastify";
import { uploadImagesToFirebase } from "../../../../../common/utils/uploadFirebase";

const ColorEditor = (props) => {
  const { modal, toggle, className, option, color, setColors } = props;
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!option) setImages(color.images);
  }, []);

  const handleAddColor = async (e) => {
    e.preventDefault();
    const res = await dispatch(uploadImagesToFirebase(images, "Model"));
    const color = {
      name: e.target.colorName.value,
      images: res,
    };
    if (res.length > 0) {
      setColors((prev) => [...prev, color]);
      console.log("log at ==> AddModelForm ==> res: ", res);
      toggle();
      return;
    }
    toastNotify("Vui lòng thử lại!");
  };

  const handleUpdateColor = async (e) => {
    e.preventDefault();
    console.log("log at ==> ColorEditor ==> line 37 ==> update color");
  };

  return (
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalBody>
        <form onSubmit={option ? handleAddColor : handleUpdateColor}>
          <div className="container">
            <Input
              id={"colorName"}
              name={"colorName"}
              classLabel={"col-3"}
              label={"Màu"}
              defaultValue={option ? "" : color.name}
            />
            <div className="col">
              <InputImage
                images={images}
                setImages={setImages}
                multiple={true}
              />
            </div>
          </div>
          <ModalFooter>
            <Button type="submit" color="primary">
              Submit
            </Button>{" "}
            <Button type="button" color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ColorEditor;
