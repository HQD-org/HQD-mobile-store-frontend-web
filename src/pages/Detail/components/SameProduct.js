import React from "react";
import { useHistory } from "react-router-dom";
import "../../../common/css/ProductHome.Style.css";

const SameProduct = (props) => {
  const { img, item, price } = props;
  const history = useHistory();
  const handleOnClick = () => {
    history.push(`/detail/${item._id}`);
    history.go(0);
  };
  return (
    <div className="col" onClick={handleOnClick}>
      <div className="card h-100 card-newPro">
        <div style={{ textDecoration: "none" }}>
          <div className="img-pro">
            <img src={img} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h5 className="card-text now-price">{price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameProduct;
