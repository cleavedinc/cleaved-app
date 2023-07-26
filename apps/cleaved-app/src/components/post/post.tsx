import React, { FunctionComponent, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

import { BORDERS, BoxNoPadding, FONT_SIZES, PhotoCollage, SPACING } from "@cleaved/ui";

import { PostReactions, ReactionTypesAndTotalCount } from "../../components";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { CommentsList } from "../comments/comments-list";

import { ModalPostComments } from "./modal-post-comments";
import { PostProjectComment } from "./post-project-comment";
import { PostProjectHeader } from "./post-project-header";

type PostProps = {
  post: PostProjectSeekQuery["postProjectSeek"][0];
};

const StyledCommentListWrapper = styled.div`
  padding: 0 ${SPACING.MEDIUM};
`;

const StyledProjectPostBox = styled(BoxNoPadding)``;

const StyledMessage = styled(ReactMarkdown)`
  overflow-wrap: anywhere;
  padding: 0 ${SPACING.MEDIUM} ${SPACING.SMALL} ${SPACING.MEDIUM};

  ul,
  ol {
    margin: 0 0 ${SPACING.MEDIUM} ${SPACING.XLARGE};
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }
`;

const StyledPostComments = styled.span`
  margin-left: 3px;
  text-transform: lowercase;
`;

const StyledPostInfoBar = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: flex;
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledmodalPostFooter = styled.div<{ postRepliesCount: string }>`
  align-items: flex-start;
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
  padding: 5px 0;
  margin-bottom: ${(props) => (props.postRepliesCount !== "0" ? SPACING.LARGE : "0")};
`;

const StyledPostFooter = styled.div`
  align-items: flex-start;
  border-top: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  display: flex;
`;

const StyledPostInfoBarCommentCount = styled.div`
  cursor: pointer;
  display: flex;
  margin: ${SPACING.SMALL} ${SPACING.MEDIUM} ${SPACING.SMALL} auto;

  :hover {
    text-decoration: underline;
  }
`;

const StyledReactPhotoCollage = styled(PhotoCollage)`
  & > div {
    border: none !important;
  }
`;

const StyledReactReactionTypesAndTotalCountWrapper = styled.div`
  margin: ${SPACING.SMALL} ${SPACING.MEDIUM};
`;

export const Post: FunctionComponent<PostProps> = (props) => {
  const { post } = props;
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const [triggerGetComments, setTriggerGetComments] = useState(0);
  const { t } = useTranslator();

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

  const postContent = () => {
    const photoArray = post.images.map((value) => ({ source: `${process.env.MEDIA_ENDPOINT}/${value}` }));

    return (
      <>
        {post && (
          <PostProjectHeader
            account={post.account}
            accountId={post.accountId}
            date={post.date}
            isPostOpenInModal={isCommentsVisible}
            postId={post.id}
            postProjectId={post.project.id}
            postProjectName={post.project.name}
          />
        )}

        <StyledMessage remarkPlugins={[remarkGfm]}>{post.body}</StyledMessage>

        {post.images && post.images.length > 0 && (
          <StyledReactPhotoCollage
            width={"100%"}
            height={["auto", "100px"]}
            photoLayout={[1, 3]}
            photos={photoArray}
            showTotalPhotosNotSeenNumber={true}
          />
        )}

        <StyledPostInfoBar>
          {post.reactionTotalCount !== "0" && (
            <StyledReactReactionTypesAndTotalCountWrapper>
              <ReactionTypesAndTotalCount
                reactionsExpressed={post.reactionsExpressed}
                reactionTotalCount={post.reactionTotalCount}
              />
            </StyledReactReactionTypesAndTotalCountWrapper>
          )}

          {post.repliesCount !== "0" && (
            <StyledPostInfoBarCommentCount onClick={() => handleShowCommentsmodal()}>
              <div>{post.repliesCount}</div>
              <StyledPostComments>
                {post.repliesCount === "1" ? t("post.comment") : t("post.comments")}
              </StyledPostComments>
            </StyledPostInfoBarCommentCount>
          )}
        </StyledPostInfoBar>
      </>
    );
  };

  return (
    <StyledProjectPostBox key={post.id}>
      {postContent()}
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
          {postContent()}

          {hasPermission && (
            <StyledmodalPostFooter postRepliesCount={post.repliesCount}>{postFooterContent}</StyledmodalPostFooter>
          )}

          <StyledCommentListWrapper>
            <CommentsList
              commentLevel={1}
              commentRepliesCount={post.repliesCount}
              parentPostId={post.id}
              triggerGetComments={triggerGetComments}
            />
          </StyledCommentListWrapper>
        </>
      </ModalPostComments>
    </StyledProjectPostBox>
  );
};
