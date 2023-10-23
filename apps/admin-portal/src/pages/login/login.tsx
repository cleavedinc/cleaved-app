import React, { FunctionComponent } from "react";
import { HeaderLoggedOut } from "../../components";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { LoginDataWrapper } from "../../data-wrappers";

export const Login: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <MainColumnMaxWidthWrapper>
          <LoginDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
