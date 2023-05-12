import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, FONT_SIZES, RADIUS, SPACING_PX } from "@cleaved/ui";

import { PostProjectSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfile } from "../../hooks";

type PostHeaderAvatarProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"] | undefined;
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 45px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 45px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageLink = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XSMALL};
`;

export const PostHeaderAvatarLink: FunctionComponent<PostHeaderAvatarProps> = (props) => {
  const { account } = props;
  const { profilePath } = useNavigateToProfile(account && account.id);
  const firstNameInitial = (account && account.firstName?.charAt(0).toUpperCase()) || "";
  const lastNameInitial = (account && account.lastName?.charAt(0).toUpperCase()) || "";

  return (
    <>
      {account && account.currentAvatar && (
        <StyledAvatarImageLink href={profilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {account && !account.currentAvatar && (
        <StyledAvatarImageLink href={profilePath}>
          <StyledAvatarInitials>
            {firstNameInitial}
            {lastNameInitial}
          </StyledAvatarInitials>
        </StyledAvatarImageLink>
      )}
    </>
  );
};
