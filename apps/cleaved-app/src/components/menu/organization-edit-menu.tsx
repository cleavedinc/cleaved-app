import React, { FunctionComponent, useContext, useState } from "react";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useMutation } from "@apollo/react-hooks";
import styled, { css, useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import {
  BORDERS,
  ButtonPrimary,
  ButtonSecondary,
  CircleEditButtonSmall,
  EllipsisHorizontalIcon,
  mediaQueries,
  Modal,
  SPACING,
} from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { useTranslator } from "../../hooks";

import { ORGANIZATION_REMOVE_ME_MUTATION, SET_PREFERRED_ORGANIZATION_MUTATION } from "../../gql-mutations";

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

const StyledActionWrapper = styled.div`
  display: flex;
  padding: ${SPACING.XXLARGE} 0 0;
`;

const StyledActionText = styled.div``;

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

const StyledButtonPrimary = styled(ButtonPrimary)`
  display: flex;
  margin-left: auto;
`;

const StyledButtonSecondary = styled(ButtonSecondary)`
  width: 150px;

  ${mediaQueries.XS_LANDSCAPE} {
    width: initial;
  }
`;

export const OrganizationEditMenu: FunctionComponent<OrganizationEditMenuProps> = (props) => {
  const { orgId } = props;
  const { logOut, setPreferredOrgIdOnContext } = useContext(authTokenContext);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();
  const { t } = useTranslator();

  const [organizationRemoveMe] = useMutation(ORGANIZATION_REMOVE_ME_MUTATION, {
    onCompleted: () => {
      logOut();
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const [setPreferredOrganization] = useMutation(SET_PREFERRED_ORGANIZATION_MUTATION, {
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleOrganizationRemoveMe = (orgIdArg: string) => {
    organizationRemoveMe({
      variables: {
        organizationId: orgIdArg,
      },
    });
  };

  const handleSetOrganizationId = (orgIdArg: string) => {
    setPreferredOrganization({
      variables: {
        orgId: orgIdArg,
      },
    });

    setPreferredOrgIdOnContext(orgIdArg);
  };

  const areYouSureRemoveMeFromOrganization = t("organizations.areYouSureRemoveMeFromOrganizationTitle")
    ? t("organizations.areYouSureRemoveMeFromOrganizationTitle")
    : undefined;

  return (
    <>
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

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("organizations.removeOrganization")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      <Modal
        open={isConfirmRemoveModalOpen}
        onCloseRequested={() => setIsConfirmRemoveModalOpen(false)}
        title={areYouSureRemoveMeFromOrganization}
      >
        <StyledActionText>{t("organizations.areYouSureRemoveMeFromOrganizationDetails")}</StyledActionText>

        <StyledActionWrapper>
          <StyledButtonSecondary type="button" onClick={() => handleOrganizationRemoveMe(orgId)}>
            {t("organizations.areYouSureRemoveButtonText")}
          </StyledButtonSecondary>

          <StyledButtonPrimary type="button" onClick={() => setIsConfirmRemoveModalOpen(false)}>
            {t("organizations.areYouSureKeepButtonText")}
          </StyledButtonPrimary>
        </StyledActionWrapper>
      </Modal>
    </>
  );
};
