import React, { FunctionComponent, useContext, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES, Modal, PushPinOutlineIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { PostsContext } from "../../contexts";
import { ProjectPostForm } from "../../forms";
import { useRouteParams, useTranslator } from "../../hooks";
import { POST_PROJECT_REMOVE_MUTATION } from "../../gql-mutations";

import {
  basicItemIconBase,
  StyledBasicItem,
  StyledBasicItemRed,
  StyledBasicMenu,
  StyledDeleteIcon,
  StyledEditIcon,
} from "./components";

import "@szhsin/react-menu/dist/index.css";

type PostEditMenuProps = {
  postId: string;
};

const StyledPushPinOutlineIcon = styled(PushPinOutlineIcon)`
  ${basicItemIconBase};
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
        arrow={true}
        menuButton={
          <CircleEditButtonSmall type="button">
            <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          <StyledDeleteIcon color={theme.colors.always_red_color} iconSize={FONT_SIZES.LARGE} />
          {t("post.removePost")}
        </StyledBasicItemRed>

        <StyledBasicItem onClick={() => alert("not hooked up yet")}>
          <StyledPushPinOutlineIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />

          {t("post.pinPost")}
        </StyledBasicItem>

        <StyledBasicItem onClick={() => setIsPostEditFormModalOpen(true)}>
          <StyledEditIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
          {t("post.editPost")}
        </StyledBasicItem>
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
