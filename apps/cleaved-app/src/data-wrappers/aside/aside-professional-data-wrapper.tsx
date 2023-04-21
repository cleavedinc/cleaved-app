import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "@reach/router";
import styled from "styled-components";

import { logQueryError } from "@cleaved/helpers";
import { Box, COLORS, FONT_SIZES, SectionHeader, SPACING, StickUnderHeaderDesktopOnly } from "@cleaved/ui";

import { AsideAvatar } from "../../components";
import { FindMyProfessionalByIdQuery } from "../../generated-types/graphql";
import { FIND_MY_PROFESSIONAL_BY_ID } from "../../gql-queries";
import { useLoginGuard, useNavigateToProfessionalProfile, useRouteParams, useTranslator } from "../../hooks";

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
  const { isLoggedIn } = useLoginGuard();
  const routeParams = useRouteParams();
  const professionalId = routeParams.professionalId;
  const { professionalProfilePath } = useNavigateToProfessionalProfile(professionalId);
  const { t } = useTranslator();

  const { data, loading } = useQuery<FindMyProfessionalByIdQuery>(FIND_MY_PROFESSIONAL_BY_ID, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-and-network",
    onError: (error) => {
      console.log("error", error);
      logQueryError(error);
    },
    skip: !isLoggedIn || !professionalId,
    variables: { professionalId },
  });

  const professionalData = data?.findProfessionalById;

  return (
    <>
      <StickUnderHeaderDesktopOnly>
        {!loading && (
          <Box>
            <StyledAsideProfessionalWrapper>
              <AsideAvatar account={professionalData?.account} />

              <Link to={professionalProfilePath}>
                <StyledProfileName>
                  {professionalData?.account.firstName} {professionalData?.account.lastName}
                </StyledProfileName>
              </Link>

              <StyledJobTitle>{professionalData?.jobTitle}</StyledJobTitle>

              <StyledProfessionalAbout>{professionalData?.about}</StyledProfessionalAbout>

              <StyledEmaillink>
                <a href={`mailto:${professionalData?.id}`}>TEMP EMAIL LINK NEEDED {t("professional.emailLinkText")}</a>
              </StyledEmaillink>
            </StyledAsideProfessionalWrapper>
          </Box>
        )}
      </StickUnderHeaderDesktopOnly>
    </>
  );
};
