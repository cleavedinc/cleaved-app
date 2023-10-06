import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Box, FONT_SIZES, HeadingWrapper, SectionHeader, SPACING } from "@cleaved/ui";

import { StyledRouterButton, OrganizationMembershipMenu } from "../../components";
import { authTokenContext } from "../../contexts";
import { BillingTier } from "../../generated-types/graphql";
import {
  useMembershipUserLimitHit,
  useOrganizationMembershipPermissionBillingCounts,
  useTranslator,
} from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

type AccountMembershipPlanType = {
  membershipUserLimitHit: boolean;
};

const StyledAccountMembershipPlanWrapper = styled(Box)<AccountMembershipPlanType>`
  ${(props) => (props.membershipUserLimitHit ? `background-color: ${props.theme.colors.always_red_color};` : null)}
  ${(props) => (props.membershipUserLimitHit ? `color: ${props.theme.colors.always_white_color};` : null)}
  display: flex;
  flex-direction: column;
`;

const StyledCurrentPlan = styled.div`
  margin-bottom: ${SPACING.SMALL};
`;

const StyledCurrentPlanLabel = styled.div<AccountMembershipPlanType>`
  color: ${(props) =>
    props.membershipUserLimitHit ? props.theme.colors.always_white_color : props.theme.colors.baseSubText_color}
  font-size: ${FONT_SIZES.XSMALL};
  margin-bottom: ${SPACING.BASE};
`;

const StyledMembershipLimitHitMessage = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
`;

const StyledRouterButtonInline = styled(StyledRouterButton)`
  align-self: flex-start;
`;

export const AccountMembershipPlan: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const {
    organizationMembershipPermissionBillingCountsData,
    organizationMembershipPermissionBillingCountsDataLoading,
  } = useOrganizationMembershipPermissionBillingCounts();
  const membershipUserLimitHit = useMembershipUserLimitHit(
    organizationMembershipPermissionBillingCountsData?.billingTier,
    organizationMembershipPermissionBillingCountsData?.memberCount
  );

  const { t } = useTranslator();

  return (
    <StyledAccountMembershipPlanWrapper membershipUserLimitHit={membershipUserLimitHit}>
      <HeadingWrapper>
        <SectionHeader>{t("membership.membership")}</SectionHeader>

        <OrganizationMembershipMenu />
      </HeadingWrapper>

      {membershipUserLimitHit && (
        <StyledMembershipLimitHitMessage>{t("membership.membershipLimitNonAdminText")}</StyledMembershipLimitHitMessage>
      )}

      {!organizationMembershipPermissionBillingCountsDataLoading &&
        organizationMembershipPermissionBillingCountsData &&
        organizationMembershipPermissionBillingCountsData.billingTier && (
          <>
            <StyledCurrentPlanLabel membershipUserLimitHit={membershipUserLimitHit}>
              {t("membership.currentPlan")}
            </StyledCurrentPlanLabel>
            <StyledCurrentPlan>{organizationMembershipPermissionBillingCountsData.billingTier}</StyledCurrentPlan>
          </>
        )}

      {organizationMembershipPermissionBillingCountsData &&
        organizationMembershipPermissionBillingCountsData.billingTier &&
        organizationMembershipPermissionBillingCountsData.billingTier === BillingTier.Free && (
          <StyledRouterButtonInline
            to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
            title={t("membership.upgradeMembership")}
          >
            {t("membership.upgradeMembership")}
          </StyledRouterButtonInline>
        )}
    </StyledAccountMembershipPlanWrapper>
  );
};
