import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { LoginDataWrapper } from "../../data-wrappers";

export const Login: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <LoginDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
