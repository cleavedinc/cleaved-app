import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnWrapperMaxWidth } from "@cleaved/ui";

import { ValuePropLogin } from "./posts";

export const Login: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <MainColumnWrapperMaxWidth>
        <ValuePropLogin />
      </MainColumnWrapperMaxWidth>
    </ContentWrapper>
  );
};
