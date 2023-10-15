import React from "react";
import styled from "styled-components";
import { MdOutlinePushPin } from "react-icons/md";
import { BaseIconType } from "./types";

export type PushPinOutlineProps = BaseIconType;

export const PushPinOutlineComponent = ({ className }: PushPinOutlineProps): JSX.Element => (
  <MdOutlinePushPin className={className} />
);

export const PushPinOutlineIcon = styled(PushPinOutlineComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
