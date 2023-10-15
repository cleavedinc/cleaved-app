import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, OrganizationSeekMembersQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import {
  StyledBasicItemRed,
  StyledBasicMenu,
  StyledTrashIcon,
  StyledEditIcon,
  StyledMenuRadioGroupNoBorder,
  StyledRadioGroupBasicItem,
  StyledSubMenu,
} from "./components";
import { ORGANIZATION_REMOVE_USER_MUTATION, ORGANIZATION_SET_USER_PERMISSION_LEVEL_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type PeopleEditMenuProps = {
  member: OrganizationSeekMembersQuery["organizationSeekMembers"][0];
  organizationSeekMembersDataRefetch?: () => void;
};

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

  const editPermissionButton = t("people.editPermission") ? t("people.editPermission") : undefined;

  const EditUserPermissionLabel = () => (
    <>
      <StyledEditIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
      {t("people.editPermission")}
    </>
  );

  return (
    <>
      <StyledBasicMenu
        arrow={true}
        menuButton={
          <CircleEditButtonSmall type="button" aria-label={editPermissionButton}>
            <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        {hasPermission && (
          <>
            <StyledSubMenu arrow={true} label={EditUserPermissionLabel}>
              <StyledMenuRadioGroupNoBorder
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
                <StyledRadioGroupBasicItem type="radio" value={OrgPermissionLevel.Viewer}>
                  <StyledPermission>{OrgPermissionLevel.Viewer}</StyledPermission>
                </StyledRadioGroupBasicItem>

                <StyledRadioGroupBasicItem type="radio" value={OrgPermissionLevel.Updater}>
                  <StyledPermission>{OrgPermissionLevel.Updater}</StyledPermission>
                </StyledRadioGroupBasicItem>

                <StyledRadioGroupBasicItem type="radio" value={OrgPermissionLevel.Admin}>
                  <StyledPermission>{OrgPermissionLevel.Admin}</StyledPermission>
                </StyledRadioGroupBasicItem>
              </StyledMenuRadioGroupNoBorder>
            </StyledSubMenu>
          </>
        )}

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          <StyledTrashIcon color={theme.colors.always_red_color} iconSize={FONT_SIZES.LARGE} />
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
