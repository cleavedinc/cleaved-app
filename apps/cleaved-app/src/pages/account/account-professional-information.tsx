import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Box, ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AccountLegalLinks, AccountMembershipPlan } from "../../components";
import { AccountGeneralSettingsDataWrapper, AccountOrganizationListDataWrapper } from "../../data-wrappers";
import { PersonalInformationForm, ProfesionalInformationForm } from "../../forms";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const AccountProfessionalInformation: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        {/* <AccountMembershipPlan /> */}

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
