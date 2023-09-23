import React from "react";
import styled from "styled-components";
import { FaBarsProgress } from "react-icons/fa6";
import { BaseIconType } from "./types";

export type BarsProgressProps = BaseIconType;

export const BarsProgressComponent = ({ className }: BarsProgressProps): JSX.Element => (
  <FaBarsProgress className={className} />
);

export const BarsProgressIcon = styled(BarsProgressComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
