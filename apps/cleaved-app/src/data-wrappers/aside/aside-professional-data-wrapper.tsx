import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { Box, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { AccountContext } from "../../contexts";
import { useNavigateToProfile, useRouteParams, useTranslator } from "../../hooks";

const StyledAsideProfessionalWrapper = styled.div`
  text-align: center;
`;

const StyledEmaillink = styled.div``;

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.SMALL};
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledProfessionalAbout = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  margin-bottom: ${SPACING.MEDIUM};
  white-space: pre-line;
`;

export const AsideProfessionalDataWrapper: FunctionComponent = () => {
  const { accountData, accountDataLoading } = useContext(AccountContext);
  const routeParams = useRouteParams();
  const professionalId = routeParams.professionalId;
  const { profilePath } = useNavigateToProfile(professionalId);
  const { t } = useTranslator();

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        {!accountDataLoading && (
          <Box>
            <StyledAsideProfessionalWrapper>
              <AsideAvatar account={accountData} />

              <Link to={profilePath}>
                <StyledProfileName>
                  {accountData?.firstName} {accountData?.lastName}
                </StyledProfileName>
              </Link>

              <StyledJobTitle>{accountData?.jobTitle}</StyledJobTitle>

              <StyledProfessionalAbout>{accountData?.about}</StyledProfessionalAbout>

              <StyledEmaillink>
                <a href={`mailto:${accountData?.id}`}>TEMP EMAIL LINK NEEDED {t("professional.emailLinkText")}</a>
              </StyledEmaillink>
            </StyledAsideProfessionalWrapper>
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
