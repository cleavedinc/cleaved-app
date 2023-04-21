import React, { FunctionComponent, useContext } from "react";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useMutation } from "@apollo/react-hooks";
import styled, { css } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { SET_PREFERRED_ORGANIZATION_MUTATION } from "../../gql-mutations";

import "@szhsin/react-menu/dist/index.css";

type OrganizationEditMenuProps = {
  orgId: string;
};

const basicItemBase = css`
  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicItem = styled(MenuItem)`
  ${basicItemBase}
`;

const StyledBasicItemRed = styled(MenuItem)`
  ${basicItemBase}

  :hover {
    color: ${COLORS.RED_500};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${COLORS.BLACK};
  }
`;

export const OrganizationEditMenu: FunctionComponent<OrganizationEditMenuProps> = (props) => {
  const { orgId } = props;
  const { t } = useTranslator();
  const { setPreferredOrgIdOnContext } = useContext(authTokenContext);

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
          <EllipsisHorizontalIcon />
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
