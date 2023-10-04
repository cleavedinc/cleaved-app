import React, { FunctionComponent } from "react";

import { LinkButtonPrimary, LinkButtonSecondary, Box, Paragraph } from "@cleaved/ui";

import { BillingTier, OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationMembershipPermissionBillingCounts, useTranslator } from "../../hooks";
import { useOrganizationPermission } from "../../permissions";

import { MembershipData } from "./components";

export const MembershipLimitDataWrapper: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
  const {
    organizationMembershipPermissionBillingCountsData,
    organizationMembershipPermissionBillingCountsDataLoading,
  } = useOrganizationMembershipPermissionBillingCounts();
  const { t } = useTranslator();

  if (!organizationMembershipPermissionBillingCountsDataLoading && !hasPermission) {
    return <Box>{t("membership.membershipLimitNonAdminText")}</Box>;
  }

  if (
    !organizationMembershipPermissionBillingCountsDataLoading &&
    hasPermission &&
    organizationMembershipPermissionBillingCountsData?.billingTier === BillingTier.Professional
  ) {
    return (
      <Box>
        <Paragraph>{t("membership.membershipContactUsText")}</Paragraph>

        <LinkButtonPrimary
          href={`mailto:?subject=${t("contactUs.mailtoUpgradeMembershipPlanSubjectText")}&body=${t(
            "contactUs.mailtoUpgradeMembershipPlanEmailBodyText"
          )}`}
        >
          {t("membership.membershipContactUs")}
        </LinkButtonPrimary>
      </Box>
    );
  }

  if (
    !organizationMembershipPermissionBillingCountsDataLoading &&
    organizationMembershipPermissionBillingCountsData?.billingTier === BillingTier.Free
  ) {
    return (
      <>
        <Box>
          <Paragraph>{t("membership.membershipLimitAdminText")}</Paragraph>

          <LinkButtonSecondary
            href={`mailto:?subject=${t("contactUs.mailtoUpgradeMembershipPlanSubjectText")}&body=${t(
              "contactUs.mailtoUpgradeMembershipPlanEmailBodyText"
            )}`}
          >
            {t("membership.membershipContactUs")}
          </LinkButtonSecondary>
        </Box>

        <MembershipData />
      </>
    );
  }
};
