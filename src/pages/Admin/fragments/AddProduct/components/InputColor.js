/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { numberWithCommas } from "../../../../../common/utils/helper";

const InputColor = (props) => {
  const { index, items, onValueChange, type } = props;

  const onPriceChange = (idx, e) => {
    e.target.value = numberWithCommas(e.target.value.replace(/[^0-9]/g, ""));
    if (!e.target.value) return;
    const newColors = items.map((item, i) => {
      if (i !== idx) return item;
      return {
        ...item,
        price: e.target.value,
      };
    });
    if (type === "add") {
      onValueChange({ target: { name: "color", value: newColors } });
      return;
    }
    onValueChange(index, { target: { name: "color", value: newColors } });
  };

  return (
    <>
      {items.map((item, id) => {
        return (
          <div
            style={{ display: "flex", marginTop: "10px" }}
            key={`color${item + id}`}
          >
            <input
              disabled
              className="form-control mr-2"
              style={{ width: "25%" }}
              defaultValue={item.name}
            ></input>
            <div className="input-group" style={{ marginLeft: "5px" }}>
              <input
                type="text"
                className="form-control"
                defaultValue={numberWithCommas(item.price)}
                onChange={(e) => onPriceChange(id, e)}
              />
              <span className="input-group-text">VNĐ</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InputColor;
