import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { AsideMembershipDataWrapper, MembershipDataWrapper } from "../../data-wrappers";
import { OrgPermissionLevel } from "../../generated-types/graphql";
import { useOrganizationPermission } from "../../permissions";

export const Membership: FunctionComponent = () => {
  const hasPermission = useOrganizationPermission([OrgPermissionLevel.Admin]);

  if (!hasPermission) {
    return <Header />;
  }

  return (
    <>
      <Header />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideMembershipDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <MembershipDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
