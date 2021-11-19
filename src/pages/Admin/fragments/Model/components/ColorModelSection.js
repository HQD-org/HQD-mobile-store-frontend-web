import React from "react";
import { FaMinusCircle } from "react-icons/fa";

const ColorModelSection = (props) => {
  const { colors, toggle } = props;

  return (
    <div>
      {colors.map((item, index) => {
        const images = item.images;
        console.log("log at ==> Color Section ==> images: ", images);

        return (
          <div className="row" key={`${item.name} + ${index}`}>
            <FaMinusCircle color={"red"} />
            <div onClick={() => toggle(index)}>
              <div> {item.name}</div>
              <img
                src={images[0]}
                style={{ width: "10%", height: "10%" }}
                alt={item.name}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorModelSection;
