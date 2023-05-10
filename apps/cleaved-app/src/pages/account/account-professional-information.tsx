import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper, AccountProfessionalInformationDataWrapper } from "../../data-wrappers";

export const AccountProfessionalInformation: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideAccountDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapper>
        <AccountProfessionalInformationDataWrapper />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
