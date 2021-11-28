import React, { useState } from "react";
import imgPro from "../../../../../common/images/vivo-y20s.png";
import ProductEditorForMain from "./ProductEditorForMain";
import ProductEditorForSub from "./ProductEditorForSub";
const ProductList = (props) => {
  const { buttonLabel } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div className="container-fluid">
      <div
        className="row row-cols-1 row-cols-md-3 g-4"
        style={{ marginTop: "15px" }}
      >
        <div className="col">
          <div className="card card-product" onClick={toggle}>
            {buttonLabel}
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
              <p className="list-branch">Chi nhánh có hàng</p>
              <p className="card-text">Màu sắc: Cam</p>
              <p className="card-text">Số lượng: 10</p>
              <p className="card-text">
                Trạng thái: <span className="txt-status">Hoạt động</span>
              </p>
            </div>
          </div>
        </div>
        <ProductEditorForMain
          modal={modal}
          toggle={toggle}
          option={true}
          brand={undefined}
        />
      </div>
    </div>
  );
};

export default ProductList;
