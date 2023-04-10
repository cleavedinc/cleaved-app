import React, { FunctionComponent, useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";

type ToggleProps = {
  callback: () => any;
  label?: string;
  isChecked?: boolean;
  onColor?: string;
  offColor?: string;
};

const StyledLabel = styled.label``;

export const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { callback, label, isChecked, onColor, offColor } = props;
  const [toggleState, setToggleState] = useState(isChecked || false);

  const handleChange = (checked: boolean) => {
    setToggleState(checked);
    callback();
  };

  return (
    <StyledLabel>
      {label && <span>{label}</span>}
      <Switch checked={toggleState} onChange={handleChange} onColor={onColor} offColor={offColor} />
    </StyledLabel>
  );
};
