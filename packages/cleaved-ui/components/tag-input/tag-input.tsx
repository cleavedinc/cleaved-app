import React, { FunctionComponent } from "react";
import CreatableSelect from "react-select/creatable";

// TODO: fix this any
export const TagInput: FunctionComponent<any> = (props) => {
  const { id, name, onChange, options, placeholder, value } = props;

  return (
    <CreatableSelect
      isMulti
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      options={options}
    />
  );
};
