import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, COLORS, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { useNavigateToProfessionalProfile, useTranslator } from "../../hooks";

const StyledAsideProfessionalWrapper = styled.div`
  text-align: center;
`;

const StyledEmaillink = styled.div``;

const StyledJobTitle = styled.div`
  color: ${COLORS.GRAY_500};
  font-size: ${FONT_SIZES.SMALL};
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${COLORS.BLACK};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledProfessionalAbout = styled.div`
  color: ${COLORS.GRAY_500};
  margin-bottom: ${SPACING.MEDIUM};
  white-space: pre-line;
`;

export const AsideProfessionalDataWrapper: FunctionComponent = () => {
  const { accountData } = useContext(AccountContext);
  const { professionalProfilePath } = useNavigateToProfessionalProfile(accountData?.id);
  const { t } = useTranslator();

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

            <StyledProfessionalAbout>{accountData?.professionals[0].about}</StyledProfessionalAbout>

            <StyledEmaillink>
              <a href={`mailto:${accountData?.emailAddress}`}>{t("professional.emailLinkText")}</a>
            </StyledEmaillink>
          </StyledAsideProfessionalWrapper>
        </Box>
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
