import React, { FunctionComponent, useContext } from "react";
import { navigate } from "@reach/router";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { authTokenContext } from "../../contexts";
import { AsideProjectStartNewDataWrapper, ProjectFormDataWrapper } from "../../data-wrappers";
import { useOrganizationMembershipPermissionBillingCounts, useMembershipProjectLimitHit } from "../../hooks";
import { routeConstantsCleavedApp } from "../../router";

export const ProjectForm: FunctionComponent = () => {
  const { preferredOrgId } = useContext(authTokenContext);
  const {
    organizationMembershipPermissionBillingCountsData,
    organizationMembershipPermissionBillingCountsDataLoading,
  } = useOrganizationMembershipPermissionBillingCounts();

  const membershipProjectLimitHit = useMembershipProjectLimitHit(
    organizationMembershipPermissionBillingCountsData?.billingTier,
    organizationMembershipPermissionBillingCountsData?.projectCount
  );

  if (!organizationMembershipPermissionBillingCountsDataLoading && membershipProjectLimitHit) {
    navigate(`/${preferredOrgId}${routeConstantsCleavedApp.membershipLimit.route}`);
  }

  if (!organizationMembershipPermissionBillingCountsDataLoading && !membershipProjectLimitHit) {
    return (
      <>
        <Header />

        <ContentWrapper>
          <LeftColumnWrapper>
            <AsideProjectStartNewDataWrapper />
          </LeftColumnWrapper>

          <MainColumnMaxWidthWrapper>
            <ProjectFormDataWrapper />
          </MainColumnMaxWidthWrapper>
        </ContentWrapper>
      </>
    );
  }
};
