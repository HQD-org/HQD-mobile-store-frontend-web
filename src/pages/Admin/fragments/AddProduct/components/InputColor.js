import React from "react";
const inputColor = ({ item, index }) => {
  console.log("data:", item);
  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();
  };
  return (
    <>
      {item.map((items, id) => (
        <div style={{ display: "flex", marginTop: "10px" }}>
          <input
            disabled
            className="form-control mr-2"
            style={{ width: "25%" }}
            name="color"
            value={items.name}
            onChange={(e) => onChange(index, e)}
          ></input>
          <div className="input-group" style={{ marginLeft: "5px" }}>
            <input
              type="text"
              className="form-control"
              // className={
              //   item.error.price
              //     ? "form-control is-invalid"
              //     : "form-control "
              // }
              name="price"
              value={item.price}
              onChange={(e) => onChange(index, e)}
            />
            <span className="input-group-text">VNĐ</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default inputColor;
