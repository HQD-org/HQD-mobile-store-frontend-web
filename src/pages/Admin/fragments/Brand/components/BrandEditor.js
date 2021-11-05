/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import {
  img,
  thumb,
  thumbInner,
  thumbsContainer,
} from "../../../../../common/components/Thumb";
import { storage } from "../../../../../common/config/firebase";
import { default as AddBtn } from "../../../../../common/images/add-button.png";
import {
  addBrandAction,
  updateBrandAction,
} from "../../../../../redux/actions/Brand/brandAction";
import { changeLoading } from "../../../../../redux/actions/System/systemAction";
import { validateAddBrand, validateUpdateBrand } from "../hooks/validate";

const loading =
  (loading = false) =>
  (dispatch) => {
    dispatch(changeLoading(loading));
  };

const BrandEditor = (props) => {
  const { className, toggle, option, brand } = props;
  let { modal } = props;
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles) {
        setImages(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });

  useEffect(() => {
    if (!option && modal) {
      console.log("log at ==> BrandEditor ==> image change: ", images);

      setImages([{ preview: brand.image }]);
    }
  }, [modal]);

  const thumbs = images.map((image) => (
    <div style={thumb} key={image.name}>
      <div style={thumbInner}>
        <img src={image.preview} style={img} alt="" />
      </div>
    </div>
  ));

  const onToggle = () => {
    setImages([]);
    toggle(false);
  };

  useEffect(
    () => () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    },
    [images]
  );

  const addBrand = (e) => {
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
    dispatch(loading(true));
    const uploadTask = storage.ref(`Brand/${images[0].name}`).put(images[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        dispatch(loading());
        console.log(error);
      },
      async () => {
        const url = await storage
          .ref("Brand")
          .child(images[0].name)
          .getDownloadURL();
        dispatch(loading());
        if (url) {
          const res = await dispatch(
            addBrandAction({ name, image: url, status, description })
          );
          if (res) onToggle();
        }
      }
    );
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
    if (images.length > 0) {
      dispatch(loading(true));
      const uploadTask = storage.ref(`Brand/${images[0].name}`).put(images[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          dispatch(loading());
          console.log(error);
        },
        async () => {
          const url = await storage
            .ref("Brand")
            .child(images[0].name)
            .getDownloadURL();
          if (url) {
            dispatch(loading());
            const res = await dispatch(
              updateBrandAction({ id, name, image: url, status, description })
            );
            if (res) onToggle();
          }
        }
      );
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
        Add Brand
      </ModalHeader>
      <ModalBody>
        <form onSubmit={option ? addBrand : updateBrand}>
          <div className="container">
            <div className="row mb-3">
              <label htmlFor="input-name" className="col-sm-4 col-form-label">
                Tên thương hiệu
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="brandName"
                  defaultValue={option ? "" : brand.name}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-name" className="col-sm-4 col-form-label">
                Trạng thái
              </label>
              <div className="col-sm-8">
                <select
                  defaultValue={option ? 0 : brand.status}
                  name="status"
                  className="form-select"
                >
                  <option value={0} disabled={true}>
                    Chọn trạng thái
                  </option>
                  <option value="active">Hoạt động</option>
                  <option value="stop selling">Ngưng kinh doanh</option>
                </select>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="input-introduce" className="col-sm-4 form-label">
                Giới thiệu
              </label>
              <div className="col-12">
                <textarea
                  className="form-control"
                  id="input-introduce"
                  name="description"
                  rows="4"
                  defaultValue={option ? "" : brand.description}
                ></textarea>
              </div>
            </div>
            <section>
              <label htmlFor="input-img" className="col-sm-4 form-label">
                Hình ảnh
              </label>
              <div className="border-img">
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} name="image" />
                  <p className="txtSelectImg">
                    Select one images for your brand
                  </p>
                </div>
                <aside style={thumbsContainer}>{thumbs}</aside>
              </div>
            </section>
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