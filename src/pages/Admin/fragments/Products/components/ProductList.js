import React, { useState } from "react";
import imgPro from "../../../../../common/images/vivo-y20s.png";
import BranchList from "./BranchList";
import ProductEditorForMain from "./ProductEditorForMain";
import ProductEditorForSub from "./ProductEditorForSub";
import { IoArrowForwardOutline } from "react-icons/io5";

const ProductList = (props) => {
  const [modal, setModal] = useState(false);
  const [modalBranch, setModalBranch] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  const toggleBranch = () => {
    setModalBranch(!modalBranch);
  };
  return (
    <div className="container-fluid">
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ marginTop: "15px" }}
      >
        <div className="col">
          <div className="card card-product">
            <div className="img-top-text">
              <img
                src={imgPro}
                className="card-img-top img-productList"
                alt="..."
              />
              <div className="txt-product">
                <p className="name-pro">Vivo y20s</p>
                <p className="capacity-pro">128 GB</p>
                <p className="ram-pro">RAM: 8 GB</p>
                <p className="price-pro">Giá: 4.999.999 ₫</p>
              </div>
            </div>

            <div className="card-body">
              <p className="list-branch" onClick={toggleBranch}>
                Chi nhánh có hàng
              </p>
              <p className="card-text">Màu sắc: Cam</p>
              <p className="card-text">Số lượng: 10</p>
              <p className="card-text">
                Trạng thái: <span className="txt-status">Hoạt động</span>
              </p>
              <p className="list-branch" onClick={toggle}>
                Chi tiết sản phẩm <IoArrowForwardOutline />
              </p>
            </div>
          </div>
        </div>
        <ProductEditorForSub modal={modal} toggle={toggle} option={true} />
        <BranchList modal={modalBranch} toggle={toggleBranch} option={true} />
      </div>
    </div>
  );
};

export default ProductList;
