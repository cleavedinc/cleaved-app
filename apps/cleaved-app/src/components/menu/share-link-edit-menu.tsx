import React, { FunctionComponent } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, COLORS, EllipsisHorizontalIcon } from "@cleaved/ui";

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
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicItemRed = styled(MenuItem)`
  :hover {
    color: ${COLORS.RED_500};
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${COLORS.BLACK};
  }
`;

export const ShareLinkEditMenu: FunctionComponent<ShareLinkEditMenuProps> = (props) => {
  const { t } = useTranslator();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const { refetchSharelinkData, shareLinkPermission } = props;
  const shareLinkPermissionText = shareLinkPermission.toLowerCase();

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

  return (
    <StyledBasicMenu
      menuButton={
        <CircleEditButtonSmall type="button">
          <EllipsisHorizontalIcon />
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

      <StyledBasicItemRed
        onClick={() =>
          removeOrganizationShareLink({
            variables: {
              organizationId,
              permission: shareLinkPermission,
            },
          })
        }
      >
        {t("shareLinks.editMenuRemoveShareLink", { shareLinkPermission: shareLinkPermissionText })}
      </StyledBasicItemRed>
    </StyledBasicMenu>
  );
};
