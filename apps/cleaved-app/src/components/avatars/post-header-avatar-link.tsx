import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING_PX } from "@cleaved/ui";

import { PostProjectSeekQuery } from "../../generated-types/graphql";
import { useNavigateToProfile } from "../../hooks";

import { avatartBase, avatarBaseSize } from "../avatars/avatar-base-styles";

type PostHeaderAvatarProps = {
  account: PostProjectSeekQuery["postProjectSeek"][0]["account"] | undefined;
};

const StyledAvatarImage = styled.img`
  ${avatartBase}
  ${avatarBaseSize}
  margin-right: ${SPACING_PX.TWO};
`;

const StyledAvatarImageLink = styled.a`
  color: ${({ theme }) => theme.colors.baseTextLink_color};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarBaseSize}
  font-size: ${FONT_SIZES.XSMALL};
  margin-right: ${SPACING_PX.TWO};
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
