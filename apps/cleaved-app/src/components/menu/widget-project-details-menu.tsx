import React, { FunctionComponent } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled, { useTheme } from "styled-components";

import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
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
