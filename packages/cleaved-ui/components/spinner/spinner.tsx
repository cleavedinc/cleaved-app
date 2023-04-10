import React, { FunctionComponent } from "react";
import styled, { keyframes } from "styled-components";

export type SpinnerProps = {
  visible?: boolean;
  color?: string;
  size?: number;
  className?: string;
};

const spin = keyframes`
    0%{
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100%{
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  border-radius: 100%;
  height: 20px;
  margin: 0 auto;
  position: relative;
  width: 20px;
  &:before,
  &:after {
    content: "";
    border: 5px solid transparent;
    border-radius: 100%;
    border-top-color: #3498db;
    height: 100%;
    left: -10px;
    position: absolute;
    top: -10px;
    width: 100%;
  }
  &:before {
    animation: ${spin} 1s infinite;
    z-index: 100;
  }
  &:after {
    border: 5px solid #ccc;
  }
`;

export const Spinner: FunctionComponent<SpinnerProps> = ({ className, color, size, visible }) => {
  if (!visible) {
    return null;
  }

  return <SpinnerWrapper className={className} />;
};

Spinner.defaultProps = {
  color: "#000000",
  size: 1,
};
