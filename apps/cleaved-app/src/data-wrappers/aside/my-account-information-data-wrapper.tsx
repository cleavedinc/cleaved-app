import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Box, FONT_SIZES, SectionHeader, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { AccountContext } from "../../contexts";

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${({ theme }) => theme.colors.baseText_color};

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

          <StyledJobTitle>{accountData?.jobTitle}</StyledJobTitle>
        </div>
      </Box>
    </StickUnderHeaderDesktopOnly>
  );
};
