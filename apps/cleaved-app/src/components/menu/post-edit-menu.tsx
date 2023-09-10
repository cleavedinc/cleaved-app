import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { CircleEditButtonSmall, EllipsisHorizontalIcon, FONT_SIZES, Modal, PushPinOutlineIcon } from "@cleaved/ui";

import { AreYouSureModal } from "../../components";
import { PostsContext, PostFormContext } from "../../contexts";
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
import { POST_PROJECT_PIN_MUTATION, POST_PROJECT_PIN_REMOVE_MUTATION } from "./gql";

import "@szhsin/react-menu/dist/index.css";

type PostEditMenuProps = {
  isPinned: boolean;
  postId: string;
  showPinnedMenuButton?: boolean;
};

const StyledPushPinOutlineIcon = styled(PushPinOutlineIcon)`
  ${basicItemIconBase};
`;

export const PostEditMenu: FunctionComponent<PostEditMenuProps> = (props) => {
  const { showPinnedMenuButton, isPinned, postId } = props;
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const { projectPostFormIsDirty, setProjectPostFormImageUploadIsDirty } = useContext(PostFormContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const [isPostEditFormModalOpen, setIsPostEditFormModalOpen] = useState(false);
  const [closeRequested, setCloseRequested] = useState(false);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);
  const theme = useTheme();

  const { t } = useTranslator();

  // Remove post
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

  // pin post
  const [postProjectPin] = useMutation(POST_PROJECT_PIN_MUTATION, {
    onCompleted: () => {
      if (postProjectSeekRefetch) {
        postProjectSeekRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handlePostProjectPin = (postIdArg: string) => {
    postProjectPin({
      variables: {
        organizationId,
        postId: postIdArg,
      },
    });
  };

  // remove pin post
  const [postProjectPinRemove] = useMutation(POST_PROJECT_PIN_REMOVE_MUTATION, {
    onCompleted: () => {
      if (postProjectSeekRefetch) {
        postProjectSeekRefetch();
      }
    },
    onError: (error) => {
      logQueryError(error);
    },
  });

  const handlePostProjectPinRemove = (postIdArg: string) => {
    postProjectPinRemove({
      variables: {
        organizationId,
        postId: postIdArg,
      },
    });
  };

  const [isAreYouSureModalOpen, setIsAreYouSureModalOpen] = useState(false);

  const handleConfirmAction = () => {
    setIsAreYouSureModalOpen(false);
    setIsPostEditFormModalOpen(false);

    /**
     * The way images are set on the post modal makes the imageupload dirty.
     * settig setProjectPostFormImageUploadIsDirty to false ensures teh context is reset for future use.
     * I know this needs refactoring. Choosing not to do it at this time.
     * this is also set in the useEffect()
     **/
    setProjectPostFormImageUploadIsDirty(false);
  };

  useEffect(() => {
    if (closeRequested) {
      if (projectPostFormIsDirty) {
        setIsAreYouSureModalOpen(true);
      }

      if (!projectPostFormIsDirty) {
        setIsPostEditFormModalOpen(false);

        /**
         * The way images are set on the post modal makes the imageupload dirty.
         * settig setProjectPostFormImageUploadIsDirty to false ensures teh context is reset for future use.
         * I know this needs refactoring. Choosing not to do it at this time.
         * this is also set in the handleConfirmAction()
         **/
        setProjectPostFormImageUploadIsDirty(false);
      }

      setCloseRequested(false);
    }
  }, [projectPostFormIsDirty, closeRequested]);

  const areYouSureConfirmButtonText = t("post.areYouSureDiscardPostButtonText")
    ? t("post.areYouSureDiscardPostButtonText")
    : undefined;
  const areYouSureRejectButtonText = t("post.areYouSureKeepPostButtonText")
    ? t("post.areYouSureKeepPostButtonText")
    : undefined;
  const areYouSureDiscardPostModalText = t("post.areYouSureDiscardPostModalText")
    ? t("post.areYouSureDiscardPostModalText")
    : undefined;
  const areYouSureDiscardPostModalTitle = t("post.areYouSureDiscardPostModalTitle")
    ? t("post.areYouSureDiscardPostModalTitle")
    : undefined;

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

  const editPostButton = t("post.editPost") ? t("post.editPost") : undefined;

  return (
    <>
      <StyledBasicMenu
        arrow={true}
        menuButton={
          <CircleEditButtonSmall type="button" aria-label={editPostButton}>
            <EllipsisHorizontalIcon color={theme.colors.baseIcon_color} />
          </CircleEditButtonSmall>
        }
        direction={"left"}
      >
        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          <StyledDeleteIcon color={theme.colors.always_red_color} iconSize={FONT_SIZES.LARGE} />
          {t("post.removePost")}
        </StyledBasicItemRed>

        {showPinnedMenuButton && !isPinned && (
          <StyledBasicItem onClick={() => handlePostProjectPin(postId)}>
            <StyledPushPinOutlineIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />

            {t("post.pinPost")}
          </StyledBasicItem>
        )}

        {showPinnedMenuButton && isPinned && (
          <StyledBasicItem onClick={() => handlePostProjectPinRemove(postId)}>
            <StyledPushPinOutlineIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
            {t("post.unpinPost")}
          </StyledBasicItem>
        )}

        <StyledBasicItem onClick={() => setIsPostEditFormModalOpen(true)}>
          <StyledEditIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
          {t("post.editPost")}
        </StyledBasicItem>
      </StyledBasicMenu>

      <Modal open={isPostEditFormModalOpen} onCloseRequested={() => setCloseRequested(true)} title={editProjectPost}>
        <ProjectPostForm closeForm={() => setCloseRequested(true)} postId={postId} />
      </Modal>

      {/* discard text changes gaurd */}
      <AreYouSureModal
        areYouSureConfirmButtonText={areYouSureConfirmButtonText}
        areYouSureRejectButtonText={areYouSureRejectButtonText}
        areYouSureDescription={areYouSureDiscardPostModalText}
        areYouSureTitle={areYouSureDiscardPostModalTitle}
        handleConfirmAction={handleConfirmAction}
        isAreYouSureModalOpen={isAreYouSureModalOpen}
        setIsAreYouSureModalOpen={setIsAreYouSureModalOpen}
      />

      {/* delete post gaurd */}
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
