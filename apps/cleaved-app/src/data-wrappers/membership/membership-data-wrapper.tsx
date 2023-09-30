import React, { FunctionComponent, useContext, useEffect } from "react";
import styled, { useTheme } from "styled-components";

import {
  ButtonPrimary,
  Box,
  FONT_SIZES,
  FONT_WEIGHTS,
  HeadingWrapper,
  SectionHeader,
  SettingsIcon,
  SPACING,
} from "@cleaved/ui";

import { StyledRouterButton } from "../../components";
import { authTokenContext } from "../../contexts";
import { BillingTier } from "../../generated-types/graphql";
import { useAdminOnlyOrganizationMemberships, useTranslator } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

const StyledBillingTier = styled.div`
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const StyledRouterButtonInline = styled(StyledRouterButton)`
  align-self: flex-start;
`;

const StyledButtonPrimary = styled(ButtonPrimary)`
  align-self: flex-start;
  display: flex;
`;

const StyledCurrentPlanLabel = styled.div`
  color: ${({ theme }) => theme.colors.baseSubText_color};
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.BASE};
`;

const StyledSettingsIcon = styled(SettingsIcon)`
  margin-right: ${SPACING.SMALL};
`;

export const MembershipDataWrapper: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const { adminOnlyOrganizationMembershipsData, adminOnlyOrganizationMembershipsDataLoading } =
    useAdminOnlyOrganizationMemberships();
  const { t } = useTranslator();
  const theme = useTheme();

  const handleRouteToStripeManageSubscription = () => {
    const stripeSubscriptionPortalUrl = "https://billing.stripe.com/p/login/test_aEU4jH2hj9Niek0288";
    window.open(stripeSubscriptionPortalUrl, "_blank");
  };

  useEffect(() => {
    if (adminOnlyOrganizationMembershipsData) {
      console.log("organizationMembershipsData.billingTier", adminOnlyOrganizationMembershipsData.billingTier);
    }
  }, [adminOnlyOrganizationMembershipsData]);

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("membership.membership")}</SectionHeader>
      </HeadingWrapper>

      {!adminOnlyOrganizationMembershipsDataLoading &&
        adminOnlyOrganizationMembershipsData &&
        adminOnlyOrganizationMembershipsData.billingTier && (
          <>
            <StyledCurrentPlanLabel>{t("membership.currentPlan")}</StyledCurrentPlanLabel>
            <StyledBillingTier>{adminOnlyOrganizationMembershipsData.billingTier}</StyledBillingTier>
          </>
        )}

      {!adminOnlyOrganizationMembershipsDataLoading &&
        adminOnlyOrganizationMembershipsData &&
        adminOnlyOrganizationMembershipsData.billingTier &&
        adminOnlyOrganizationMembershipsData.billingTier === BillingTier.Free && (
          <StyledRouterButtonInline
            to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
            title={t("membership.upgradeMembership")}
          >
            {t("membership.upgradeMembership")}
          </StyledRouterButtonInline>
        )}

      {!adminOnlyOrganizationMembershipsDataLoading &&
        adminOnlyOrganizationMembershipsData &&
        adminOnlyOrganizationMembershipsData.billingTier &&
        (adminOnlyOrganizationMembershipsData.billingTier === BillingTier.Professional ||
          adminOnlyOrganizationMembershipsData.billingTier === BillingTier.Enterprise) && (
          <StyledButtonPrimary onClick={() => handleRouteToStripeManageSubscription()}>
            <StyledSettingsIcon color={theme.colors.always_white_color} iconSize={FONT_SIZES.LARGE} />
            {t("membership.manageMembership")}
          </StyledButtonPrimary>
        )}
    </StyledBox>
  );
};
