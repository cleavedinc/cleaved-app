import React from "react";
import styled from "styled-components";
import { FiCopy } from "react-icons/fi";
import { BaseIconType } from "./types";

export type CopyProps = BaseIconType;

export const CopyComponent = ({ className }: CopyProps): JSX.Element => <FiCopy className={className} />;

export const CopyIcon = styled(CopyComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
