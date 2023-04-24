import React, { FunctionComponent, useContext, useState } from "react";
import { Link } from "@reach/router";
import { PhotoProvider, PhotoView } from "react-photo-view";
import styled from "styled-components";

import { BORDERS, BoxNoPadding, COLORS, FONT_SIZES, FONT_WEIGHTS, RADIUS, SPACING, SPACING_PX } from "@cleaved/ui";

import { PostReactions, ReactionTypesAndTotalCount } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

import { CommentsList } from "../comments/comments-list";

import { ModalPostComments } from "./modal-post-comments";
import { PostProjectComment } from "./post-project-comment";
import { PostProjectHeader } from "./post-project-header";

import "react-photo-view/dist/react-photo-view.css";

type PostProps = {
  post: PostProjectSeekQuery["postProjectSeek"][0];
};

const StyledProjectPostBox = styled(BoxNoPadding)``;

const StyledMessage = styled.div`
  margin-bottom: ${SPACING.SMALL};
  overflow-wrap: anywhere;
  margin: 0 ${SPACING.SMALL};
  white-space: pre-line;
`;

const StyledPostComments = styled.span`
  text-transform: lowercase;
`;

const StyledPostInfoBar = styled.div`
  color: ${COLORS.GRAY_500};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledmodalPostFooter = styled.div<{ postRepliesCount: string }>`
  align-items: flex-start;
  border-top: ${BORDERS.BORDER_PRIMARY};
  display: flex;
  padding: 5px 0;
  margin-bottom: ${(props) => (props.postRepliesCount !== "0" ? SPACING.LARGE : "0")};
`;

const StyledPostFooter = styled.div`
  align-items: flex-start;
  border-top: ${BORDERS.BORDER_PRIMARY};
  display: flex;
`;

const StyledPostImage = styled.img`
  cursor: pointer;
  display: block;
  height: 100%;
  object-position: top left;
  object-fit: cover;
  width: 100%;

  :not(:first-child) {
    border: ${BORDERS.BORDER_PRIMARY};
  }
`;

const StyledPostImageMultiple = styled.img`
  border: ${BORDERS.BORDER_PRIMARY};
  cursor: pointer;
  height: 75px;
  width: 75px;

  :not(:last-child) {
    margin-right: ${SPACING_PX.ONE};
  }
`;

const StyledPostImageWrapper = styled.div``;

const StyledPostInfoBarCommentCount = styled.div`
  cursor: pointer;
  margin: ${SPACING.SMALL} ${SPACING.SMALL} ${SPACING.SMALL} auto;

  :hover {
    text-decoration: underline;
  }
`;

const StyledProjectNameLink = styled(Link)`
  color: ${COLORS.BLACK};
  display: inline-block;
  font-size: ${FONT_SIZES.XXSMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  margin: ${SPACING.XLARGE} ${SPACING.SMALL} ${SPACING.SMALL};
  text-transform: uppercase;
`;

const StyledToolbarPostInfo = styled.div`
  font-size: ${FONT_SIZES.SMALL};
`;

export const Post: FunctionComponent<PostProps> = (props) => {
  const { post } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [triggerGetComments, setTriggerGetComments] = useState(0);
  const { t } = useTranslator();

  const basicImageAlt = t("post.postImageBasicAlt") ? t("post.postImageBasicAlt") : "";

  const handleShowCommentsmodal = () => {
    setIsCommentsVisible(true);
  };

  const postFooterContent = (
    <>
      <PostReactions myReaction={post.myReaction} postId={post.id} />

      <PostProjectComment
        showComments={() => {
          handleShowCommentsmodal();
        }}
      />
    </>
  );

  const postContent = (
    <>
      {post && (
        <PostProjectHeader
          account={post.account}
          accountId={post.accountId}
          date={new Date(post.date).toLocaleDateString()}
          isPostOpenInModal={isCommentsVisible}
          postId={post.id}
        />
      )}
      <StyledMessage>{post.body}</StyledMessage>
      <StyledProjectNameLink
        to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${post.project.id}${routeConstantsCleavedApp.projectBoard.route}`}
        title={post.project.name}
      >
        {post.project.name}
      </StyledProjectNameLink>
      {post.images && post.images.length > 0 && (
        <StyledPostImageWrapper>
          {post.images.length === 1 && (
            <PhotoView key={"1"} src={`${process.env.MEDIA_ENDPOINT}/${post.images[0]}`}>
              <StyledPostImage src={`${process.env.MEDIA_ENDPOINT}/${post.images[0]}`} alt={basicImageAlt} />
            </PhotoView>
          )}

          {post.images.length > 1 &&
            post.images.map((image, index) => {
              // handle the first image in the array (large format)
              if (index === 0) {
                return (
                  <PhotoView key={index} src={`${process.env.MEDIA_ENDPOINT}/${image}`}>
                    <StyledPostImage src={`${process.env.MEDIA_ENDPOINT}/${image}`} alt={basicImageAlt} />
                  </PhotoView>
                );
              }

              // handle remaining images as thumbnails
              if (index !== 0) {
                return (
                  <PhotoView key={index} src={`${process.env.MEDIA_ENDPOINT}/${image}`}>
                    <StyledPostImageMultiple src={`${process.env.MEDIA_ENDPOINT}/${image}`} alt={basicImageAlt} />
                  </PhotoView>
                );
              }
            })}
        </StyledPostImageWrapper>
      )}

      <StyledPostInfoBar>
        {post.reactionTotalCount !== "0" && (
          <ReactionTypesAndTotalCount
            reactionsExpressed={post.reactionsExpressed}
            reactionTotalCount={post.reactionTotalCount}
          />
        )}
        {post.repliesCount !== "0" && (
          <StyledPostInfoBarCommentCount onClick={() => handleShowCommentsmodal()}>
            {post.repliesCount}{" "}
            <StyledPostComments>
              {post.repliesCount === "1" ? t("post.comment") : t("post.comments")}
            </StyledPostComments>
          </StyledPostInfoBarCommentCount>
        )}
      </StyledPostInfoBar>
    </>
  );

  return (
    <PhotoProvider
      maskOpacity={0.6}
      toolbarRender={() => {
        return (
          <StyledToolbarPostInfo>
            {t("post.photoViewerToolbarMessage", {
              firstName: post.account?.firstName,
              lastName: post.account?.lastName,
            })}
            {new Date(post.date).toLocaleDateString()}
          </StyledToolbarPostInfo>
        );
      }}
    >
      <StyledProjectPostBox key={post.id}>
        {postContent}
        {hasPermission && <StyledPostFooter>{postFooterContent}</StyledPostFooter>}

        <ModalPostComments
          onCommentPostedTriggerGetComments={() => {
            setTriggerGetComments(triggerGetComments + 1);
          }}
          open={isCommentsVisible}
          onCloseRequested={() => setIsCommentsVisible(false)}
          postOrPostReplyId={post.id}
          title={`${post?.account?.firstName} ${post?.account?.lastName}`}
        >
          <>
            {postContent}

            {hasPermission && (
              <StyledmodalPostFooter postRepliesCount={post.repliesCount}>{postFooterContent}</StyledmodalPostFooter>
            )}

            <CommentsList
              commentLevel={1}
              commentRepliesCount={post.repliesCount}
              parentPostId={post.id}
              triggerGetComments={triggerGetComments}
            />
          </>
        </ModalPostComments>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
