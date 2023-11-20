import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES } from "@cleaved/ui";

import { FindMyAccountQuery } from "../../generated-types/graphql";

import { avatartBase, avatarXSmall } from "./avatar-base-styles";

type HeaderMenuAvatarProps = {
  account: FindMyAccountQuery["findMyAccount"] | undefined;
};

const StyledAvatarInitials = styled.div`
  ${avatartBase}
  ${avatarXSmall}
  font-size: ${FONT_SIZES.XXSMALL};
`;

export const HeaderMenuAvatar: FunctionComponent<HeaderMenuAvatarProps> = (props) => {
  const { account } = props;
  const firstNameInitial = account?.firstName?.charAt(0).toUpperCase() || "";
  const lastNameInitial = account?.lastName?.charAt(0).toUpperCase() || "";

  return (
    <>
      {account && !account?.currentAvatar && (
        <StyledAvatarInitials>
          {firstNameInitial}
          {lastNameInitial}
        </StyledAvatarInitials>
      )}
    </>
  );
};
