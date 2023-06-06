import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideOrganizationRegisterDataWrapper, OrganizationRegisterDataWrapper } from "../../data-wrappers";

export const AccountOrganizationRegister: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideOrganizationRegisterDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <OrganizationRegisterDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
