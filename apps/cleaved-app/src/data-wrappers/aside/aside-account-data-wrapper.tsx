import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, SectionHeader, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAccountAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { useNavigateToProfessionalProfile } from "../../hooks";

const StyledAsideAccountWrapper = styled.div`
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

export const AsideAccountDataWrapper: FunctionComponent = () => {
  const { accountData, accountDataRefetch } = useContext(AccountContext);
  const { professionalProfilePath } = useNavigateToProfessionalProfile(accountData?.id);

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        <Box>
          <StyledAsideAccountWrapper>
            <AsideAccountAvatar account={accountData} refetchAccountData={accountDataRefetch} />

            <Link to={professionalProfilePath}>
              <StyledProfileName>
                {accountData?.firstName} {accountData?.lastName}
              </StyledProfileName>
            </Link>

            <StyledJobTitle>{accountData?.professionals[0].jobTitle}</StyledJobTitle>
          </StyledAsideAccountWrapper>
        </Box>
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
