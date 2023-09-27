import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { Box, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { OrganizationGetMemberQuery } from "../../generated-types/graphql";
import { useLoginGuard, useRouteParams, useTranslator } from "../../hooks";

import { ORGANIZATION_GET_MEMBER_QUERY } from "./gql";

const StyledProfessionalInformationWrapper = styled.div`
  text-align: center;
`;

const StyledProfessionalAboutWrapper = styled.div``;

const StyledEmailAddress = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledJobTitle = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.SMALL};
  margin-bottom: ${SPACING.BASE};
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledProfessionalAbout = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  margin-bottom: ${SPACING.MEDIUM};
  white-space: pre-line;
`;

const StyledAboutLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

export const ProfessionalDataWrapper: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const professionalId = routeParams.professionalId;

  const { data, loading } = useQuery<OrganizationGetMemberQuery>(ORGANIZATION_GET_MEMBER_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      logQueryError(error);
    },
    skip: !isLoggedIn || !organizationId || !professionalId,
    variables: { organizationId: organizationId, memberId: professionalId },
  });

  const { t } = useTranslator();

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        {!loading && data && data.organizationGetMember && (
          <Box>
            <StyledProfessionalInformationWrapper>
              <AsideAvatar account={data.organizationGetMember} />

              <StyledProfileName>
                {data.organizationGetMember.firstName} {data.organizationGetMember.lastName}
              </StyledProfileName>

              <StyledJobTitle>{data.organizationGetMember.jobTitle}</StyledJobTitle>

              <StyledEmailAddress>{data.organizationGetMember.emailAddress}</StyledEmailAddress>
            </StyledProfessionalInformationWrapper>

            <StyledProfessionalAboutWrapper>
              <StyledAboutLabel>{t("professional.about")}</StyledAboutLabel>

              {data.organizationGetMember.about && (
                <StyledProfessionalAbout>{data.organizationGetMember.about}</StyledProfessionalAbout>
              )}
            </StyledProfessionalAboutWrapper>

            <StyledProfessionalAboutWrapper>
              <StyledAboutLabel>{t("professional.goals")}</StyledAboutLabel>

              {data.organizationGetMember.goals && (
                <StyledProfessionalAbout>{data.organizationGetMember.goals}</StyledProfessionalAbout>
              )}
            </StyledProfessionalAboutWrapper>
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
