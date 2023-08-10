import React, { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import styled, { css, useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, CircleEditButtonSmall, EllipsisHorizontalIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";

import { REMOVE_ORGANIZATION_SHARE_LINK_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type ShareLinkEditMenuProps = {
  refetchSharelinkData: () => void;
  shareLinkPermission: OrgPermissionLevel;
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

  const areYouSureKeepButtonText = t("shareLinks.areYouSureKeepButtonText")
    ? t("shareLinks.areYouSureKeepButtonText")
    : undefined;

  const areYouSureRemoveSharelinkModalText = t("shareLinks.areYouSureRemoveSharelinkModalText")
    ? t("shareLinks.areYouSureRemoveSharelinkModalText")
    : undefined;

  const areYouSureRemoveButtonText = t("shareLinks.areYouSureRemoveButtonText")
    ? t("shareLinks.areYouSureRemoveButtonText")
    : undefined;

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

      <AreYouSureModal
        areYouSureConfirmButtonText={areYouSureRemoveButtonText}
        areYouSureRejectButtonText={areYouSureKeepButtonText}
        areYouSureDescription={areYouSureRemoveSharelinkModalText}
        areYouSureTitle={areYouSureRemoveOrganiationSharelink}
        handleConfirmAction={() => handleRemoveOrganizationShareLink()}
        isAreYouSureModalOpen={isConfirmRemoveModalOpen}
        setIsAreYouSureModalOpen={setIsConfirmRemoveModalOpen}
      />
    </>
  );
};
