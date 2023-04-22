import React, { FunctionComponent } from "react";

import { PrivacyPolicyInformation } from "@cleaved/helpers";
import { ContentWrapper, LeftColumnWrapper, MainColumnWrapper } from "@cleaved/ui";

import { AsideAccountDataWrapper } from "../../data-wrappers";
import { useLoginGuard } from "../../hooks";

export const PrivacyPolicy: FunctionComponent = () => {
  const { isLoggedIn } = useLoginGuard();

  return (
    <ContentWrapper>
      {isLoggedIn && (
        <LeftColumnWrapper>
          <AsideAccountDataWrapper />
        </LeftColumnWrapper>
      )}

      <MainColumnWrapper>
        <PrivacyPolicyInformation />
      </MainColumnWrapper>
    </ContentWrapper>
  );
};
