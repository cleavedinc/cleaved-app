import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { MembershipPlansDataWrapper } from "../../data-wrappers";
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
        <MainColumnWrapper>
          <MembershipPlansDataWrapper />
        </MainColumnWrapper>
      </ContentWrapper>
    </>
  );
};
