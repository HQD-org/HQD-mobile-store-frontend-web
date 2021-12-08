/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../../common/css/Detail.Style.css";
import { getByListIdAction } from "../../../redux/actions/Branch/branchAction";
import { addToCartAction } from "../../../redux/actions/Cart/cartAction";
import { findProductByIdAction } from "../../../redux/actions/Product/productAction";

const CapacityGrid = (props) => {
  const { capacity, currentCapacity, onChangeCapacity } = props;
  return (
    <Grid container spacing={3}>
      {capacity.map((c, index) => (
        <div key={`capacity${index}`} onClick={() => onChangeCapacity(c)}>
          <p
            className="ram-infor"
            style={{
              // backgroundColor: currentCapacity === c ? "#EF7E3F" : "white",
              color: currentCapacity === c ? "#3FA5EF" : "black",
              border:
                currentCapacity === c ? "1px solid #3FA5EF" : "1px solid black",
            }}
          >
            {c}
          </p>
        </div>
      ))}
    </Grid>
  );
};

const ColorGrid = (props) => {
  const { color, changeColor, currentColor } = props;
  return (
    <Grid container spacing={3}>
      {color.map((c, index) => (
        <div onClick={() => changeColor(c.name)} key={`color-${index}`}>
          <p
            className="ram-infor"
            style={{
              // backgroundColor: currentColor.name === c.name ? "blue" : "white",
              color: currentColor === c ? "#3FA5EF" : "black",
              border:
                currentColor === c ? "1px solid #3FA5EF" : "1px solid black",
            }}
          >
            {c.name}
          </p>
        </div>
      ))}
    </Grid>
  );
};

const ImageGrid = ({ images, onSelect }) => {
  return (
    <Grid container spacing={3}>
      {images.map((i, index) => (
        <img
          key={`image-${index}`}
          className="img-list"
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
      <img
        className="main-image mb-5 mt-3"
        src={src}
        width="500px"
        height="500px"
        alt=""
      />
    </div>
  );
};

const BasicInfo = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) => state.product.productDetail);
  const products = useSelector((state) => state.product.list);
  const branches = useSelector((state) => state.branch.list);

  const [selectedImage, setSelectedImage] = useState(0);
  const [currentColor, setCurrentColor] = useState(
    product.color ? product.color[0] : {}
  );
  const [images, setImages] = useState([]);
  const [capacityList, setCapacityList] = useState([]);
  const [listBranches, setListBranches] = useState([]);
  const [quantityOfBranch, setQuantityOfBranch] = useState([]);
  const [textBtn, setTextBtn] = useState("THÊM VÀO GIỎ HÀNG");

  const addToCart = async () => {
    if (currentColor.quantityInfo.length <= 0) return;
    const data = {
      idProduct: product._id,
      color: currentColor.name,
      image: images[selectedImage],
    };
    await dispatch(addToCartAction(data));
  };

  const changeColor = (value) => {
    if (value === currentColor.name) return;
    setCurrentColor(product.color.find((c) => c.name === value));
  };

  const changeCapacity = (value) => {
    if (value === product.capacity) return;
    const idProduct = products.find(
      (p) =>
        p.idModel === product.idModel &&
        p.capacity === value &&
        p.ram === product.ram
    )._id;
    const fetchOtherProduct = async () => {
      await dispatch(findProductByIdAction(idProduct));
    };
    fetchOtherProduct();
    history.push(`/detail/${idProduct}`);
  };

  useEffect(() => {
    if (product.color) {
      setCurrentColor(product.color[0]);
      const imgs = [];
      product.model.color.forEach((c) => {
        imgs.push(...c.images);
      });
      setImages(imgs);
    }
  }, [product]);

  useEffect(() => {
    const branches = [];
    const quantityOfBranch = [];
    if (currentColor.quantityInfo) {
      currentColor.quantityInfo.forEach((q) => {
        if (q.quantity > 0) {
          branches.push(q.idBranch);
          quantityOfBranch.push(q.quantity);
        }
      });
      setTextBtn(
        currentColor.quantityInfo.length > 0 ? "THÊM VÀO GIỎ HÀNG" : "HẾT HÀNG"
      );
    }
    console.log("a", currentColor.quantityInfo.length);
    setQuantityOfBranch(quantityOfBranch);
    setListBranches(branches);
  }, [currentColor]);

  useEffect(() => {
    if (products.length > 0) {
      setCapacityList(
        products
          .filter((item) => product.ram === item.ram)
          .map((p) => p.capacity)
          .sort(function (a, b) {
            const x = parseInt(a.replace("GB", ""));
            const y = parseInt(b.replace("GB", ""));
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          })
      );
    }
  }, [products]);

  useEffect(() => {
    const fetchListBranch = async (id = []) => {
      await dispatch(getByListIdAction({ id }));
    };
    if (listBranches.length > 0) {
      fetchListBranch(listBranches);
      return;
    }
    fetchListBranch();
  }, [listBranches]);

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
          <Typography variant="h4">{product.name}</Typography>
          <Grid item sm={8}>
            <CapacityGrid
              capacity={capacityList}
              currentCapacity={product.capacity}
              onChangeCapacity={changeCapacity}
            />
          </Grid>
          <Grid item sm={8}>
            <ColorGrid
              color={product.color || []}
              changeColor={changeColor}
              currentColor={currentColor}
            />
          </Grid>
          <div className="row">
            <div className="col-7">
              <p className="price-infor">
                {currentColor.price ? currentColor.price + " ₫" : "0 ₫"}
              </p>
            </div>
          </div>
          <div className="col-7 mb-3" onClick={() => addToCart()}>
            <div>
              <button type="button" className="add-to-cart">
                {textBtn}
              </button>
            </div>
          </div>
          <div className="row">
            <p style={{ marginLeft: "2px", fontWeight: "600" }}>
              Có <span style={{ color: "red" }}>{branches.length}</span> cửa
              hàng có sẵn sản phẩm này
            </p>
            <div className="col-7 hasBranch">
              <ul style={{ paddingLeft: "20px", fontSize: "13px" }}>
                {branches.map((branch, i) => {
                  const address = branch.address;
                  return (
                    <div key={branch._id}>
                      <li>
                        {address.detail +
                          " " +
                          address.village +
                          " " +
                          address.district +
                          " " +
                          address.province +
                          " còn "}
                        <span style={{ color: "#3FA5EF" }}>
                          {(quantityOfBranch[i] || 0) + " "}
                        </span>
                        sản phẩm
                      </li>

                      <hr />
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
