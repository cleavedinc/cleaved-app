import React from "react";
import styled from "styled-components";
import { MdHandshake } from "react-icons/md";
import { BaseIconType } from "./types";

export type HandshakeProps = BaseIconType;

export const HandshakeComponent = ({ className }: HandshakeProps): JSX.Element => <MdHandshake className={className} />;

export const HandshakeIcon = styled(HandshakeComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
