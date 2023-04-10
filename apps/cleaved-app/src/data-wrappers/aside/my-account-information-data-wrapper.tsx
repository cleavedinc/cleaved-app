import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, SectionHeader, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { AccountContext } from "../../contexts";

const StyledJobTitle = styled.p`
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${COLORS.BLACK};

  &:hover {
    text-decoration: underline;
  }
`;

export const MyAccountInformationDataWrapper: FunctionComponent = () => {
  const { accountData } = useContext(AccountContext);

  return (
    <StickUnderHeaderDesktopOnly>
      <Box>
        <div>
          <AsideAvatar account={accountData} />

          <StyledProfileName>
            {accountData?.firstName} {accountData?.lastName}
          </StyledProfileName>

          <StyledJobTitle>{accountData?.professionals[0].jobTitle}</StyledJobTitle>
        </div>
      </Box>
    </StickUnderHeaderDesktopOnly>
  );
};
