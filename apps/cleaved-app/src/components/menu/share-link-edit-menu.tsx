import React, { FunctionComponent, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES, RefreshIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { GENERATE_ORGANIZATION_SHARE_LINK_MUTATION } from "../../gql-mutations";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useRouteParams, useTranslator } from "../../hooks";

import {
  basicItemIconBase,
  StyledBasicItem,
  StyledBasicItemRed,
  StyledBasicMenu,
  StyledDeleteIcon,
} from "./components";
import { REMOVE_ORGANIZATION_SHARE_LINK_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type ShareLinkEditMenuProps = {
  refetchSharelinkData: (() => void) | undefined;
  shareLinkPermission: OrgPermissionLevel;
};

const StyledRefreshIconIcon = styled(RefreshIcon)`
  ${basicItemIconBase};
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
        arrow={true}
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
          <StyledRefreshIconIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
          {t("shareLinks.editMenuGenerateNewShareLink", { shareLinkPermission: shareLinkPermissionText })}
        </StyledBasicItem>

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          <StyledDeleteIcon color={theme.colors.always_red_color} iconSize={FONT_SIZES.LARGE} />
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
