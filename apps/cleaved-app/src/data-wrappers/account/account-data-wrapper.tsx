import React, { FunctionComponent, useContext } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import { routeConstantsCleavedApp } from "../../router";
import { Box, buttonBase, buttonPrimaryBase, COLORS, HeadingWrapper, SectionHeader } from "@cleaved/ui";

import { authTokenContext } from "../../contexts";
import { PersonalInformationForm, ProfesionalInformationForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

const StyledManageOrganizationsLink = styled(Link)`
  ${buttonBase}
  ${buttonPrimaryBase}
  margin-left: auto;

  :hover {
    color: ${COLORS.WHITE};
  }
`;

export const AccountDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin, OrgPermissionLevel.Updater]);
  const { preferredOrgId } = useContext(authTokenContext);
  const { t } = useTranslator();

  const organizationListLinkName = t("menuLinkNames.organizationList") ? t("menuLinkNames.organizationList") : "";

  return (
    <>
      <Box>
        <PersonalInformationForm />
      </Box>

      <Box>
        <ProfesionalInformationForm />
      </Box>

      {hasPermission && (
        <Box>
          <HeadingWrapper>
            <SectionHeader>{t("organizations.organizations")}</SectionHeader>
          </HeadingWrapper>

          <StyledManageOrganizationsLink
            to={`/${preferredOrgId}${routeConstantsCleavedApp.organizationList.route}`}
            title={organizationListLinkName}
          >
            {t("organizations.manageOrganizations")}
          </StyledManageOrganizationsLink>
        </Box>
      )}
    </>
  );
};
