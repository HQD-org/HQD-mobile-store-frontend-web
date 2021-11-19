import React from "react";

const Textarea = (props) => {
  const {
    id,
    name,
    label,
    rows,
    resize,
    classLabel,
    classParent,
    classTextarea,
    defaultValue,
  } = props;
  return (
    <div className={classParent}>
      <div className={classLabel}>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      </div>
      <div className={classTextarea}>
        <textarea
          style={{ resize: resize || "none" }}
          className="form-control"
          id={id}
          rows={rows || 4}
          name={name}
          defaultValue={defaultValue || ""}
        ></textarea>
      </div>
    </div>
  );
};

export default Textarea;
