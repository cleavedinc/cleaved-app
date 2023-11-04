import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { Box, ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper, SPACING } from "@cleaved/ui";

import { Header, StyledRouterButton } from "../../components";
import { authTokenContext } from "../../contexts";
import { AsideSharelinkInviteDataWrapper, PeopleListProfessionalInviteDataWrapper } from "../../data-wrappers";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import {
  useOrganizationMembershipPermissionBillingCounts,
  useMembershipUserLimitHit,
  useTranslator,
} from "../../hooks";
import { useOrganizationPermission } from "../../permissions";
import { routeConstantsCleavedApp } from "../../router";

const StyledMembershipLimitBox = styled(Box)`
  color: ${({ theme }) => theme.colors.always_white_color};
  background-color: ${({ theme }) => theme.colors.always_red_color};
`;

const StyledStyledRouterButton = styled(StyledRouterButton)`
  margin-top: ${SPACING.MEDIUM};
`;

export const PeopleListProfessionalInvite: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);
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
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideSharelinkInviteDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          {!organizationMembershipPermissionBillingCountsDataLoading && membershipUserLimitHit && (
            <>
              <StyledMembershipLimitBox>
                <div>{t("membership.membershipLimitNonAdminText")}</div>

                {hasPermission && (
                  <StyledStyledRouterButton
                    title={t("membership.upgradeMembership")}
                    to={`/${preferredOrgId}${routeConstantsCleavedApp.membershipPlans.route}`}
                  >
                    {t("membership.upgradeMembership")}
                  </StyledStyledRouterButton>
                )}
              </StyledMembershipLimitBox>
            </>
          )}

          <PeopleListProfessionalInviteDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
