import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { useOrganizationSeekMembers, useRouteParams, useTranslator } from "../../hooks";

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

export const ProfessionalDataWrapper: FunctionComponent = () => {
  const routeParams = useRouteParams();
  const professionalId = routeParams.professionalId;

  console.log("professionalId", professionalId);

  const { organizationSeekMembersData, organizationSeekMembersDataLoading } = useOrganizationSeekMembers(
    professionalId,
    20
  );

  const professionalData = organizationSeekMembersData && organizationSeekMembersData[0];

  const { t } = useTranslator();

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        {!organizationSeekMembersDataLoading && professionalData && (
          <Box>
            <StyledAsideProfessionalWrapper>
              <AsideAvatar account={professionalData} />

              <StyledProfileName>
                {professionalData?.firstName} {professionalData?.lastName}
              </StyledProfileName>

              <StyledJobTitle>{professionalData?.jobTitle}</StyledJobTitle>

              <StyledProfessionalAbout>{professionalData?.about}</StyledProfessionalAbout>

              <StyledEmaillink>
                <a href={`mailto:${professionalData?.emailAddress}`}>{t("professional.emailLinkText")}</a>
              </StyledEmaillink>
            </StyledAsideProfessionalWrapper>
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
