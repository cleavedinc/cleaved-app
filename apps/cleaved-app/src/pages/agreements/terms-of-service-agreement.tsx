import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { AsideTermsOfServiceAgreementDataWrapper, TermsOfServiceAgreementDataWrapper } from "../../data-wrappers";

export const TermsOfServiceAgreement: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideTermsOfServiceAgreementDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <TermsOfServiceAgreementDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
