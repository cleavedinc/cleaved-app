import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { AsideTermsOfServiceAgreementDataWrapper, TermsOfServiceAgreementDataWrapper } from "../../data-wrappers";

export const TermsOfServiceAgreement: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideTermsOfServiceAgreementDataWrapper />
      </LeftColumnWrapper>

      <MainColumnWrapperMaxWidth>
        <TermsOfServiceAgreementDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
