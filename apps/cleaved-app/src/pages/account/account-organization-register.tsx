import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { OrganizationMembershipsContextProvider } from "../../contexts";
import { AsideOrganizationRegisterDataWrapper, OrganizationRegisterDataWrapper } from "../../data-wrappers";

export const AccountOrganizationRegister: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideOrganizationRegisterDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <OrganizationMembershipsContextProvider>
          <OrganizationRegisterDataWrapper />
        </OrganizationMembershipsContextProvider>
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
