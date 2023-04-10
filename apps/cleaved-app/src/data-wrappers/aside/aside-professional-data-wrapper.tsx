import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, SectionHeader, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { useNavigateToProfessionalProfile } from "../../hooks";

const StyledAsideProfessionalWrapper = styled.div`
  text-align: center;
`;

const StyledJobTitle = styled.p`
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.SMALL};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${COLORS.BLACK};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AsideProfessionalDataWrapper: FunctionComponent = () => {
  const { accountData } = useContext(AccountContext);
  const { professionalProfilePath } = useNavigateToProfessionalProfile(accountData?.id);

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        <Box>
          <StyledAsideProfessionalWrapper>
            <AsideAvatar account={accountData} />

            <Link to={professionalProfilePath}>
              <StyledProfileName>
                {accountData?.firstName} {accountData?.lastName}
              </StyledProfileName>
            </Link>

            <StyledJobTitle>{accountData?.professionals[0].jobTitle}</StyledJobTitle>
          </StyledAsideProfessionalWrapper>
        </Box>
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
