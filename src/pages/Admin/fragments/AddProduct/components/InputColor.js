/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { numberWithCommas } from "../../../../../common/utils/helper";
import { useSelector } from "react-redux";

const InputColor = (props) => {
  const { index, items, onValueChange, type, onQuantityChange } = props;
  const role = useSelector((state) => state.auth.role);
  const branch = useSelector((state) => state.auth.branch);

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

  const onQuantityValueChange = (e, name) => {
    e.target.value = numberWithCommas(e.target.value.replace(/[^0-9]/g, ""));
    if (!e.target.value) return;
    onQuantityChange(index, {
      color: name,
      quantity: parseInt(e.target.value.replace(/[^0-9]/g, "")),
    });
  };

  return (
    <>
      {items.map((item, id) => {
        const quantityInfo = item.quantityInfo.find(
          (q) => q.idBranch === branch._id
        );
        let quantity = 0;
        if (quantityInfo) {
          quantity = quantityInfo.quantity;
        }
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
                disabled={role === "admin" ? false : true}
              />
              <span className="input-group-text">VNĐ</span>
            </div>
            {role === "admin" ? (
              <> </>
            ) : (
              <div className="input-group" style={{ marginLeft: "5px" }}>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={numberWithCommas(quantity)}
                  onChange={(e) => onQuantityValueChange(e, item.name)}
                />
                <span className="input-group-text">Sản phẩm</span>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default InputColor;
