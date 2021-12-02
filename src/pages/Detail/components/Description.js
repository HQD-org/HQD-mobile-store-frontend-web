import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowMoreText from "react-show-more-text";
const Description = () => {
  const product = useSelector((state) => state.product.productDetail);
  const [model, setModel] = useState({});
  const executeOnClick = (isExpanded) => {
    // console.log(isExpanded);
  };
  useEffect(() => {
    if (product.model) setModel(product.model);
  }, [product]);
  return (
    <div>
      <hr />
      <div className="description-product">
        <h4>MÔ TẢ SẢN PHẨM</h4>
        <ShowMoreText
          lines={10}
          more="Show more"
          less="Show less"
          className="content-css"
          onClick={executeOnClick}
          expanded={false}
          width={700}
          truncatedEndingComponent={"... "}
        >
          <p>{model.description}</p>
        </ShowMoreText>
      </div>
    </div>
  );
};

export default Description;
