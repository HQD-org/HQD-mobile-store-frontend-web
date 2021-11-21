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
          <div className="col-4" key={`${item.name} + ${index}`}>
            <div onClick={() => toggle(index)}>
              <img
                src={images[0]}
                style={{ width: "10%", height: "10%" }}
                alt={item.name}
              />
              <div> {item.name}</div>
              <FaMinusCircle color={"red"} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ColorModelSection;
