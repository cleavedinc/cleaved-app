import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled, { useTheme } from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import {
  Box,
  FONT_SIZES,
  Link,
  LinkedinIcon,
  SectionHeader,
  SPACING,
  StickUnderHeaderDesktopOnly,
  XTwitterIcon,
} from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { OrganizationGetMemberQuery } from "../../generated-types/graphql";
import { useLoginGuard, useRouteParams, useTranslator } from "../../hooks";

import { ORGANIZATION_GET_MEMBER_QUERY } from "./gql";

const StyledAboutLabel = styled.label`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
`;

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

const StyledProfessionalAbout = styled.div`
  color: ${({ theme }) => theme.colors.baseText_color};
  margin-bottom: ${SPACING.MEDIUM};
  white-space: pre-line;
`;

const StyledProfessionalAboutWrapper = styled.div``;

const StyledProfessionalInformationWrapper = styled.div`
  text-align: center;
`;

const StyledProfileName = styled(SectionHeader)`
  color: ${({ theme }) => theme.colors.baseText_color};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledSocialLink = styled(Link)`
  :not(:last-child) {
    margin-right: ${SPACING.SMALL};
  }
`;

export const ProfessionalDataWrapper: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const organizationId = routeParams.orgId;
  const professionalId = routeParams.professionalId;
  const theme = useTheme();

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

  console.log("linkedin", data?.organizationGetMember?.socialMedia.linkedin);
  console.log("twitter", data?.organizationGetMember?.socialMedia.twitter);

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

              {data.organizationGetMember.jobTitle && (
                <StyledJobTitle>{data.organizationGetMember.jobTitle}</StyledJobTitle>
              )}

              <StyledEmailAddress>{data.organizationGetMember.emailAddress}</StyledEmailAddress>
            </StyledProfessionalInformationWrapper>

            {data.organizationGetMember.about && (
              <StyledProfessionalAboutWrapper>
                <StyledAboutLabel>{t("professional.about")}</StyledAboutLabel>

                <StyledProfessionalAbout>{data.organizationGetMember.about}</StyledProfessionalAbout>
              </StyledProfessionalAboutWrapper>
            )}

            {data.organizationGetMember.goals && (
              <StyledProfessionalAboutWrapper>
                <StyledAboutLabel>{t("professional.goals")}</StyledAboutLabel>

                <StyledProfessionalAbout>{data.organizationGetMember.goals}</StyledProfessionalAbout>
              </StyledProfessionalAboutWrapper>
            )}

            {data &&
              (data.organizationGetMember.socialMedia.linkedin || data.organizationGetMember.socialMedia.twitter) && (
                <StyledProfessionalAboutWrapper>
                  <StyledAboutLabel>{t("professional.socialMedia")}</StyledAboutLabel>

                  <StyledProfessionalAbout>
                    {data.organizationGetMember.socialMedia.linkedin && (
                      <StyledSocialLink href={data.organizationGetMember.socialMedia.linkedin} target="_blank">
                        <LinkedinIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
                      </StyledSocialLink>
                    )}

                    {data.organizationGetMember.socialMedia.twitter && (
                      <StyledSocialLink href={data.organizationGetMember.socialMedia.twitter} target="_blank">
                        <XTwitterIcon color={theme.colors.baseIcon_color} iconSize={FONT_SIZES.LARGE} />
                      </StyledSocialLink>
                    )}
                  </StyledProfessionalAbout>
                </StyledProfessionalAboutWrapper>
              )}
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
