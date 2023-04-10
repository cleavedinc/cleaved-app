import React, { FunctionComponent } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

import { StyledTooltipWhite } from "@cleaved/ui";

import { ReactionTypesAndTotalCount } from "../../../components";
import { ReactionSelections } from "../../../components/reactions/reaction-selections";
import { ActivePostReaction } from "../../../components/reactions/active-post-reaction";
import { PostProjectComment } from "../../../components/post/post-project-comment";
import { PostReactionType } from "../../../generated-types/graphql";
import { useTranslator } from "../../../hooks";

import {
  StyledAvatarImage,
  StyledAvatarImageLink,
  PostHeaderWrapper,
  StyledJobTitle,
  StyledMemberNameWrapper,
  StyledMessage,
  StyledPostComments,
  StyledPostInfoBar,
  StyledPostFooter,
  StyledPostFooterButtonButton,
  StyledPostImage,
  StyledPostImageMultiple,
  StyledPostImageWrapper,
  StyledPostInfoBarCommentCount,
  PostProfessionalName,
  StyledProjectPostBox,
  StyledToolbarPostInfo,
  StyledTooltipWrapper,
} from "./shared-styles";

export const Ultimatum: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <PhotoProvider
      maskOpacity={0.6}
      toolbarRender={() => {
        return (
          <StyledToolbarPostInfo>
            {t("post.photoViewerToolbarMessage", {
              firstName: "SOME FIRST NAME",
              lastName: "SOME LAST NAME",
            })}
            {new Date().toLocaleDateString()}
          </StyledToolbarPostInfo>
        );
      }}
    >
      <StyledProjectPostBox>
        <PostHeaderWrapper>
          <StyledAvatarImageLink href="#">
            <StyledAvatarImage src={"/helper-info/avatars/avatar-female-2.svg"} alt="profile avatar" />
          </StyledAvatarImageLink>

          <StyledMemberNameWrapper>
            <PostProfessionalName>Samantha Kim</PostProfessionalName>
            <StyledJobTitle>Vice President of Product</StyledJobTitle>
          </StyledMemberNameWrapper>
        </PostHeaderWrapper>

        <StyledMessage>
          <p>Talk about the problem we are solving</p>

          <ul>
            <li>problem 1: reason this is awesome</li>
            <li>problem 2: reason this is awesome</li>
            <li>problem 3: reason this is awesome</li>
          </ul>
        </StyledMessage>

        <StyledPostImageWrapper>
          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>

          <PhotoView src={"/helper-info/placeholder.png"}>
            <StyledPostImageMultiple src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
          </PhotoView>
        </StyledPostImageWrapper>

        <StyledPostInfoBar>
          <ReactionTypesAndTotalCount reactionsExpressed={[PostReactionType.Like]} reactionTotalCount={"1"} />

          <StyledPostInfoBarCommentCount onClick={() => {}}>
            1 <StyledPostComments>{t("post.comment")}</StyledPostComments>
          </StyledPostInfoBarCommentCount>
        </StyledPostInfoBar>

        <StyledPostFooter>
          <StyledTooltipWrapper>
            <StyledTooltipWhite
              allowHTML
              delay={[500, 300]}
              interactive
              tooltip={<ReactionSelections postId={"123"} postProjectSetReaction={() => {}} />}
            >
              <StyledPostFooterButtonButton onClick={() => {}} type="button">
                <ActivePostReaction myReaction={PostReactionType.Like} />
              </StyledPostFooterButtonButton>
            </StyledTooltipWhite>
          </StyledTooltipWrapper>

          <PostProjectComment showComments={() => {}} />
        </StyledPostFooter>
      </StyledProjectPostBox>
    </PhotoProvider>
  );
};
