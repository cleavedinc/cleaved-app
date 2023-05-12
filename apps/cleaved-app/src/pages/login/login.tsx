import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { LoginDataWrapper } from "../../data-wrappers";

export const Login: FunctionComponent = () => {
  console.log("process.env.NODE_ENV", process.env.NODE_ENV);

  return (
    <ContentWrapper>
      <MainColumnMaxWidthWrapper>
        <LoginDataWrapper />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
