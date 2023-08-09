import React, { FunctionComponent, useContext, useState } from "react";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useMutation } from "@apollo/react-hooks";
import styled, { css, useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { BORDERS, ButtonPrimary, CircleEditButtonSmall, EllipsisHorizontalIcon, Modal, SPACING } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { PostsContext } from "../../contexts";
import { ProjectPostForm } from "../../forms";
import { useRouteParams, useTranslator } from "../../hooks";
import { POST_PROJECT_REMOVE_MUTATION } from "../../gql-mutations";

import "@szhsin/react-menu/dist/index.css";

type PostEditMenuProps = {
  postId: string;
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

const StyledActionWrapper = styled.div`
  display: flex;
  padding: ${SPACING.XXLARGE} 0 0;
`;

const StyledActionText = styled.div``;

const StyledButtonPrimary = styled(ButtonPrimary)`
  display: flex;
  margin-left: auto;
`;

export const PostEditMenu: FunctionComponent<PostEditMenuProps> = (props) => {
  const { postId } = props;
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const [isPostEditFormModalOpen, setIsPostEditFormModalOpen] = useState(false);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();

  const { t } = useTranslator();

  const [postProjectRemove] = useMutation(POST_PROJECT_REMOVE_MUTATION, {
    onCompleted: () => {
      if (postProjectSeekRefetch) {
        postProjectSeekRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handlePostProjectRemove = (postIdArg: string) => {
    postProjectRemove({
      variables: {
        organizationId,
        postId: postIdArg,
      },
    });
  };

  const editProjectPost = t("post.editProjectPost") ? t("post.editProjectPost") : undefined;

  const areYouSureKeepButtonText = t("post.areYouSureKeepButtonText") ? t("post.areYouSureKeepButtonText") : undefined;

  const areYouSureRemoveButtonText = t("post.areYouSureRemoveButtonText")
    ? t("post.areYouSureRemoveButtonText")
    : undefined;

  const areYouSureRemovePost = t("post.areYouSureRemovePostModalHeader")
    ? t("post.areYouSureRemovePostModalHeader")
    : undefined;

  const areYouSureRemovePostModalText = t("post.areYouSureRemovePostModalText")
    ? t("post.areYouSureRemovePostModalText")
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
        <StyledBasicItem onClick={() => setIsPostEditFormModalOpen(true)}>{t("post.editPost")}</StyledBasicItem>

        <MenuDivider />

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("post.removePost")}
        </StyledBasicItemRed>
      </StyledBasicMenu>

      <Modal
        open={isPostEditFormModalOpen}
        onCloseRequested={() => setIsPostEditFormModalOpen(false)}
        title={editProjectPost}
      >
        <ProjectPostForm closeForm={() => setIsPostEditFormModalOpen(false)} postId={postId} />
      </Modal>

      <AreYouSureModal
        areYouSureConfirmButtonText={areYouSureRemoveButtonText}
        areYouSureRejectButtonText={areYouSureKeepButtonText}
        areYouSureDescription={areYouSureRemovePostModalText}
        areYouSureTitle={areYouSureRemovePost}
        handleConfirmAction={() => handlePostProjectRemove(postId)}
        isAreYouSureModalOpen={isConfirmRemoveModalOpen}
        setIsAreYouSureModalOpen={setIsConfirmRemoveModalOpen}
      />
    </>
  );
};
