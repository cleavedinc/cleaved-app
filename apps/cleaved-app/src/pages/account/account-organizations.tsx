import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { OrganizationMembershipsContextProvider } from "../../contexts";
import { AsideAccountDataWrapper, AccountOrganizationListDataWrapper } from "../../data-wrappers";

export const AccountOrganizations: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <OrganizationMembershipsContextProvider>
          <AccountOrganizationListDataWrapper />
        </OrganizationMembershipsContextProvider>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
