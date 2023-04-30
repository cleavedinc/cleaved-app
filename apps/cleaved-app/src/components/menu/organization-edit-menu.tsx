import React, { FunctionComponent, useContext } from "react";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useMutation } from "@apollo/react-hooks";
import styled, { css, useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, CircleEditButtonSmall, EllipsisHorizontalIcon } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { SET_PREFERRED_ORGANIZATION_MUTATION } from "../../gql-mutations";

import "@szhsin/react-menu/dist/index.css";

type OrganizationEditMenuProps = {
  orgId: string;
};

const basicItemBase = css`
  :hover,
  &.szh-menu__item--hover {
    background-color: ${({ theme }) => theme.colors.baseBox_backgroundColor};
  }
`;

const StyledBasicItem = styled(MenuItem)`
  ${basicItemBase}
`;

const StyledBasicItemRed = styled(MenuItem)`
  ${basicItemBase}

  :hover {
    color: ${({ theme }) => theme.colors.baseAlert_color};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    background-color: ${({ theme }) => theme.colors.body_backgroundColor};
    border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;

export const OrganizationEditMenu: FunctionComponent<OrganizationEditMenuProps> = (props) => {
  const { orgId } = props;
  const { setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const theme = useTheme();
  const { t } = useTranslator();

  const [setPreferredOrganization] = useMutation(SET_PREFERRED_ORGANIZATION_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleSetOrganizationId = (orgIdArg: string) => {
    setPreferredOrganization({
      variables: {
        orgId: orgIdArg,
      },
    });

    setPreferredOrgIdOnContext(orgIdArg);
  };

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
        </CircleEditButtonSmall>
      }
      direction={"left"}
    >
      <StyledBasicItem onClick={() => handleSetOrganizationId(orgId)}>
        {t("organizations.setDefaultOrganization")}
      </StyledBasicItem>

      <MenuDivider />

      <StyledBasicItemRed onClick={() => alert("Not hooked up yet")}>
        {t("organizations.removeOrganization")}
      </StyledBasicItemRed>
    </StyledBasicMenu>
  );
};
