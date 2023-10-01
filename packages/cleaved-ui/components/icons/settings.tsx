import React from "react";
import styled from "styled-components";
import { FiSettings } from "react-icons/fi";
import { BaseIconType } from "./types";

export type SettingsIconProps = BaseIconType;

export const SettingsIconComponent = ({ className }: SettingsIconProps): JSX.Element => (
  <FiSettings className={className} />
);

export const SettingsIcon = styled(SettingsIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
