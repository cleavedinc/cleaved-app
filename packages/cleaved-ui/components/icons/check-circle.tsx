import React from "react";
import styled from "styled-components";
import { MdCheckCircle } from "react-icons/md";
import { BaseIconType } from "./types";

export type CheckCircleProps = BaseIconType;

export const CheckCircleComponent = ({ className }: CheckCircleProps): JSX.Element => (
  <MdCheckCircle className={className} />
);

export const CheckCircleIcon = styled(CheckCircleComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
