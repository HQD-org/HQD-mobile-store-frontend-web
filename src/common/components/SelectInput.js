import React from "react";
import SelectCustom from "./SelectCustom";

const SelectInput = (props) => {
  const {
    id,
    name,
    label,
    list,
    defaultValue,
    classLabel,
    classInput,
    classParent,
  } = props;
  return (
    <div className={classParent}>
      <div className={classLabel}>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      </div>
      <div className={classInput}>
        <SelectCustom
          defaultValue={defaultValue}
          name={name}
          list={list}
          label={label}
        />
      </div>
    </div>
  );
};

export default SelectInput;
