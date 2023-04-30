import React, { FunctionComponent, useState } from "react";
import Switch from "react-switch";
import styled from "styled-components";

import { BORDERS, SPACING } from "../../theme";

type ToggleProps = {
  callback: () => any;
  className?: string;
  label?: string;
  isChecked?: boolean;
  onColor?: string;
  offColor?: string;
};

const StyledLabelWrapper = styled.label`
  align-items: center;
  display: flex;
`;

const StyledLabel = styled.div`
  margin-right: ${SPACING.MEDIUM};
`;

const StyledSwitch = styled(Switch)`
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
`;

export const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { callback, className, label, isChecked, onColor, offColor } = props;
  const [toggleState, setToggleState] = useState(isChecked || false);

  const handleChange = (checked: boolean) => {
    setToggleState(checked);
    callback();
  };

  return (
    <StyledLabelWrapper className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSwitch checked={toggleState} onChange={handleChange} onColor={onColor} offColor={offColor} />
    </StyledLabelWrapper>
  );
};
