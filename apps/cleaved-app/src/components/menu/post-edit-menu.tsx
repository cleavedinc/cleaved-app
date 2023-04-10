import React, { FunctionComponent, useContext, useState } from "react";
import { Menu, MenuDivider, MenuItem } from "@szhsin/react-menu";
import { useMutation } from "@apollo/react-hooks";
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

import { PostsContext } from "../../contexts";
import { ProjectPostForm } from "../../forms";
import { useRouteParams, useTranslator } from "../../hooks";
import { POST_PROJECT_REMOVE_MUTATION } from "../../gql-mutations";

import "@szhsin/react-menu/dist/index.css";

type PostEditMenuProps = {
  postId: string;
};

const basicItemBase = css`
  :hover {
    background-color: ${COLORS.GRAY_50};
  }
`;

const StyledBasicItem = styled(MenuItem)`
  ${basicItemBase}
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

export const PostEditMenu: FunctionComponent<PostEditMenuProps> = (props) => {
  const { postId } = props;
  const { postProjectSeekRefetch } = useContext(PostsContext);
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const [isPostEditFormModalOpen, setIsPostEditFormModalOpen] = useState(false);
  const [isConfirmRemoveModalOpen, setIsConfirmRemoveModalOpen] = useState(false);

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
  const areYouSureRemovePost = t("post.areYouSureRemovePostModalHeader")
    ? t("post.areYouSureRemovePostModalHeader")
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
        <StyledBasicItem onClick={() => setIsPostEditFormModalOpen(true)}>{t("post.editPost")}</StyledBasicItem>

        <MenuDivider />

        <StyledBasicItemRed onClick={() => setIsConfirmRemoveModalOpen(true)}>
          {t("post.removePost")}
        </StyledBasicItemRed>
        {/* <StyledBasicItemRed onClick={() => handlePostProjectRemove(postId)}>{t("post.removePost")}</StyledBasicItemRed> */}
      </StyledBasicMenu>

      <Modal
        open={isPostEditFormModalOpen}
        onCloseRequested={() => setIsPostEditFormModalOpen(false)}
        title={editProjectPost}
      >
        <ProjectPostForm closeForm={() => setIsPostEditFormModalOpen(false)} postId={postId} />
      </Modal>

      <Modal
        open={isConfirmRemoveModalOpen}
        onCloseRequested={() => setIsConfirmRemoveModalOpen(false)}
        title={areYouSureRemovePost}
      >
        <StyledActionText>{t("post.areYouSureRemovePostModalText")}</StyledActionText>

        <StyledActionWrapper>
          <ButtonSecondary type="button" onClick={() => alert("NOT HOOKED UP YET")}>
            {t("post.areYouSureRemoveButtonText")}
          </ButtonSecondary>

          <StyledButtonPrimary type="button" onClick={() => setIsConfirmRemoveModalOpen(false)}>
            {t("post.areYouSureKeepButtonText")}
          </StyledButtonPrimary>
        </StyledActionWrapper>
      </Modal>
    </>
  );
};
