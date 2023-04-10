import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { OrganizationMembershipsContextProvider } from "../../contexts";
import { AsideOrganizationRegisterDataWrapper, OrganizationRegisterDataWrapper } from "../../data-wrappers";

export const OrganizationRegister: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideOrganizationRegisterDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <OrganizationMembershipsContextProvider>
          <OrganizationRegisterDataWrapper />
        </OrganizationMembershipsContextProvider>
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
