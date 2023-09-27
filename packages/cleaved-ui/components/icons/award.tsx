import React from "react";
import styled from "styled-components";
import { FiAward } from "react-icons/fi";
import { BaseIconType } from "./types";

export type AwardProps = BaseIconType;

export const AwardComponent = ({ className }: AwardProps): JSX.Element => <FiAward className={className} />;

export const AwardIcon = styled(AwardComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
