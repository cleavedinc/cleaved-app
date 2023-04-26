import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuDivider, MenuItem, MenuRadioGroup, SubMenu } from "@szhsin/react-menu";
import styled, { css } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import {
  ButtonPrimary,
  ButtonSecondary,
  CircleEditButtonSmall,
  COLORS,
  EllipsisHorizontalIcon,
  Modal,
  SPACING,
} from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { ORGANIZATION_REMOVE_USER_MUTATION, ORGANIZATION_SET_USER_PERMISSION_LEVEL_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type TeamsEditMenuProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
};

const basicItemBase = css`
  :hover {
    background-color: ${COLORS.GRAY_50};
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
    color: ${COLORS.RED_500};
  }
`;

const StyledBasicMenu = styled(Menu)`
  ul {
    color: ${COLORS.BLACK};
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

const StyledPermission = styled.div`
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const TeamsEditMenu: FunctionComponent<TeamsEditMenuProps> = (props) => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const { member, organizationSeekMembersDataRefetch } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
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

  const areYouSureRemovePost = t("teams.areYouSureRemoveMemberModalHeader")
    ? t("teams.areYouSureRemoveMemberModalHeader")
    : undefined;

  return (
    <>
      <StyledBasicMenu
        menuButton={
          <CircleEditButtonSmall type="button">
            <EllipsisHorizontalIcon color={COLORS.GRAY_500} />
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
          {t("teams.removeProfessional")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      {/* // Remove user are you sure modal */}
      <Modal
        open={isConfirmRemoveModalOpen}
        onCloseRequested={() => setIsConfirmRemoveModalOpen(false)}
        title={areYouSureRemovePost}
      >
        <StyledActionText>{t("teams.areYouSureRemoveMemberModalText")}</StyledActionText>

        <StyledActionWrapper>
          <ButtonSecondary
            type="button"
            onClick={() =>
              organizationRemoveUser({
                variables: {
                  organizationId: preferredOrgId,
                  userId: member.id,
                },
              })
            }
          >
            {t("teams.areYouSureRemoveButtonText")}
          </ButtonSecondary>

          <StyledButtonPrimary type="button" onClick={() => setIsConfirmRemoveModalOpen(false)}>
            {t("teams.areYouSureKeepButtonText")}
          </StyledButtonPrimary>
        </StyledActionWrapper>
      </Modal>
    </>
  );
};
