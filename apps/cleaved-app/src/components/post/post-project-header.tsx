import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from "@cleaved/ui";
import { getTimeSinceDate } from "@cleaved/helpers";

import { PostEditMenu, PostHeaderAvatarLink, SeparatorDot } from "../../components";
import { authTokenContext } from "../../contexts";
import { OrgPermissionLevel, PostProjectSeekQuery } from "../../generated-types/graphql";
import { useFindMyAccount, useNavigateToProfile } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

type PostProjectHeaderProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"];
  accountId: string;
  className?: string;
  date: string | null;
  isPostOpenInModal: boolean;
  postId: string;
  postProjectId: string;
  postProjectName: string;
};

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
  display: flex;
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.LARGE};
  padding: ${SPACING.MEDIUM} ${SPACING.MEDIUM} 0;
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
  color: ${({ theme }) => theme.colors.baseSubText_color};
  display: inline-block;
`;

const StyledSeparatorDot = styled(SeparatorDot)`
  margin: 0 ${SPACING.SMALL};
`;

export const PostProjectHeader: FunctionComponent<PostProjectHeaderProps> = (props) => {
  const { account, accountId, className, date, isPostOpenInModal, postId, postProjectId, postProjectName } = props;
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { profilePath } = useNavigateToProfile(account?.id);
  const accountQuery = useFindMyAccount();

  return (
    <StyledPostHeaderWrapper className={className}>
      <PostHeaderAvatarLink account={account} />

      <StyledPostProfessionalInfoWrapper>
        <StyledPostProfessionalName href={profilePath}>
          {account?.firstName} {account?.lastName}
        </StyledPostProfessionalName>

        {account?.jobTitle && <StyledJobTitle>{account?.jobTitle}</StyledJobTitle>}

        <StyledDateProjectInfo>
          {date && <StyledPostDate>{getTimeSinceDate(date)}</StyledPostDate>}

          {date && postProjectName && postProjectId && <StyledSeparatorDot />}

          {postProjectName && postProjectId && (
            <StyledProjectNameLink
              to={`/${preferredOrgId}${routeConstantsCleavedApp.project.route}/${postProjectId}${routeConstantsCleavedApp.projectBoard.route}`}
              title={postProjectName}
            >
              {postProjectName}
            </StyledProjectNameLink>
          )}
        </StyledDateProjectInfo>
      </StyledPostProfessionalInfoWrapper>

      {hasPermission &&
        !isPostOpenInModal &&
        !accountQuery.loading &&
        accountQuery.data?.findMyAccount.id === accountId && (
          <StyledPostDateWrapper>
            <PostEditMenu postId={postId} />
          </StyledPostDateWrapper>
        )}
    </StyledPostHeaderWrapper>
  );
};
