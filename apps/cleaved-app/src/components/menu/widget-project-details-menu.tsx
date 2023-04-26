import React, { FunctionComponent } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  font-size: ${FONT_SIZES.SMALL};

  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicMenu = styled(Menu)`
  margin-left: auto;

  ul {
    color: ${COLORS.BLACK};
  }
`;

export const WidgetProjectDetailsMenu: FunctionComponent = () => {
  const { t } = useTranslator();

  const handleRouteToProjectStartNew = () => {
    alert("not hooked up yet");
  };

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={COLORS.GRAY_500} iconSize={FONT_SIZES.LARGE} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleRouteToProjectStartNew()}>{t("widget.projectDetailsEdit")}</StyledBasicItem>
    </StyledBasicMenu>
  );
};
