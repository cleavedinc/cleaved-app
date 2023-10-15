import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { BORDERS, Box, ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, SPACING } from "@cleaved/ui";

import { AccountLegalLinks, AccountMembershipPlan, Header } from "../../components";
import {
  AccountGeneralSettingsDataWrapper,
  AccountOrganizationListDataWrapper,
  AsideAccountDataWrapper,
} from "../../data-wrappers";
import { PersonalInformationForm, ProfesionalInformationForm, SocialNetworksForm } from "../../forms";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationPermission } from "../../permissions";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledLineSeperator = styled.div`
  border-bottom: ${BORDERS.SOLID_1PX} ${({ theme }) => theme.borders.primary_color};
  margin: ${SPACING.XXLARGE} 0;
`;

export const AccountProfessionalInformation: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);

  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideAccountDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          {hasPermission && <AccountMembershipPlan />}

          <StyledBox>
            <PersonalInformationForm />

            <StyledLineSeperator />

            <ProfesionalInformationForm />

            <StyledLineSeperator />

            <SocialNetworksForm />
          </StyledBox>

          <AccountGeneralSettingsDataWrapper />

          <AccountOrganizationListDataWrapper />

          <AccountLegalLinks />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
