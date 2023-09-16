import React, { FunctionComponent } from "react";

import { ContentWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { Header } from "../../components";
import { ProfessionalDataWrapper } from "../../data-wrappers";

export const Professional: FunctionComponent = () => {
  return (
    <>
      <Header />

      <ContentWrapper>
        <MainColumnMaxWidthWrapper>
          <ProfessionalDataWrapper />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
