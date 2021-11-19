import React from "react";

const ColorModelSection = (props) => {
  const { colors, toggle } = props;
  return (
    <div>
      {colors.map((item, index) => {
        const images = item.images;
        return (
          <div
            className="row"
            key={`${item.name} + ${index}`}
            onClick={() => toggle(index)}
          >
            <div> {item.name}</div>
            <img
              src={images[0]}
              style={{ width: "10%", height: "10%" }}
              alt={item.name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorModelSection;
