import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuDivider, MenuItem, MenuRadioGroup, SubMenu } from "@szhsin/react-menu";
import styled, { css, useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, CircleEditButtonSmall, EllipsisHorizontalIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { ORGANIZATION_REMOVE_USER_MUTATION, ORGANIZATION_SET_USER_PERMISSION_LEVEL_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type PeopleEditMenuProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
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

const StyledSubMenu = styled(SubMenu)`
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

const StyledPermission = styled.div`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const PeopleEditMenu: FunctionComponent<PeopleEditMenuProps> = (props) => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const { member, organizationSeekMembersDataRefetch } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();
  const { t } = useTranslator();

  const [organizationRemoveUser] = useMutation(ORGANIZATION_REMOVE_USER_MUTATION, {
    onCompleted: () => {
      if (organizationSeekMembersDataRefetch) {
        organizationSeekMembersDataRefetch();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const [organizationSetUserPermissionLevel] = useMutation(ORGANIZATION_SET_USER_PERMISSION_LEVEL_MUTATION, {
    onCompleted: () => {
      if (organizationSeekMembersDataRefetch) {
        organizationSeekMembersDataRefetch();
      }
    },

    onError: (error) => {
      logQueryError(error);
    },
  });

  const handleOrganizationRemoveUser = () => {
    organizationRemoveUser({
      variables: {
        organizationId: preferredOrgId,
        userId: member.id,
      },
    });
  };

  const areYouSureKeepButtonText = t("people.areYouSureKeepButtonText")
    ? t("people.areYouSureKeepButtonText")
    : undefined;

  const areYouSureRemoveButtonText = t("people.areYouSureRemoveButtonText")
    ? t("people.areYouSureRemoveButtonText")
    : undefined;

  const areYouSureRemoveMemberModalText = t("people.areYouSureRemoveMemberModalText")
    ? t("people.areYouSureRemoveMemberModalText")
    : undefined;

  const areYouSureRemovePost = t("people.areYouSureRemoveMemberModalHeader")
    ? t("people.areYouSureRemoveMemberModalHeader")
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
        {hasPermission && (
          <>
            <StyledSubMenu label="Edit Permission">
              <MenuRadioGroup
                value={member.permissionInOrg}
                onRadioChange={(e) =>
                  organizationSetUserPermissionLevel({
                    variables: {
                      organizationId: preferredOrgId,
                      userId: member.id,
                      permissionLevel: e.value,
                    },
                  })
                }
              >
                <StyledBasicItem type="radio" value={OrgPermissionLevel.Viewer}>
                  <StyledPermission>{OrgPermissionLevel.Viewer}</StyledPermission>
                </StyledBasicItem>

                <StyledBasicItem type="radio" value={OrgPermissionLevel.Updater}>
                  <StyledPermission>{OrgPermissionLevel.Updater}</StyledPermission>
                </StyledBasicItem>

                <StyledBasicItem type="radio" value={OrgPermissionLevel.Admin}>
                  <StyledPermission>{OrgPermissionLevel.Admin}</StyledPermission>
                </StyledBasicItem>
              </MenuRadioGroup>
            </StyledSubMenu>

            <MenuDivider />
          </>
        )}

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("people.removeProfessional")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      <AreYouSureModal
        areYouSureConfirmButtonText={areYouSureRemoveButtonText}
        areYouSureRejectButtonText={areYouSureKeepButtonText}
        areYouSureDescription={areYouSureRemoveMemberModalText}
        areYouSureTitle={areYouSureRemovePost}
        handleConfirmAction={() => handleOrganizationRemoveUser()}
        isAreYouSureModalOpen={isConfirmRemoveModalOpen}
        setIsAreYouSureModalOpen={setIsConfirmRemoveModalOpen}
      />
    </>
  );
};
