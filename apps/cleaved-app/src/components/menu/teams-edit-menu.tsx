import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Menu, MenuItem } from "@szhsin/react-menu";
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
import { useTranslator } from "../../hooks";

import { ORGANIZATION_REMOVE_USER_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type TeamsEditMenuProps = {
  member: {
    id: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    currentAvatar?: string | null | undefined;
  };
  organizationSeekMembersDataRefetch?: () => void;
};

const basicItemBase = css`
  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicItemRed = styled(MenuItem)`
  ${basicItemBase}
  color: ${COLORS.RED_500};
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

export const TeamsEditMenu: FunctionComponent<TeamsEditMenuProps> = (props) => {
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

  const areYouSureRemovePost = t("teams.areYouSureRemoveMemberModalHeader")
    ? t("teams.areYouSureRemoveMemberModalHeader")
    : undefined;

  return (
    <>
      <StyledBasicMenu
        menuButton={
          <CircleEditButtonSmall>
            <EllipsisHorizontalIcon />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("teams.removeProfessional")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

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
