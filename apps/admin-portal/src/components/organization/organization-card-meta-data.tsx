import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { FONT_SIZES, SPACING } from "@cleaved/ui";

import { OrganizationListAdminQuery } from "../../generated-types/graphql";

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACING.BASE};
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.MEDIUM};
  padding: 0 ${SPACING.SMALL};
`;

const StyledDate = styled.span`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XXSMALL};
`;

const StyledBillingTier = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: ${SPACING.BASE};
  padding: 0 ${SPACING.SMALL};
`;

type ProjectCardMetaDataProps = {
  organizationData?: OrganizationListAdminQuery["organizationListAdmin"][0];
};

export const OrganizationCardMetaData: FunctionComponent<ProjectCardMetaDataProps> = (props) => {
  const { organizationData } = props;

  return (
    <>
      <StyledBillingTier>
        <StyledDate>Billing Tier: {organizationData?.billingTier}</StyledDate>
      </StyledBillingTier>

      <StyledInfoWrapper>
        <StyledInfo title={"Members (total)"}>Members (total): {organizationData?.memberCount}</StyledInfo>

        <StyledInfo title={"Projects (active)"}>Projects (active): {organizationData?.activeProjectCount}</StyledInfo>

        <StyledInfo title={"Projects (total)"}>Projects (total): {organizationData?.projectCount}</StyledInfo>
      </StyledInfoWrapper>
    </>
  );
};
