import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideMembershipPlansDataWrapper, MembershipPlansDataWrapper } from "../../data-wrappers";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationPermission } from "../../permissions";

export const MembershipPlans: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);

  if (!hasPermission) {
    return <Header />;
  }

  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideMembershipPlansDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <MembershipPlansDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
