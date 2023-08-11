import React from "react";
import styled from "styled-components";
import { MdRefresh } from "react-icons/md";
import { BaseIconType } from "./types";

export type RefreshProps = BaseIconType;

export const RefreshComponent = ({ className }: RefreshProps): JSX.Element => <MdRefresh className={className} />;

export const RefreshIcon = styled(RefreshComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
