import React, { FunctionComponent } from "react";

import { TermsOfServiceInformation } from "@cleaved/helpers";
import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper } from "../../data-wrappers";
import { useLoginGuard } from "../../hooks";

export const TermsOfService: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();

  return (
    <ContentWrapper>
      {isLoggedIn && (
        <LeftColumnWrapper>
          <AsideAccountDataWrapper />
        </LeftColumnWrapper>
      )}

      <MainColumnWrapper>
        <TermsOfServiceInformation />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
