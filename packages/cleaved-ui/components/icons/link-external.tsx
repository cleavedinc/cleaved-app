import React from "react";
import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
import { BaseIconType } from "./types";

export type LinkExternalIconProps = BaseIconType;

export const LinkExternalIconComponent = ({ className }: LinkExternalIconProps): JSX.Element => (
  <FiExternalLink className={className} />
);

export const LinkExternalIcon = styled(LinkExternalIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
