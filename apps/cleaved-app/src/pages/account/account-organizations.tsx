import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AccountOrganizationListDataWrapper } from "../../data-wrappers";

export const AccountOrganizations: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>temp - something here</LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountOrganizationListDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
