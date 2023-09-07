import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AccountLegalLinks, AccountMembershipPlan } from "../../components";
import { AccountGeneralSettingsDataWrapper, AccountOrganizationListDataWrapper } from "../../data-wrappers";
import { PersonalInformationForm, ProfesionalInformationForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationPermission } from "../../permissions";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountProfessionalInformation: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);

  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        {hasPermission && <AccountMembershipPlan />}

        <StyledBox>
          <PersonalInformationForm />
        </StyledBox>

        <StyledBox>
          <ProfesionalInformationForm />
        </StyledBox>

        <AccountGeneralSettingsDataWrapper />

        <AccountOrganizationListDataWrapper />

        <AccountLegalLinks />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
