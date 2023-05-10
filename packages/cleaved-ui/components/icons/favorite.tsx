import React from "react";
import styled from "styled-components";
import { MdOutlineFavorite } from "react-icons/md";
import { BaseIconType } from "./types";

export type FavoriteProps = BaseIconType;

export const FavoriteComponent = ({ className }: FavoriteProps): JSX.Element => (
  <MdOutlineFavorite className={className} />
);

export const FavoriteIcon = styled(FavoriteComponent)`
  font-size: ${(props) => (props.iconSize ? props.iconSize : "16px")};
  color: ${(props) => (props.color ? props.color : ({ theme }) => theme.colors.baseText_color)};
`;
