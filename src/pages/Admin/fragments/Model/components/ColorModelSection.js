import React from "react";
import { FaMinusCircle } from "react-icons/fa";

const ColorModelSection = (props) => {
  const { colors, toggle } = props;

  return (
    <div className="row">
      {colors.map((item, index) => {
        const images = item.images;
        console.log("log at ==> Color Section ==> images: ", images);

        return (
          <div
            className="col-2"
            key={`${item.name} + ${index}`}
            style={{ textAlign: "center" }}
          >
            <div onClick={() => toggle(index)} className="img-model-detail">
              <img src={images[0]} className="imgModel" alt={item.name} />
              <FaMinusCircle color={"red"} className="icon-delete" />
              <div style={{ margin: "10px 10px 20px 10px" }}>
                <span className="color-name"> {item.name}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorModelSection;
