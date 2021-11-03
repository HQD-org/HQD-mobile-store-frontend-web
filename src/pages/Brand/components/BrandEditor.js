import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import AddBtn from "../../../common/images/add-button.png";
import {
  addBrandAction,
  updateBrandAction,
} from "../../../redux/actions/Brand/brandAction";
import { validateAddBrand, validateUpdateBrand } from "../hooks/validate";
import { useDropzone } from "react-dropzone";
import { storage } from "../../../common/config/firebase";
import UpdateBtn from "../../../common/images/add-button.png";
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};
const BrandEditor = (props) => {
  const { className, toggle, getListBrand, option, brand, page, itemPerPage } =
    props;
  let { modal } = props;
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const [image, setImage] = useState(null);
  const onImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const addBrand = (e) => {
    e.preventDefault();
    const name = e.target.brandName.value;
    const description = e.target.description.value;
    const status = e.target.status.value;
    const isValidData = validateAddBrand({ name, status, image, description });
    if (!isValidData) return;
    const uploadTask = storage.ref(`Brand/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      async () => {
        const url = await storage
          .ref("Brand")
          .child(image.name)
          .getDownloadURL();
        if (url) {
          console.log("log at ==> AddBrand.js ===> line 102 ==> url: ", url);
          const res = await dispatch(
            addBrandAction({ name, image: url, status, description })
          );
          if (res) {
            toggle(false);
            if (!getListBrand) return;
            getListBrand(page, itemPerPage);
          }
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
    if (image) {
      const uploadTask = storage.ref(`Brand/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        async () => {
          const url = await storage
            .ref("Brand")
            .child(image.name)
            .getDownloadURL();
          if (url) {
            console.log("log at ==> AddBrand.js ===> line 102 ==> url: ", url);
            const res = await dispatch(
              updateBrandAction({ id, name, image: url, status, description })
            );
            if (res) {
              toggle(false);
              if (!getListBrand) return;
              getListBrand(page, itemPerPage);
            }
          }
        }
      );
    } else {
      const res = await dispatch(
        updateBrandAction({ id, name, status, description })
      );
      if (res) {
        toggle(false);
        if (!getListBrand) return;
        getListBrand(page, itemPerPage);
      }
    }
  };

  return (
    <Modal isOpen={modal} toggle={() => toggle(false)} className={className}>
      <ModalHeader className="close-x" toggle={() => toggle(false)}>
        <img
          src={option ? AddBtn : UpdateBtn}
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
                  <input
                    {...getInputProps()}
                    name="image"
                    onChange={onImageChange}
                  />
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
            {/* {option ? (
              <></>
            ) : (
              <Button type="button" color="danger" onClick={deleteBrand}>
                Delete
              </Button>
            )} */}
            <Button
              type="button"
              color="secondary"
              onClick={() => toggle(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default BrandEditor;
