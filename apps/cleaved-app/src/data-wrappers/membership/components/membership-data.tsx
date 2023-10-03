import React, { FunctionComponent, useContext } from "react";
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

import { StyledRouterButton } from "../../../components";
import { authTokenContext } from "../../../contexts";
import { BillingTier } from "../../../generated-types/graphql";
import { useOrganizationMembershipPermissionBillingCounts, useTranslator } from "../../../hooks";
import { routeConstantsCleavedApp } from "../../../router";

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

export const MembershipData: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const {
    organizationMembershipPermissionBillingCountsData,
    organizationMembershipPermissionBillingCountsDataLoading,
  } = useOrganizationMembershipPermissionBillingCounts();
  const { t } = useTranslator();
  const theme = useTheme();

  const handleRouteToStripeManageSubscription = () => {
    window.open(process.env.STRIPE_SUBSCRIPTION_PORTAL_URL, "_blank");
  };

  return (
    <StyledBox>
      <HeadingWrapper>
        <SectionHeader>{t("membership.membership")}</SectionHeader>
      </HeadingWrapper>

      {!organizationMembershipPermissionBillingCountsDataLoading &&
        organizationMembershipPermissionBillingCountsData &&
        organizationMembershipPermissionBillingCountsData.billingTier && (
          <>
            <StyledCurrentPlanLabel>{t("membership.currentPlan")}</StyledCurrentPlanLabel>
            <StyledBillingTier>{organizationMembershipPermissionBillingCountsData.billingTier}</StyledBillingTier>
          </>
        )}

      {!organizationMembershipPermissionBillingCountsDataLoading &&
        organizationMembershipPermissionBillingCountsData &&
        organizationMembershipPermissionBillingCountsData.billingTier &&
        organizationMembershipPermissionBillingCountsData.billingTier === BillingTier.Free && (
          <StyledRouterButtonInline
            to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
            title={t("membership.upgradeMembership")}
          >
            {t("membership.upgradeMembership")}
          </StyledRouterButtonInline>
        )}

      {!organizationMembershipPermissionBillingCountsDataLoading &&
        organizationMembershipPermissionBillingCountsData &&
        organizationMembershipPermissionBillingCountsData.billingTier &&
        (organizationMembershipPermissionBillingCountsData.billingTier === BillingTier.Professional ||
          organizationMembershipPermissionBillingCountsData.billingTier === BillingTier.Enterprise) && (
          <StyledButtonPrimary onClick={() => handleRouteToStripeManageSubscription()}>
            <StyledSettingsIcon color={theme.colors.always_white_color} iconSize={FONT_SIZES.LARGE} />
            {t("membership.manageMembership")}
          </StyledButtonPrimary>
        )}
    </StyledBox>
  );
};
