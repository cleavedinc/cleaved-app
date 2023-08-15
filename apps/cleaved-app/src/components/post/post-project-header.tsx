import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled, { useTheme } from "styled-components";

import { FONT_SIZES, FONT_WEIGHTS, PushPinIcon, SPACING } from "@cleaved/ui";
import { getTimeSinceDate } from "@cleaved/helpers";

import { PostEditMenu, PostHeaderAvatarLink, SeparatorDot } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useFindMyAccount, useNavigateToProfile, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

type PostProjectHeaderProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"];
  accountId: string;
  className?: string;
  date: string | null;
  isPinned: boolean;
  isPostOpenInModal: boolean;
  postId: string;
  postProjectId: string;
  postProjectName: string;
  showPinnedStatus?: boolean;
};

const StyledPinnedWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  justify-content: flex-end;
`;

const StyledPushPinIcon = styled(PushPinIcon)`
  margin-right: ${SPACING.BASE};
`;

const StyledDateProjectInfo = styled.div`
  display: flex;
`;

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
`;

const StyledPostDate = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
`;

const StyledPostDateWrapper = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  text-align: right;
  margin-left: auto;
`;

const StyledPostHeaderWrapper = styled.div`
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.MEDIUM} ${SPACING.MEDIUM} 0;
`;

const StyledPostHeaderContentWrapper = styled.div`
  display: flex;
`;

const StyledPostProfessionalInfoWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPostProfessionalName = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  font-size: ${FONT_SIZES.SMALL};
  font-weight: ${FONT_WEIGHTS.MEDIUM};

  &:hover {
    color: ${({ theme }) => theme.colors.baseTextLink_colorHover};
    text-decoration: underline;
  }
`;

const StyledProjectNameLink = styled(Link)`
  display: inline-block;
`;

const StyledSeparatorDot = styled(SeparatorDot)`
  margin: 0 ${SPACING.SMALL};
`;

export const PostProjectHeader: FunctionComponent<PostProjectHeaderProps> = (props) => {
  const {
    account,
    accountId,
    className,
    date,
    isPinned,
    isPostOpenInModal,
    postId,
    postProjectId,
    postProjectName,
    showPinnedStatus,
  } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { profilePath } = useNavigateToProfile(account?.id);
  const accountQuery = useFindMyAccount();
  const theme = useTheme();
  const { t } = useTranslator();

  return (
    <StyledPostHeaderWrapper className={className}>
      {showPinnedStatus && isPinned && (
        <StyledPinnedWrapper>
          <StyledPushPinIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.SMALL} />
          {t("post.pinned")}
        </StyledPinnedWrapper>
      )}

      <StyledPostHeaderContentWrapper>
        <PostHeaderAvatarLink account={account} />

        <StyledPostProfessionalInfoWrapper>
          <StyledPostProfessionalName href={profilePath}>
            {account?.firstName} {account?.lastName}
          </StyledPostProfessionalName>

          {account?.jobTitle && <StyledJobTitle>{account?.jobTitle}</StyledJobTitle>}

          <StyledDateProjectInfo>
            {postProjectName && postProjectId && (
              <StyledProjectNameLink
                to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${postProjectId}${routeConstantsCleavedApp.projectBoard.route}`}
                title={postProjectName}
              >
                {postProjectName}
              </StyledProjectNameLink>
            )}

            {date && postProjectName && postProjectId && <StyledSeparatorDot />}

            {date && <StyledPostDate>{getTimeSinceDate(date)}</StyledPostDate>}
          </StyledDateProjectInfo>
        </StyledPostProfessionalInfoWrapper>

        {hasPermission &&
          !isPostOpenInModal &&
          !accountQuery.loading &&
          accountQuery.data?.findMyAccount.id === accountId && (
            <StyledPostDateWrapper>
              <PostEditMenu isPinned={isPinned} postId={postId} />
            </StyledPostDateWrapper>
          )}
      </StyledPostHeaderContentWrapper>
    </StyledPostHeaderWrapper>
  );
};
