/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import Input from "../../../../../common/components/Input";
import InputImage from "../../../../../common/components/InputImage";
import "../../../../../common/css/Brand.Style.css";
import toastNotify from "../../../../../common/toastify";
import { uploadImagesToFirebase } from "../../../../../common/utils/uploadFirebase";
import { validateAddColor, validateUpdateColor } from "../hooks/validate";

const ColorEditor = (props) => {
  const {
    modal,
    toggle,
    className,
    option,
    currentIndex,
    colorList,
    setColors,
  } = props;
  const color = colorList[currentIndex] || {};
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("log at ==> ColorEditor ==> option: ", option);

    if (!option && modal) {
      console.log("log at ==> ColorEditor ==> color: ", color);
      const imagesPreview = color.images.map((image) => {
        const imagePreview = {
          preview: image,
        };
        console.log("log at ==> ColorEditor ==> imagePreview: ", imagePreview);
        return { preview: image };
      });
      setImages(imagesPreview);
    }
  }, [modal]);

  const onToggle = () => {
    setImages([]);
    toggle(false);
  };

  const handleAddColor = async (e) => {
    e.preventDefault();
    const nameColor = e.target.colorName.value;
    const isValidData = validateAddColor({
      color: { images, name: nameColor },
      list: colorList,
    });
    if (isValidData) {
      const res = await dispatch(uploadImagesToFirebase(images, "Model"));
      if (res.length > 0) {
        const color = {
          name: nameColor,
          images: Array.isArray(res) ? res : [res],
        };
        setColors((prev) => [...prev, color]);
        onToggle();
        return;
      }
      toastNotify("Vui lòng thử lại!");
    }
  };

  const handleUpdateColor = async (e) => {
    e.preventDefault();
    const nameColor = e.target.colorName.value;
    const isValidData = validateUpdateColor({
      color: { images, name: nameColor },
      list: colorList,
      index: currentIndex,
    });
    if (isValidData) {
      const res = await dispatch(uploadImagesToFirebase(images, "Model"));
      if (res.length > 0) {
        const colorUpdated = {
          name: nameColor,
          images: Array.isArray(res) ? res : [res],
        };
        const newColorList = colorList;
        newColorList[currentIndex] = colorUpdated;
        setColors(newColorList);
        onToggle();
        return;
      }
      toastNotify("Vui lòng thử lại!");
    }
  };

  return (
    <Modal isOpen={modal} toggle={onToggle} className={className}>
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
            <Button type="button" color="secondary" onClick={onToggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ColorEditor;
