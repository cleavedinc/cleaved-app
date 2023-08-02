import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { Box, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { OrganizationGetMemberQuery } from "../../generated-types/graphql";
import { useLoginGuard, useRouteParams, useTranslator } from "../../hooks";

import { ORGANIZATION_GET_MEMBER_QUERY } from "./gql";

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
  color: ${({ theme }) => theme.colors.baseText_color};
  margin-bottom: ${SPACING.MEDIUM};
  white-space: pre-line;
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
            <StyledAsideProfessionalWrapper>
              <AsideAvatar account={data.organizationGetMember} />

              <StyledProfileName>
                {data.organizationGetMember.firstName} {data.organizationGetMember.lastName}
              </StyledProfileName>

              <StyledJobTitle>{data.organizationGetMember.jobTitle}</StyledJobTitle>

              {data.organizationGetMember.about && (
                <StyledProfessionalAbout>{data.organizationGetMember.about}</StyledProfessionalAbout>
              )}

              <StyledEmaillink>
                <a href={`mailto:${data.organizationGetMember.emailAddress}`}>{t("professional.emailLinkText")}</a>
              </StyledEmaillink>
            </StyledAsideProfessionalWrapper>
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
