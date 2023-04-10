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
  StyledPostImageWrapper,
  StyledPostInfoBarCommentCount,
  PostProfessionalName,
  StyledProjectPostBox,
  StyledToolbarPostInfo,
  StyledTooltipWrapper,
} from "./shared-styles";

export const Problems: FunctionComponent = () => {
  const { t } = useTranslator();

  return (
    <>
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
              <PostProfessionalName>Olivia Johnson</PostProfessionalName>
              <StyledJobTitle>Director of Engineering</StyledJobTitle>
            </StyledMemberNameWrapper>
          </PostHeaderWrapper>

          <StyledMessage>
            <p>Staying informed of my team's decisions is crucial to building great products for our customers.</p>

            <p>However, it's challenging when important decisions get buried in communication platforms.</p>
          </StyledMessage>

          <StyledPostImageWrapper>
            <PhotoView src={"/helper-info/placeholder.png"}>
              <StyledPostImage src={"/helper-info/placeholder.png"} alt={"SOME ALT TEXT HERE"} />
            </PhotoView>
          </StyledPostImageWrapper>

          <StyledPostInfoBar>
            <ReactionTypesAndTotalCount reactionsExpressed={[PostReactionType.Like]} reactionTotalCount={"3"} />

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
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-2.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>David Lee</PostProfessionalName>
              <StyledJobTitle>Senior Software Engineer</StyledJobTitle>
            </StyledMemberNameWrapper>
          </PostHeaderWrapper>

          <StyledMessage>
            <p>
              One thing that I've struggled with is that it can be tough to keep track of project feedback when they're
              scattered across different software platforms.
            </p>

            <p>It can be frustrating not knowing where to find what you need.</p>
          </StyledMessage>

          <StyledPostImageWrapper>
            <PhotoView src={"/helper-info/placeholder-2.png"}>
              <StyledPostImage src={"/helper-info/placeholder-2.png"} alt={"SOME ALT TEXT HERE"} />
            </PhotoView>
          </StyledPostImageWrapper>

          <StyledPostInfoBar>
            <ReactionTypesAndTotalCount reactionsExpressed={[PostReactionType.Like]} reactionTotalCount={"5"} />

            <StyledPostInfoBarCommentCount onClick={() => {}}>
              2 <StyledPostComments>{t("post.comment")}</StyledPostComments>
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
              <StyledAvatarImage src={"/helper-info/avatars/avatar-male-1.svg"} alt="profile avatar" />
            </StyledAvatarImageLink>

            <StyledMemberNameWrapper>
              <PostProfessionalName>Brandon Scott</PostProfessionalName>
              <StyledJobTitle>Engineering Manager</StyledJobTitle>
            </StyledMemberNameWrapper>
          </PostHeaderWrapper>

          <StyledMessage>
            <p>
              As someone who manages an engineering team, I know firsthand how challenging it can be to manage up and
              get feedback from key leaders.
            </p>

            <p>It's also not always easy to share ideas outside of our team, or know who would be interested.</p>
          </StyledMessage>

          <StyledPostImageWrapper>
            <PhotoView src={"/helper-info/placeholder-3.png"}>
              <StyledPostImage src={"/helper-info/placeholder-3.png"} alt={"SOME ALT TEXT HERE"} />
            </PhotoView>
          </StyledPostImageWrapper>

          <StyledPostInfoBar>
            <ReactionTypesAndTotalCount reactionsExpressed={[PostReactionType.Like]} reactionTotalCount={"1"} />
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
                  <ActivePostReaction myReaction={PostReactionType.NoReaction} />
                </StyledPostFooterButtonButton>
              </StyledTooltipWhite>
            </StyledTooltipWrapper>

            <PostProjectComment showComments={() => {}} />
          </StyledPostFooter>
        </StyledProjectPostBox>
      </PhotoProvider>
    </>
  );
};
