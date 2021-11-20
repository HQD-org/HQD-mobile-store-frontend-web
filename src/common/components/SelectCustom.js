import React from "react";

const SelectCustom = (props) => {
  const { defaultValue, list, name, label } = props;
  const options = list.map((element, index) => {
    return (
      <option value={element._id} key={index}>
        {element.name}
      </option>
    );
  });
  return (
    <select className="form-select" defaultValue={defaultValue} name={name}>
      <option value={0} disabled={true}>
        Chọn {label || name}
      </option>
      {options}
    </select>
  );
};
export default SelectCustom;
