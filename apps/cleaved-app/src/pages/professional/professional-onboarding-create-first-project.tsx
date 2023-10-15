import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProgressBar, CreateFirstProject, HeaderLoggedOut } from "../../components";
import { AsideProfessionalOnboardingCreateFirstProjectDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingCreateFirstProject: FunctionComponent = () => {
  return (
    <>
      <HeaderLoggedOut />

      <ContentWrapper>
        <LeftColumnWrapper>
          <AsideProfessionalOnboardingCreateFirstProjectDataWrapper />
        </LeftColumnWrapper>

        <MainColumnMaxWidthWrapper>
          <ProgressBar activeStep={2} />

          <CreateFirstProject />
        </MainColumnMaxWidthWrapper>
      </ContentWrapper>
    </>
  );
};
