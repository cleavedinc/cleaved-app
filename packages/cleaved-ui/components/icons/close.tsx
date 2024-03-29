import React from "react";
import styled from "styled-components";
import { FiX } from "react-icons/fi";
import { BaseIconType } from "./types";

export type CloseProps = BaseIconType;

export const CloseComponent = ({ className }: CloseProps): JSX.Element => <FiX className={className} />;

export const CloseIcon = styled(CloseComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
