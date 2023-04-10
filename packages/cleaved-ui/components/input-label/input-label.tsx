import React, { FunctionComponent } from "react";
import styled from "styled-components";

type InputLabelProps = {
  component: React.ReactNode;
  htmlFor?: string;
  text: React.ReactNode | string;
  className?: string;
};

const InputLabelText = styled.label``;

export const InputLabel: FunctionComponent<InputLabelProps> = ({ htmlFor, text, component, className }) => (
  <div className={className}>
    {component}
    <InputLabelText htmlFor={htmlFor} className="CAMPBELL">
      {text}
    </InputLabelText>
  </div>
);

InputLabel.defaultProps = {};
