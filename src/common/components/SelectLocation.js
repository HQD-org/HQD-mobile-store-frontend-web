import React, { useState, useEffect } from "react";

const SelectLocation = (props) => {
  const { options, name, placeholder, onSelectChange } = props;
  const [selectedOption, setSelectedOption] = useState(-1);

  useEffect(() => {
    setSelectedOption(-1);
  }, [options]);

  const optionList = options.map((value, index) => {
    return (
      <option value={index} key={value.code}>
        {value.name_with_type}
      </option>
    );
  });

  const onChangeSelectOption = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
    const selectedObj = options[newValue];
    onSelectChange(
      {
        name: selectedObj.name_with_type,
        id: selectedObj.code,
        index: newValue,
      },
      name
    );
  };

  return (
    <select
      value={selectedOption}
      className="form-select mt-4"
      onChange={onChangeSelectOption}
    >
      <option value={-1} disabled={true}>
        {placeholder}
      </option>
      {optionList}
    </select>
  );
};

export default SelectLocation;
