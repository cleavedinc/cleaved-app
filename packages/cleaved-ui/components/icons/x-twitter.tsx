import React from "react";
import styled from "styled-components";
import { FaXTwitter } from "react-icons/fa6";
import { BaseIconType } from "./types";

export type XTwitterProps = BaseIconType;

export const XTwitterComponent = ({ className }: XTwitterProps): JSX.Element => <FaXTwitter className={className} />;

export const XTwitterIcon = styled(XTwitterComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
