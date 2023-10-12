import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { BaseIconType } from "./types";

export type LinkedinProps = BaseIconType;

export const LinkedinComponent = ({ className }: LinkedinProps): JSX.Element => <FaLinkedin className={className} />;

export const LinkedinIcon = styled(LinkedinComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
