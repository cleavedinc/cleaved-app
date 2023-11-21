import React from "react";
import styled from "styled-components";
import { MdLink } from "react-icons/md";
import { BaseIconType } from "./types";

export type FormatLinkProps = BaseIconType;

export const FormatLinkComponent = ({ className }: FormatLinkProps): JSX.Element => <MdLink className={className} />;

export const FormatLinkIcon = styled(FormatLinkComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
