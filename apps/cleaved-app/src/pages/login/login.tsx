import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { LoginDataWrapper } from "../../data-wrappers";

export const Login: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapperMaxWidth>
        <LoginDataWrapper />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
