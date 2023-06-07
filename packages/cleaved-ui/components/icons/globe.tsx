import React from "react";
import styled from "styled-components";
import { FiGlobe } from "react-icons/fi";
import { BaseIconType } from "./types";

export type GlobeIconProps = BaseIconType;

export const GlobeIconComponent = ({ className }: GlobeIconProps): JSX.Element => <FiGlobe className={className} />;

export const GlobeIcon = styled(GlobeIconComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
