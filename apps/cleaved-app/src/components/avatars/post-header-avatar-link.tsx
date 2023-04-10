import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, COLORS, FONT_SIZES, RADIUS, SPACING_PX } from "@cleaved/ui";

import { useNavigateToProfessionalProfile } from "../../hooks";

type PostHeaderAvatarProps = {
  account: {
    id: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    currentAvatar?: string | null | undefined;
  };
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 30px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 30px;
`;

const StyledAvatarImage = styled.img`
  ${avatartBase}
`;

const StyledAvatarImageLink = styled.a`
  color: ${COLORS.BLACK};
  height: max-content;
`;

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  font-size: ${FONT_SIZES.XSMALL};
`;

export const PostHeaderAvatarLink: FunctionComponent<PostHeaderAvatarProps> = (props) => {
  const { account } = props;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account.id);
  const firstNameInitial = account.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {!account.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarInitials>
            {firstNameInitial}
            {lastNameInitial}
          </StyledAvatarInitials>
        </StyledAvatarImageLink>
      )}
    </>
  );
};
