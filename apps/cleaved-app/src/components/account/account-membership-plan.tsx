import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Box, FONT_SIZES, HeadingWrapper, SectionHeader, SPACING } from "@cleaved/ui";

import { StyledRouterButton, OrganizationMembershipMenu } from "../../components";
import { authTokenContext } from "../../contexts";
import { BillingTier } from "../../generated-types/graphql";
import { useOrganizationMemberships, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledCurrentPlan = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledCurrentPlanLabel = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.BASE};
`;

const StyledRouterButtonInline = styled(StyledRouterButton)`
  align-self: flex-start;
`;

export const AccountMembershipPlan: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { organizationMembershipsData, organizationMembershipsDataLoading } = useOrganizationMemberships();

  const { t } = useTranslator();

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("membership.membership")}</SectionHeader>

        <OrganizationMembershipMenu />
      </HeadingWrapper>

      {!organizationMembershipsDataLoading &&
        organizationMembershipsData &&
        organizationMembershipsData.billingTier && (
          <>
            <StyledCurrentPlanLabel>{t("membership.currentPlan")}</StyledCurrentPlanLabel>
            <StyledCurrentPlan>{organizationMembershipsData.billingTier}</StyledCurrentPlan>
          </>
        )}

      {organizationMembershipsData &&
        organizationMembershipsData.billingTier &&
        organizationMembershipsData.billingTier === BillingTier.Free && (
          <StyledRouterButtonInline
            to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
            title={t("membership.upgradeMembership")}
          >
            {t("membership.upgradeMembership")}
          </StyledRouterButtonInline>
        )}
    </StyledBox>
  );
};
