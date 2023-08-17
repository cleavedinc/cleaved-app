import React from "react";
import styled from "styled-components";
import { MdPushPin } from "react-icons/md";
import { BaseIconType } from "./types";

export type PushPinProps = BaseIconType;

export const PushPinComponent = ({ className }: PushPinProps): JSX.Element => <MdPushPin className={className} />;

export const PushPinIcon = styled(PushPinComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
