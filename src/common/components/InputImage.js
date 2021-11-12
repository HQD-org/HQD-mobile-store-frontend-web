import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

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

const InputImage = (props) => {
  const { images, setImages, multiple } = props;
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: async (acceptedImages) => {
      const previews = await acceptedImages.map((image) => {
        Object.assign(image, {
          preview: URL.createObjectURL(image),
        });
        return image;
      });
      if (multiple) {
        setImages(Array.from([...images, ...previews]));
      } else {
        setImages(previews);
      }
    },
    multiple: multiple,
  });

  const thumbs = images.map((image, index) => (
    <div style={thumb} key={index}>
      <div style={thumbInner}>
        <img src={image.preview} style={img} alt="" />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    },
    [images]
  );

  return (
    <section>
      <label htmlFor="input-img" className="col-sm-4 form-label">
        Hình ảnh
      </label>
      <div className="border-img">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="txtSelectImg">
            {multiple ? "Select one or multiple images" : "Select one image"}
          </p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </div>
    </section>
  );
};

export default InputImage;
