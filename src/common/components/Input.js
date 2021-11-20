import React from "react";

const Input = (props) => {
  const {
    id,
    name,
    label,
    type,
    autoFocus,
    placeholder,
    classLabel,
    classInput,
    classParent,
    defaultValue,
  } = props;
  return (
    <div className={classParent}>
      <div className={classLabel}>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      </div>
      <div className={classInput}>
        <input
          autoFocus={autoFocus || false}
          type={type || "text"}
          name={name}
          className="form-control"
          id={id}
          placeholder={placeholder || ""}
          defaultValue={defaultValue || ""}
        />
      </div>
    </div>
  );
};

export default Input;
