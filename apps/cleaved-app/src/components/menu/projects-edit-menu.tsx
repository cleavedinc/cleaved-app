import React, { FunctionComponent, useState } from "react";
import { Menu, MenuItem, MenuRadioGroup } from "@szhsin/react-menu";
import styled from "styled-components";

import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon } from "@cleaved/ui";

import { useTranslator } from "../../hooks";

import "@szhsin/react-menu/dist/index.css";

const StyledBasicItem = styled(MenuItem)`
  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${COLORS.BLACK};
  }
`;

export const ProjectsEditMenu: FunctionComponent = () => {
  const { t } = useTranslator();
  const [textColor, setTextColor] = useState("red");

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall>
          <EllipsisHorizontalIcon />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <MenuRadioGroup value={textColor} onRadioChange={(e) => setTextColor(e.value)}>
        <StyledBasicItem type="radio" value="red">
          {t("projects.active")}
        </StyledBasicItem>

        <StyledBasicItem type="radio" value="green">
          {t("projects.inactive")}
        </StyledBasicItem>

        <StyledBasicItem type="radio" value="blue">
          {t("projects.archive")}
        </StyledBasicItem>
      </MenuRadioGroup>
    </StyledBasicMenu>
  );
};
