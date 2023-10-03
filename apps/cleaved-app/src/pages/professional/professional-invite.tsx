import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { authTokenContext } from "../../contexts";
import { AsideSharelinkInviteDataWrapper, PeopleListProfessionalInviteDataWrapper } from "../../data-wrappers";
import { useOrganizationMembershipPermissionBillingCounts, useMembershipUserLimitHit } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

export const PeopleListProfessionalInvite: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const {
    organizationMembershipPermissionBillingCountsData,
    organizationMembershipPermissionBillingCountsDataLoading,
  } = useOrganizationMembershipPermissionBillingCounts();

  const membershipUserLimitHit = useMembershipUserLimitHit(
    organizationMembershipPermissionBillingCountsData?.billingTier,
    organizationMembershipPermissionBillingCountsData?.memberCount
  );

  if (membershipUserLimitHit) {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.membershipLimit.route}`);
  }

  if (!organizationMembershipPermissionBillingCountsDataLoading && !membershipUserLimitHit) {
    return (
      <>
        <Header />

        <ContentWrapper>
          <LeftColumnWrapper>
            <AsideSharelinkInviteDataWrapper />
          </LeftColumnWrapper>

          <MainColumnWrapper>
            <PeopleListProfessionalInviteDataWrapper />
          </MainColumnWrapper>
        </ContentWrapper>
      </>
    );
  }
};
