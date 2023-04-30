import React, { FunctionComponent } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled, { useTheme } from "styled-components";

import { BORDERS, CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
    border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;

export const WidgetProjectDetailsMenu: FunctionComponent = () => {
  const theme = useTheme();
  const { t } = useTranslator();

  const handleRouteToProjectStartNew = () => {
    alert("not hooked up yet");
  };

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectStartNew()}>{t("widget.projectDetailsEdit")}</StyledBasicItem>
    </StyledBasicMenu>
  );
};
