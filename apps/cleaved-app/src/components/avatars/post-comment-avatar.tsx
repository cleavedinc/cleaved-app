import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";

import { BORDERS, COLORS, FONT_SIZES, RADIUS, SPACING_PX } from "@cleaved/ui";

import { ProfessionalUnlinkedView } from "../../generated-types/graphql";
import { useNavigateToProfessionalProfile } from "../../hooks";

type PostHeaderAvatarProps = {
  account:
    | {
        id: string;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
        currentAvatar?: string | null | undefined;
        professionals: Array<ProfessionalUnlinkedView>;
      }
    | undefined;
};

const avatartBase = css`
  align-items: center;
  border: ${BORDERS.BORDER_PRIMARY};
  border-radius: ${RADIUS.CIRCLE};
  display: flex;
  height: 40px;
  justify-content: center;
  margin-right: ${SPACING_PX.TWO};
  width: 40px;
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
  font-size: ${FONT_SIZES.SMALL};
`;

export const PostCommentAvatar: FunctionComponent<PostHeaderAvatarProps> = (props) => {
  const { account } = props;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(account?.professionals[0]?.id);
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account?.currentAvatar && (
        <StyledAvatarImageLink href={professionalProfilePath}>
          <StyledAvatarImage src={`${process.env.MEDIA_ENDPOINT}/${account?.currentAvatar}`} alt="profile avatar" />
        </StyledAvatarImageLink>
      )}

      {!account?.currentAvatar && (
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
