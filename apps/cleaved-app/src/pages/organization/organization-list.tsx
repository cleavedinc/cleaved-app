import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapper } from "@cleaved/ui";

import { OrganizationMembershipsContextProvider } from "../../contexts";
import { OrganizationListDataWrapper } from "../../data-wrappers";

export const OrganizationList: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapper>
        <OrganizationMembershipsContextProvider>
          <OrganizationListDataWrapper />
        </OrganizationMembershipsContextProvider>
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
