import React, { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import {
  ButtonPrimary,
  ButtonSecondary,
  CircleEditButtonSmall,
  EllipsisHorizontalIcon,
  Modal,
  SPACING,
} from "@cleaved/ui";

import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";

import { REMOVE_ORGANIZATION_SHARE_LINK_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type ShareLinkEditMenuProps = {
  refetchSharelinkData: () => void;
  shareLinkPermission: OrgPermissionLevel;
};

const StyledBasicItem = styled(MenuItem)`
  :hover {
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledBasicItemRed = styled(MenuItem)`
  :hover {
    color: ${({ theme }) => theme.colors.baseAlert_color}
    background-color: ${({ theme }) => theme.colors.baseButtonAndIcon_backgroundColorHover};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${({ theme }) => theme.colors.baseText_color};
  }
`;

const StyledActionWrapper = styled.div`
  display: flex;
  padding: ${SPACING.XXLARGE} 0 0;
`;

const StyledActionText = styled.div``;

const StyledButtonPrimary = styled(ButtonPrimary)`
  display: flex;
  margin-left: auto;
`;

export const ShareLinkEditMenu: FunctionComponent<ShareLinkEditMenuProps> = (props) => {
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const { refetchSharelinkData, shareLinkPermission } = props;
  const shareLinkPermissionText = shareLinkPermission.toLowerCase();
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();
  const { t } = useTranslator();

  const [generateOrganizationShareLink] = useMutation(GENERATE_ORGANIZATION_SHARE_LINK_MUTATION, {
    onCompleted: () => {
      if (refetchSharelinkData) {
        refetchSharelinkData();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const [removeOrganizationShareLink] = useMutation(REMOVE_ORGANIZATION_SHARE_LINK_MUTATION, {
    onCompleted: () => {
      if (refetchSharelinkData) {
        refetchSharelinkData();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleRemoveOrganizationShareLink = () => {
    removeOrganizationShareLink({
      variables: {
        organizationId,
        permission: shareLinkPermission,
      },
    });
  };

  const areYouSureRemoveOrganiationSharelink = t("shareLinks.areYouSureRemoveSharelinkModalHeader")
    ? t("shareLinks.areYouSureRemoveSharelinkModalHeader")
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
        <StyledBasicItem
          onClick={() =>
            generateOrganizationShareLink({
              variables: {
                organizationId,
                permission: shareLinkPermission,
              },
            })
          }
        >
          {t("shareLinks.editMenuGenerateNewShareLink", { shareLinkPermission: shareLinkPermissionText })}
        </StyledBasicItem>

        <MenuDivider />

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("shareLinks.editMenuRemoveShareLink", { shareLinkPermission: shareLinkPermissionText })}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      <Modal
        open={isConfirmRemoveModalOpen}
        onCloseRequested={() => setIsConfirmRemoveModalOpen(false)}
        title={areYouSureRemoveOrganiationSharelink}
      >
        <StyledActionText>{t("shareLinks.areYouSureRemoveSharelinkModalText")}</StyledActionText>

        <StyledActionWrapper>
          <ButtonSecondary type="button" onClick={() => handleRemoveOrganizationShareLink()}>
            {t("shareLinks.areYouSureRemoveButtonText")}
          </ButtonSecondary>

          <StyledButtonPrimary type="button" onClick={() => setIsConfirmRemoveModalOpen(false)}>
            {t("shareLinks.areYouSureKeepButtonText")}
          </StyledButtonPrimary>
        </StyledActionWrapper>
      </Modal>
    </>
  );
};
