import React, { useState } from "react";
import { Grid, Link, Typography } from "@material-ui/core";
import Vivo from "../../../common/images/vivo-y20s.png";
import Xiaomi from "../../../common/images/xiaomi-redmi-note-9.png";
import "../../../common/css/Detail.Style.css";

const images = [Xiaomi, Vivo, Xiaomi, Vivo];
const RAM = ["4 GB", "6 GB"];
const Color = ["Xanh", "Đen", "Đỏ"];

const RAMGrid = ({ ram }) => {
  return (
    <Grid container spacing={3}>
      {ram.map((r) => (
        <Link href="# " underline="none">
          <p className="ram-infor">{r}</p>
        </Link>
      ))}
    </Grid>
  );
};
const ColorGrid = ({ color }) => {
  return (
    <Grid container spacing={3}>
      {color.map((c) => (
        <Link href="# " underline="none">
          <p className="ram-infor">{c}</p>
        </Link>
      ))}
    </Grid>
  );
};
const ImageGrid = ({ images, onSelect }) => {
  return (
    <Grid container spacing={3}>
      {images.map((i, index) => (
        <img
          class="img-list"
          src={i}
          alt=""
          width="80px"
          height="80px"
          onClick={() => onSelect(index)}
        />
      ))}
    </Grid>
  );
};

const ImageMain = ({ src }) => {
  return (
    <div>
      <img className="main-image mb-5 mt-3" src={src} width="100%" alt="" />
    </div>
  );
};

const BasicInfor = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <div className="row mt-3">
      <div className="col-6 all-images">
        <div>
          <ImageMain src={images[selectedImage]} />
          <Grid container>
            <Grid item sm={12}>
              <ImageGrid images={images} onSelect={setSelectedImage} />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <Typography variant="h4">OPPO A31 4GB</Typography>
          <Grid item sm={8}>
            <RAMGrid ram={RAM} />
          </Grid>
          <Grid item sm={8}>
            <ColorGrid color={Color} />
          </Grid>
          <div className="row">
            <div className="col-7">
              <p className="price-infor">4.999.999₫</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-7">
              <button type="button" className="add-to-cart">
                THÊM VÔ GIỎ HÀNG
              </button>
            </div>
          </div>
          <div className="row">
            <p style={{ marginLeft: "2px", fontWeight: "600" }}>
              Có <span style={{ color: "red" }}>5</span> cửa hàng có sản phẩm
            </p>
            <div className="col-7 hasBranch">
              <ul style={{ paddingLeft: "20px", fontSize: "13px" }}>
                <li>1 Võ Văn Ngân, phường gì đó, thành phố Thủ Đức</li>
                <hr />
                <li>2 Võ Văn Ngân, phường gì đó, thành phố Thủ Đức</li>
                <hr />
                <li>3 Võ Văn Ngân, phường gì đó, thành phố Thủ Đức</li>
                <hr />
                <li>4 Võ Văn Ngân, phường gì đó, thành phố Thủ Đức</li>
                <hr />
                <li>5 Võ Văn Ngân, phường gì đó, thành phố Thủ Đức</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfor;
