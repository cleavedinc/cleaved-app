import React, { FunctionComponent } from "react";

import { ContentWrapper, LeftColumnWrapper, MainColumnMaxWidthWrapper } from "@cleaved/ui";

import { ProgressBar, CreateFirstProject } from "../../components";
import { AsideProfessionalOnboardingDataWrapper } from "../../data-wrappers";

export const ProfessionalOnboardingCreateFirstProject: FunctionComponent = () => {
  return (
    <ContentWrapper>
      <LeftColumnWrapper>
        <AsideProfessionalOnboardingDataWrapper />
      </LeftColumnWrapper>

      <MainColumnMaxWidthWrapper>
        <ProgressBar activeStep={2} />

        <CreateFirstProject />
      </MainColumnMaxWidthWrapper>
    </ContentWrapper>
  );
};
