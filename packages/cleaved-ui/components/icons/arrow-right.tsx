import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { BaseIconType } from "./types";

export type ArrowRightProps = BaseIconType;

export const ArrowRightComponent = ({ className }: ArrowRightProps): JSX.Element => (
  <FiArrowRight className={className} />
);

export const ArrowRightIcon = styled(ArrowRightComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
