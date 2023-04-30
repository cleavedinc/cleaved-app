import React, { FunctionComponent } from "react";
import Select from "react-select";

// TODO: fix this any
export const SelectSingleInput: FunctionComponent<any> = (props) => {
  const {
    classname,
    defaultValue,
    id,
    isDisabled,
    isSearchable,
    maxMenuHeight,
    name,
    onChange,
    options,
    placeholder,
    styles,
    value,
  } = props;

  return (
    <Select
      className={classname}
      defaultValue={defaultValue}
      id={id}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      maxMenuHeight={maxMenuHeight}
      name={name}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      styles={styles}
      value={value}
    />
  );
};
