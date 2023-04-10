import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsCleavedApp } from "../../router";
import { Box, buttonBase, buttonPrimaryBase, COLORS, HeadingWrapper, SectionHeader } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { PersonalInformationForm, ProfesionalInformationForm } from "../../forms";
import { useTranslator } from "../../hooks";

const StyledManageOrganizationsLink = styled(Link)`
  ${buttonBase}
  ${buttonPrimaryBase}
  margin-left: auto;

  :hover {
    color: ${COLORS.WHITE};
  }
`;

export const AccountDataWrapper: FunctionComponent = () => {
  const { t } = useTranslator();
  const { preferredOrgId } = useContext(authTokenContext);

  return (
    <>
      <Box>
        <ProfesionalInformationForm />
      </Box>

      <Box>
        <PersonalInformationForm />
      </Box>

      <Box>
        <HeadingWrapper>
          <SectionHeader>{t("organizations.organizations")}</SectionHeader>
        </HeadingWrapper>

        <StyledManageOrganizationsLink
          to={`/${preferredOrgId}${routeConstantsCleavedApp.organizationList.route}`}
          title={routeConstantsCleavedApp.organizationList.name}
        >
          {t("organizations.manageOrganizations")}
        </StyledManageOrganizationsLink>
      </Box>
    </>
  );
};
