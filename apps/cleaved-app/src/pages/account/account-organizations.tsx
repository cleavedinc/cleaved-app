import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper, AccountOrganizationListDataWrapper } from "../../data-wrappers";

export const AccountOrganizations: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountOrganizationListDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
